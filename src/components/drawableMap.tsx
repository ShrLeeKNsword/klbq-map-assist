import React, { useLayoutEffect, useRef, useState } from 'react';
import { RoughCanvas } from 'roughjs/bin/canvas';
import { Drawable } from 'roughjs/bin/core';
import { RoughGenerator } from 'roughjs/bin/generator';

interface DrawableMapProps {
  presentMapURL: string;
  penColor: string;
  canvasElements: canvasElement[];
  setCanvasElements: React.Dispatch<React.SetStateAction<canvasElement[]>>;
}

export interface canvasElement {
  type: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  roughElement: Drawable | undefined;
}

let generator: RoughGenerator | undefined = undefined;

function createElement(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color: string,
) {
  const roughElement = generator?.line(x1, y1, x2, y2, { stroke: color });

  return {
    type: 'line',
    x1,
    y1,
    x2,
    y2,
    color,
    roughElement,
  };
}

const DrawableMap: React.FC<DrawableMapProps> = (props) => {
  const [canvasMouseDown, setCanvasMouseDown] = useState(false);

  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current as unknown as HTMLDivElement;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const canvas = document.getElementById('canvas') as HTMLCanvasElement;

    canvas.width = containerWidth;
    canvas.height = containerHeight;
    canvas.style.width = `${containerWidth}px`;
    canvas.style.height = `${containerHeight}px`;

    const ctx = canvas.getContext('2d');
    ctx?.clearRect(0, 0, canvas.width, canvas.height);

    const roughCanvas = new RoughCanvas(canvas);
    generator = roughCanvas.generator;

    props.canvasElements.forEach((element) => {
      if (element.roughElement) {
        roughCanvas.draw(element.roughElement);
      }
    });
  }, [props.canvasElements]);

  const handleCanvasMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setCanvasMouseDown(true);

    const startPos = getMousePos(event);

    const element = createElement(
      startPos.realX,
      startPos.realY,
      startPos.realX,
      startPos.realY,
      props.penColor,
    );
    props.setCanvasElements((lastState) => [...lastState, element]);
  };

  const handleCanvasMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!canvasMouseDown) return;

    const { realX, realY } = getMousePos(event);

    const latestElement = props.canvasElements[props.canvasElements.length - 1];
    const element = createElement(
      latestElement.x1,
      latestElement.y1,
      realX,
      realY,
      props.penColor,
    );

    const updatedElements = [...props.canvasElements];
    updatedElements[updatedElements.length - 1] = element;
    props.setCanvasElements(updatedElements);
  };

  function getMousePos(event: React.MouseEvent) {
    const { clientX, clientY } = event;
    const target = event.target as HTMLDivElement;
    const { left, top } = target.getBoundingClientRect();

    const realX = clientX - left;
    const realY = clientY - top;

    console.log(realX, realY);
    return { realX, realY };
  }

  const handleCanvasMouseUp = () => {
    setCanvasMouseDown(false);
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '70%',
        height: '70%',
        marginLeft: '4rem',
      }}
      onMouseDown={handleCanvasMouseDown}
      onMouseUp={handleCanvasMouseUp}
      onMouseMove={handleCanvasMouseMove}>
      <img
        src={props.presentMapURL}
        style={{ height: '100%', width: '100%', objectFit: 'contain' }}
      />
      <canvas
        id="canvas"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default DrawableMap;

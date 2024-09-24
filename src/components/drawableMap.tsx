
import React, { useLayoutEffect, useRef, useState } from "react";
import { RoughCanvas } from "roughjs/bin/canvas";
import { RoughGenerator } from "roughjs/bin/generator";
import { canvasElement, mapTools } from "../utils/canvasConstants";
import { calculateWindow, drawElements, createLineElement, createPathElement } from "../utils/canvasUtils";

interface DrawableMapProps {
	presentMapURL: string;
	penColor: string;
	canvasElements: canvasElement[];
	setCanvasElements: React.Dispatch<React.SetStateAction<canvasElement[]>>;
	canvasTool: mapTools;
	penWidth: number;
}

// eslint-disable-next-line react-refresh/only-export-components
export let generator: RoughGenerator | undefined = undefined;

const DrawableMap: React.FC<DrawableMapProps> = (props) => {
	const [canvasMouseDown, setCanvasMouseDown] = useState(false);

	const containerRef = useRef(null);

	useLayoutEffect(() => {
		const container = containerRef.current as unknown as HTMLDivElement;
		const canvas = document.getElementById("canvas") as HTMLCanvasElement;

		calculateWindow(container, canvas);

		const ctx = canvas.getContext("2d");
		ctx?.clearRect(0, 0, canvas.width, canvas.height);

		const roughCanvas = new RoughCanvas(canvas);
		generator = roughCanvas.generator;

		switch (props.canvasTool) {
			case mapTools.LINE:
				container.style.cursor = "crosshair";
				break;
			case mapTools.PEN:
				container.style.cursor = "crosshair";
				break;
			case mapTools.SELECT:
				container.style.cursor = "default";
				break;
		}

		drawElements(props.canvasElements, roughCanvas, ctx!);
	}, [props.canvasElements, props.canvasTool]);

	const handleCanvasMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
		setCanvasMouseDown(true);
		const startPos = getMousePos(event);

		switch (props.canvasTool) {
			case mapTools.LINE:
				props.setCanvasElements((lastState) => [...lastState, createLineElement(
					startPos.realX,
					startPos.realY,
					startPos.realX,
					startPos.realY,
					props.penWidth,
					props.penColor
				)]);
				break;
			case mapTools.PEN:
				props.setCanvasElements((lastState) => [...lastState, createPathElement(startPos.realX, startPos.realY)]);
				break;
			case mapTools.SELECT:
				// TODO: Selection Box
				break;
		}

	};

	const handleCanvasMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		if (!canvasMouseDown) return;
		const { realX, realY } = getMousePos(event);

		const latestElement = props.canvasElements[props.canvasElements.length - 1];
		const element = latestElement.type === 'line' ? createLineElement(
			latestElement.x1,
			latestElement.y1,
			realX,
			realY,
			props.penWidth,
			props.penColor
		) : latestElement;

		switch (props.canvasTool) {
			case mapTools.LINE:
				if (element) {
					const updatedElements = [...props.canvasElements];
					updatedElements[updatedElements.length - 1] = element;

					props.setCanvasElements(updatedElements);
				}
				break;
			case mapTools.PEN:
				{
					const updatedElements = [...props.canvasElements];
					if (element.type === 'path') {
						element.points.push({ x: realX, y: realY });
					}

					updatedElements[updatedElements.length - 1] = element;
					props.setCanvasElements(updatedElements);
					break;
				}
			case mapTools.SELECT:
				props.setCanvasElements((lastState) => [...lastState]);
				break;
		}
	};

	function getMousePos(event: React.MouseEvent) {
		const { clientX, clientY } = event;
		const target = event.target as HTMLDivElement;
		const { left, top } = target.getBoundingClientRect();

		const realX = clientX - left;
		const realY = clientY - top;

		return { realX, realY };
	}

	const handleCanvasMouseUp = () => {
		setCanvasMouseDown(false);
	};

	return (
		<div
			ref={containerRef}
			style={{
				position: "relative",
				width: "100%",
				height: "600px",
				marginLeft: "4rem",
				overflow: "hidden",
			}}
			onMouseDown={handleCanvasMouseDown}
			onMouseUp={handleCanvasMouseUp}
			onMouseMove={handleCanvasMouseMove}
		>
			<img
				src={props.presentMapURL}
				style={{ height: "100%", width: "100%", objectFit: "contain" }}
			/>
			<canvas
				id="canvas"
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
				}}
			/>
		</div>
	);
};

export default DrawableMap;

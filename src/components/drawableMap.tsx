import React, { useLayoutEffect, useRef, useState } from "react";
import { RoughCanvas } from "roughjs/bin/canvas";
import { RoughGenerator } from "roughjs/bin/generator";
import { canvasElement, mapTools } from "../data/canvasConstants";

interface DrawableMapProps {
	presentMapURL: string;
	penColor: string;
	canvasElements: canvasElement[];
	setCanvasElements: React.Dispatch<React.SetStateAction<canvasElement[]>>;
	canvasTool: mapTools;
	penWidth: number;
}

let generator: RoughGenerator | undefined = undefined;

function createElement(
	x1: number,
	y1: number,
	x2: number,
	y2: number,
	strokeWidth: number,
	color: string
) {
	const roughElement = generator?.line(x1, y1, x2, y2, { stroke: color, roughness: 0, strokeWidth });

	return {
		type: "line",
		x1,
		y1,
		x2,
		y2,
		color,
		roughElement,
	};
}

function drawElement(canvasElements: canvasElement[], roughCanvas: RoughCanvas) {
	canvasElements.forEach((element) => {
		if (element.roughElement) {
			roughCanvas.draw(element.roughElement);
		}
	});
}

function calculateWindow(container: HTMLDivElement, canvas: HTMLCanvasElement) {
	const containerWidth = container.clientWidth;
	const containerHeight = container.clientHeight;

	canvas.width = containerWidth;
	canvas.height = containerHeight;
	canvas.style.width = `${containerWidth}px`;
	canvas.style.height = `${containerHeight}px`;
}

/**
 * Finds and returns the first canvas element that contains the specified position (x, y).
 *
 * @param x - The x-coordinate of the position to check.
 * @param y - The y-coordinate of the position to check.
 * @param elements - An array of canvas elements to search through.
 * @returns The first canvas element that contains the specified position, or undefined if no such element is found.
 */
function getElementByPos(x: number, y: number, elements: canvasElement[]) {
	return elements.find(element => {
		if (element.x1 < x && x < element.x2 && element.y1 < y && y < element.y2) {
			return element;
		}
	})
}

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

		drawElement(props.canvasElements, roughCanvas);
	}, [props.canvasElements, props.canvasTool]);

	const handleCanvasMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
		setCanvasMouseDown(true);

		const startPos = getMousePos(event);

		switch (props.canvasTool) {
			case mapTools.LINE:
				props.setCanvasElements((lastState) => [...lastState, createElement(
					startPos.realX,
					startPos.realY,
					startPos.realX,
					startPos.realY,
					props.penWidth,
					props.penColor
				)]);
				break;
			case mapTools.PEN:
				props.setCanvasElements((lastState) => [...lastState]);
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
		const element = createElement(
			latestElement.x1,
			latestElement.y1,
			realX,
			realY,
			props.penWidth,
			props.penColor
		);

		const updatedElements = [...props.canvasElements];
		updatedElements[updatedElements.length - 1] = element;

		switch (props.canvasTool) {
			case mapTools.LINE:
				props.setCanvasElements(updatedElements);
				break;
			case mapTools.PEN:
				props.setCanvasElements((lastState) => [...lastState, element]);
				break;
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
				width: "95%",
				height: "95%",
				maxHeight: "600px",
				marginLeft: "4rem",
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

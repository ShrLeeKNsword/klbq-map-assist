import { RoughCanvas } from "roughjs/bin/canvas";
import { generator } from "../components/drawableMap";
import { canvasElement } from "./canvasConstants";

export function createElement(
	x1: number,
	y1: number,
	x2: number,
	y2: number,
	strokeWidth: number,
	color: string) {
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
export function drawElement(canvasElements: canvasElement[], roughCanvas: RoughCanvas) {
	canvasElements.forEach((element) => {
		if (element.roughElement) {
			roughCanvas.draw(element.roughElement);
		}
	});
}
export function calculateWindow(container: HTMLDivElement, canvas: HTMLCanvasElement) {
	const containerWidth = container.clientWidth;
	const containerHeight = container.clientHeight;

	canvas.width = containerWidth;
	canvas.height = containerHeight;
	canvas.style.width = `${containerWidth}px`;
	canvas.style.height = `${containerHeight}px`;
}/**
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
	});
}


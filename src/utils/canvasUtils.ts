import { RoughCanvas } from "roughjs/bin/canvas";
import { generator } from "../components/drawableMap";
import { canvasElement } from "./canvasConstants";
import getStroke from "perfect-freehand";
import { Drawable } from "roughjs/bin/core";

// ! Pulled from the documentation (even I have no clue what this does but its magic)
function getSvgPathFromStroke(stroke: number[][]) {
	if (!stroke.length) return ''

	const d = stroke.reduce(
		(acc, [x0, y0], i, arr) => {
			const [x1, y1] = arr[(i + 1) % arr.length]
			acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2)
			return acc
		},
		['M', ...stroke[0], 'Q']
	)

	d.push('Z')
	return d.join(' ')
}

export function createPathElement(x1: number, y1: number, penWidth: number, color: string) {
	return {
		type: 'path', points: [{ x: x1, y: y1 }], penWidth, color
	} as canvasElement;
}

export function createLineElement(
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
	} as canvasElement;
}
export function drawElements(canvasElements: canvasElement[], roughCanvas: RoughCanvas, context: CanvasRenderingContext2D) {
	canvasElements.forEach((element) => {
		switch (element.type) {
			case "line":
				roughCanvas.draw(element.roughElement as Drawable);
				break;
			case "path":
				{
					const pathData = getSvgPathFromStroke(getStroke(element.points, {
						size: element.penWidth * 1.5,
					}))
					const myPath = new Path2D(pathData)
					context.fillStyle = element.color
					context.fill(myPath)
				}
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
	elements.find(element => {
		if (element.type === 'line') {
			if (element.x1 < x && x < element.x2 && element.y1 < y && y < element.y2) {
				return element;
			}
		} else {
			// element is path
		}
	});
}


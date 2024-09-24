import  { Drawable } from 'roughjs/bin/core';

export type canvasElement = canvasLineElement | canvasPathElement;

interface canvasLineElement {
	type: "line";
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	color: string;
	roughElement: Drawable | undefined;
}

interface canvasPathElement {
	type: "path";
	points: { x: number; y: number }[];
}

export enum mapTools {
	SELECT,
	LINE,
	PEN
}
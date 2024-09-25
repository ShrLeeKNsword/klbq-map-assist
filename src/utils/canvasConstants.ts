import { Drawable } from 'roughjs/bin/core';

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
	color: string;
	penWidth: number;
}

export enum mapTools {
	SELECT,
	LINE,
	PEN
}

export const colorPalette = [
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"purple",
	"white",
	"rgba(var(--semi-grey-2), 1)",
	"rgba(var(--semi-grey-4), 1)",
	"rgba(var(--semi-grey-6), 1)",
	"rgba(var(--semi-grey-8), 1)",
]
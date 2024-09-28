import { DrawType } from 'pikaso';
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

export type mapTools = DrawType | "SELECT";

export const colorPalette = [
	"#FF0000", // red
	"#FFA500", // orange
	"#FFFF00", // yellow
	"#008000", // green
	"#0000FF", // blue
	"#800080", // purple
	"#FFFFFF", // white
	"#B0B0B0", // semi-grey-2
	"#787878", // semi-grey-4
	"#404040", // semi-grey-6
	"#202020", // semi-grey-8
]
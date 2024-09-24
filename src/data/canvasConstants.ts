import  { Drawable } from 'roughjs/bin/core';

export interface canvasElement {
	type: string;
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	color: string;
	roughElement: Drawable | undefined;
}

export enum mapTools {
	SELECT,
	LINE,
	PEN
}
import { DrawType } from 'pikaso';

export type mapTools = DrawType | "SELECT" | "TEXT";

export const colorPalette = [
	"#FFFFFF",
	"#000000",
	"#f44336",
	"#ffeb3b",
	"#8bc34a",
	"#2196f3",
]

export const loadColors = () => {
	let colors = [...colorPalette]
	try {
		const localColors = JSON.parse(localStorage.getItem("colors")||'') as Array<string>
		if (localColors.length > 0) {
			colors = localColors
		}
	} catch (e) {
		console.error(e)
	}
	return colors
}

export const saveColors = (colors: Array<string>) => {
	localStorage.setItem("colors", JSON.stringify(colors))
}
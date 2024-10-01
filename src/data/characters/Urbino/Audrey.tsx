import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
	faction: factions.Urbino,
	id: Urbino.Audrey,
	attack: {
		canvasImage: 'https://s2.loli.net/2024/09/29/qD7YufUpTmbzX1x.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/26/9PqOBd7owjJrRVp.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/26/pfyJk2RLYsXlBFg.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/26/E6tTWi1Suls5Y9R.png',
				generateOnCanvas: ultimate
			}
		}
	},
	defense: {
		canvasImage: 'https://s2.loli.net/2024/09/29/IVhuSTZvYmk4CNj.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/26/9PqOBd7owjJrRVp.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/26/pfyJk2RLYsXlBFg.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/26/E6tTWi1Suls5Y9R.png',
				generateOnCanvas: ultimate
			}
		}
	}
}

function active() {
	return;
}

function passive() {
	return;
}

function ultimate() {
	return;
}

export default character;
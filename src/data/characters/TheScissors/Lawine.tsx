import { characterData } from "../characterRegistry";
import { factions, TheScissors } from "../factions";


const character: characterData = {
	faction: factions.TheScissors,
	id: TheScissors.Lawine,
	attack: {
		canvasImage: 'https://s2.loli.net/2024/09/29/DeK5afJoAhpyNcM.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/gOFlGIzPjxbpYKw.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/8AxLszwVIg17WGq.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/HuEnVYb8Mr5e24I.png',
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
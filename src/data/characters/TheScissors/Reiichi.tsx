import { characterData } from "../characterRegistry";
import { factions, TheScissors } from "../factions";


const character: characterData = {
	faction: factions.TheScissors,
	id: TheScissors.Reiichi,
	attack: {
		canvasImage: 'https://s2.loli.net/2024/09/29/txSOyYkT4pXhGBn.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/C6qts5xeVpS1N4E.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/iuSvZDYnFTzmBrl.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/bESOlDh9oURvFC3.png',
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
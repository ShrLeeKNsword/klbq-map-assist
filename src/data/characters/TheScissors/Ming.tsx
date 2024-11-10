import { characterData } from "../characterRegistry";
import { factions, TheScissors } from "../factions";


const character: characterData = {
	faction: factions.TheScissors,
	id: TheScissors.Ming,
	attack: {
		canvasImage: 'https://s2.loli.net/2024/09/29/nuhFZjpVGgJSEyc.png',
		bodyImage: 'https://s2.loli.net/2024/10/26/iD1g23pnC9d6hVM.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/NQ2TdSqhseRZY7b.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/bsAzZemy4uEcaHt.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/B6KC72wphAdt4Ri.png',
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
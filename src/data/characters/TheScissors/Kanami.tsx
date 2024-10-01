import { characterData } from "../characterRegistry";
import { factions, TheScissors } from "../factions";


const character: characterData = {
	faction: factions.TheScissors,
	id: TheScissors.Kanami,
	attack: {
		canvasImage: 'https://s2.loli.net/2024/09/29/7DHOLqvWMzmlch3.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/UBJqoYz835GvVxy.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/OHbINYGSQhFazcd.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/YH3Phg5XQumsbCM.png',
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
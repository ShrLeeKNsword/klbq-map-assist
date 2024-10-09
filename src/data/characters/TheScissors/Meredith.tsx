import { characterData } from "../characterRegistry";
import { factions, TheScissors } from "../factions";


const character: characterData = {
	faction: factions.TheScissors,
	id: TheScissors.Meredith,
	attack: {
		canvasImage: 'https://s2.loli.net/2024/09/29/C4QmVOhp1rB9Gd6.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/KWYZTSQmjOHJ2RX.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/O8kRqCVEDoK6T3p.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/V8KZrx9sY7QBlaP.png',
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
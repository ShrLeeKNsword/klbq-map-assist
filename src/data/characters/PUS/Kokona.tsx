import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";

const character: characterData = {
	faction: factions.PUS,
	id: PUS.Kokona,
	defense: {
		canvasImage: 'https://s2.loli.net/2024/09/29/jtlryiY8WHIGAMq.png',
		bodyImage: 'https://s2.loli.net/2024/11/10/QtjKmEz3ycWBkwS.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/9zFsMYumpwJZrTg.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/V8NijM5onGulX9m.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/tilQp18zRheBMaJ.png',
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
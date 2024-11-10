import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";


const character: characterData = {
	faction: factions.PUS,
	id: PUS.Yugiri,
	defense: {
		canvasImage: 'https://s2.loli.net/2024/11/10/Jq58o4vKDYUCcl1.png',
		bodyImage: 'https://s2.loli.net/2024/11/10/ApQHRnSsdcv1N2y.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/11/10/oW4UsSziGHnhLx2.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/11/10/jBC3dyGxKzmpQf2.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/11/10/T3huK4YzAXmrV8N.png',
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
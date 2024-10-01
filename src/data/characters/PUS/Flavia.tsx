import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";


const character: characterData = {
	faction: factions.PUS,
	id: PUS.Flavia,
	defense: {
		canvasImage: 'https://s2.loli.net/2024/09/29/jC98Rq3NhrUXYWK.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/58dg6OpPntlviqW.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/u5tV9xaNyjUL6EM.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/ezsVQS62bY5iBcG.png',
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
import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";

const character: characterData = {
	faction: factions.PUS,
	id: PUS.Michele,
	defense: {
		canvasImage: 'https://s2.loli.net/2024/09/29/29JH5SlaTdCwgFR.png',
		bodyImage: 'https://s2.loli.net/2024/11/10/L91feWEuwqX3sog.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/8iCzWDaNQPSxqvw.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/ANhKZ6GDzOIjPtf.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/UGeEvYfXiSgD4zr.png',
				generateOnCanvas: ultimate
			},
			sub: {
				skillIcon: 'https://cdn.sa.net/2024/11/19/fvrVnE8Ocl21Dpz.png',
				generateOnCanvas: sub
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

function sub() {
	return;
}

export default character;
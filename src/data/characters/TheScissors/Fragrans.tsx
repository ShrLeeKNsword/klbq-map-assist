import { characterData } from "../characterRegistry";
import { factions, TheScissors } from "../factions";


const character: characterData = {
	faction: factions.TheScissors,
	id: TheScissors.Fragrans,
	attack: {
		canvasImage: 'https://s2.loli.net/2024/09/29/AM58XCKyixJlTGO.png',
		bodyImage: 'https://s2.loli.net/2024/11/10/Crq1VE7yHgeb8JY.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/L9j3uWBrl5hNyzx.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/B3HDdTpLjAyYQ74.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/5Xk9PUOlwFsgE6B.png',
				generateOnCanvas: ultimate
			},
			sub: {
				skillIcon: 'https://cdn.sa.net/2024/11/19/JrTleR2xkfPysaA.png',
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
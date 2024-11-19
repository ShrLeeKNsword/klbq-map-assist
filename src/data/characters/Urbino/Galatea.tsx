import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
	faction: factions.Urbino,
	id: Urbino.Galatea,
	attack: {
		canvasImage: 'https://s2.loli.net/2024/09/29/wpBbSjafRNFD43K.png',
		bodyImage: 'https://s2.loli.net/2024/11/10/YWyb4X9vfRojmue.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/UQVBxmGPD9q1tsr.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/VmDbBPl9ezv5ZgU.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/xGpjiLgcUtTJbno.png',
				generateOnCanvas: ultimate
			},
			sub: {
				skillIcon: 'https://cdn.sa.net/2024/11/19/bNl54Ze1D7wWkJH.png',
				generateOnCanvas: sub
			}
		}
	},
	defense: {
		canvasImage: 'https://s2.loli.net/2024/09/29/t1vlASe5DNRHVZq.png',
		bodyImage: 'https://s2.loli.net/2024/11/10/YWyb4X9vfRojmue.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/UQVBxmGPD9q1tsr.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/VmDbBPl9ezv5ZgU.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/xGpjiLgcUtTJbno.png',
				generateOnCanvas: ultimate
			},
			sub: {
				skillIcon: 'https://cdn.sa.net/2024/11/19/bNl54Ze1D7wWkJH.png',
				generateOnCanvas: sub
			}
		}
	},
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
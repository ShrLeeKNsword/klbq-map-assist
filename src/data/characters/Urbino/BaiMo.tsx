import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
	faction: factions.Urbino,
	id: Urbino.BaiMo,
	attack: {
		canvasImage: 'https://s2.loli.net/2024/09/29/jt4621ivFRfbEqD.png',
		bodyImage: 'https://s2.loli.net/2024/11/10/Dt4NkXWiBxOrFby.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/eUzu75aSXVw2kQF.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/xvVheX57uGJMI2k.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/VkyGJKzHYr4pnlm.png',
				generateOnCanvas: ultimate
			}
		}
	},
	defense: {
		canvasImage: 'https://s2.loli.net/2024/09/29/2KrCPXp5k1e6wfm.png',
		bodyImage: 'https://s2.loli.net/2024/11/10/Dt4NkXWiBxOrFby.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/eUzu75aSXVw2kQF.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/xvVheX57uGJMI2k.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/VkyGJKzHYr4pnlm.png',
				generateOnCanvas: ultimate
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

export default character;
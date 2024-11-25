import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
	faction: factions.Urbino,
	id: Urbino.Celestia,
	attack: {
		canvasImage: 'https://s2.loli.net/2024/09/29/PI6eiLuZfcAQ2aR.png',
		bodyImage: 'https://s2.loli.net/2024/11/10/A2NZUdIRi365Erp.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/WmtSU2hFLBPaf85.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/O5dXCxh3R1wVINQ.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/bJalMyBfZ7iXVtx.png',
				generateOnCanvas: ultimate
			},
			sub: {
				skillIcon: 'https://cdn.sa.net/2024/11/19/xm5Io68zcXSZAn1.png',
				generateOnCanvas: sub
			}
		}
	},
	defense: {
		canvasImage: 'https://s2.loli.net/2024/09/29/Zt93QEgreUnvaxX.png',
		bodyImage: 'https://s2.loli.net/2024/11/10/A2NZUdIRi365Erp.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/WmtSU2hFLBPaf85.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/O5dXCxh3R1wVINQ.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/bJalMyBfZ7iXVtx.png',
				generateOnCanvas: ultimate
			},
			sub: {
				skillIcon: 'https://cdn.sa.net/2024/11/19/xm5Io68zcXSZAn1.png',
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
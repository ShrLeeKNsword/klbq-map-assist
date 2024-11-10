import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";

const character: characterData = {
		faction: factions.PUS,
		id: PUS.Nobunaga,
		defense: {
			canvasImage: 'https://s2.loli.net/2024/09/29/7UuX5VTR8AYWD2o.png',
			bodyImage: 'https://s2.loli.net/2024/10/26/iD1g23pnC9d6hVM.png',
			skills: {
				active: {
					skillIcon: 'https://s2.loli.net/2024/09/25/VJFzGhSyXmsiHpO.png',
					generateOnCanvas: active
				},
				passive: {
					skillIcon: 'https://s2.loli.net/2024/09/25/AHsc9o8W25UlpNa.png',
					generateOnCanvas: passive
				},
				ultimate: {
					skillIcon: 'https://s2.loli.net/2024/09/25/Vr78sb9T32ADMuy.png',
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
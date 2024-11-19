import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";

const character: characterData = {
		faction: factions.PUS,
		id: PUS.Nobunaga,
		defense: {
			canvasImage: 'https://s2.loli.net/2024/09/29/7UuX5VTR8AYWD2o.png',
			bodyImage: 'https://s2.loli.net/2024/11/10/KaCqzDoHp8cwkUV.png',
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
				},
				sub: {
					skillIcon: 'https://cdn.sa.net/2024/11/19/MTjuAvcKSq6RNiU.png',
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
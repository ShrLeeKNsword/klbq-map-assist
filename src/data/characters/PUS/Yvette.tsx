import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";


const character: characterData = {
	faction: factions.PUS,
	id: PUS.Yvette,
	defense: {
		canvasImage: 'https://s2.loli.net/2024/09/29/eIVFmswk3tUlOcR.png',
		bodyImage: 'https://s2.loli.net/2024/11/10/q6fITYibXaDp7G4.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/ESH6FNKQjbafMZn.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/2hqoyUWsnbA83BP.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/32VnSv59tPwTIhl.png',
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
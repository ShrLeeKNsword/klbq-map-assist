import path from 'node:path';
import { factions, PUS, TheScissors, Urbino } from "./factions";

const characterRegistry: { [key: string]: characterData } = {};

export function registerCharacter(character: characterData) {
	characterRegistry[character.id] = character;
}

export async function loadAllCharacters() {
	const factionEnums = [PUS, TheScissors, Urbino];

	for (const factionEnum of factionEnums) {
		for (const characterName of Object.values(factionEnum)) {
			const characterPath = path.resolve(__dirname, `./data/characters/${factionEnum}/${characterName}.tsx`);
			try {
				const characterModule = await import(characterPath);
				const character: characterData = characterModule.default;
				registerCharacter(character);
			} catch (error) {
				console.error(`Failed to load character: ${characterName} from faction: ${factionEnum}`, error);
			}
		}
	}
}

export default characterRegistry;

interface sideData {
	canvasImage: string;
	skills: {
		passive: {
			skillIcon: string;
			generateOnCanvas: () => void;
		},
		active: {
			skillIcon: string;
			generateOnCanvas: () => void;

		},
		ultimate: {
			skillIcon: string;
			generateOnCanvas: () => void;
		}
	}
}

export type characterData = {
	faction: factions;
	id: PUS | TheScissors | Urbino;
	attack?: sideData
	defense?: sideData
}
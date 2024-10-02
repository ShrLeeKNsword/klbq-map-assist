import { factions, PUS, TheScissors, Urbino } from "./factions";

export interface characterRegistry {
	[key: string]: characterData
}

const characterRegistry: characterRegistry = {};

export function registerCharacter(character: characterData) {
	characterRegistry[character.id] = character;
}

export async function loadAllCharacters() {
	const factionEnums = {
		[factions.PUS]: PUS,
		[factions.TheScissors]: TheScissors,
		[factions.Urbino]: Urbino
	};

	for (const faction of Object.keys(factionEnums)) {
		for (const characterName of Object.keys(factionEnums[faction as factions])) {
			try {
				const characterModule = await import(`./${faction}/${characterName}.tsx`);
				const character: characterData = characterModule.default;
				registerCharacter(character);
			} catch (error) {
				console.error(`Failed to load character: ${characterName} from faction: ${faction}`, error);
			}
		}
	}

	return characterRegistry;
}

export default characterRegistry;

export interface sideData {
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
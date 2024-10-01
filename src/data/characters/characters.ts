// import { factions, PUS, TheScissors, Urbino } from "./factions";
// import { active, character, passive, ultimate } from "./PUS/Michele";

// export function getCharacterById(characters: characterData[], id: PUS | TheScissors | Urbino): characterData | undefined {
// 	return characters.find(character => character.id === id);
// }

// export function getCharactersByFaction(characters: characterData[], faction: factions): characterData[] {
// 	return characters.filter(character => character.faction === faction);
// }

// export function getCharacterAbilities(character: characterData): abilityData[] {
// 	const abilities: abilityData[] = [];
// 	if (character.attack) {
// 		abilities.push(character.attack.skills);
// 	}
// 	if (character.defense) {
// 		abilities.push(character.defense.skills);
// 	}
// 	return abilities;
// }

// 	[PUS.Yvette]: {
// 		faction: factions.PUS,
// 		id: PUS.Yvette,
// 		defense: {
// 			canvasImage: 'https://s2.loli.net/2024/09/29/eIVFmswk3tUlOcR.png'
// 		}
// 	},
// 	[PUS.Flavia]: {
// 		faction: factions.PUS,
// 		id: PUS.Flavia,
// 		defense: {
// 			canvasImage: 'https://s2.loli.net/2024/09/29/jC98Rq3NhrUXYWK.png'
// 		}
// 	},
// 	[TheScissors.Ming]: {
// 		faction: factions.TheScissors,
// 		id: TheScissors.Ming,
// 		attack: {
// 			canvasImage: 'https://s2.loli.net/2024/09/29/nuhFZjpVGgJSEyc.png'
// 		}
// 	},
// 	[TheScissors.Lawine]: {
// 		faction: factions.TheScissors,
// 		id: TheScissors.Lawine,
// 		attack: {
// 			canvasImage: 'https://s2.loli.net/2024/09/29/DeK5afJoAhpyNcM.png'
// 		}
// 	},
// 	[TheScissors.Meredith]: {
// 		faction: factions.TheScissors,
// 		id: TheScissors.Meredith,
// 		attack: {
// 			canvasImage: 'https://s2.loli.net/2024/09/29/C4QmVOhp1rB9Gd6.png'
// 		}
// 	},
// 	[TheScissors.Reiichi]: {
// 		faction: factions.TheScissors,
// 		id: TheScissors.Reiichi,
// 		attack: {
// 			canvasImage: 'https://s2.loli.net/2024/09/29/txSOyYkT4pXhGBn.png'
// 		}
// 	},
// 	[TheScissors.Kanami]: {
// 		faction: factions.TheScissors,
// 		id: TheScissors.Kanami,
// 		attack: {
// 			canvasImage: 'https://s2.loli.net/2024/09/29/7DHOLqvWMzmlch3.png'
// 		}
// 	},
// 	[TheScissors.Eika]: {
// 		faction: factions.TheScissors,
// 		id: TheScissors.Eika,
// 		attack: {
// 			canvasImage: 'https://s2.loli.net/2024/09/29/SrnDsxX5bAiBNcE.png'
// 		}
// 	},
// 	[TheScissors.Fragrans]: {
// 		faction: factions.TheScissors,
// 		id: TheScissors.Fragrans,
// 		attack: {
// 			canvasImage: 'https://s2.loli.net/2024/09/29/AM58XCKyixJlTGO.png'
// 		}
// 	},
// 	[Urbino.Audrey]: {
// 		faction: factions.Urbino,
// 		id: Urbino.Audrey,
// 		attack: {
// 			canvasImage: 'https://s2.loli.net/2024/09/29/qD7YufUpTmbzX1x.png'
// 		},
// 		defense: {
// 			canvasImage: 'https://s2.loli.net/2024/09/29/IVhuSTZvYmk4CNj.png'
// 		}
// 	},
// 	[Urbino.Maddelena]: {
// 		faction: factions.PUS,
// 		id: Urbino.Maddelena,
// 		attack: {
// 			canvasImage: "https://s2.loli.net/2024/09/29/OGgXKe6pPERflQL.png"
// 		},
// 		defense: {
// 			canvasImage: "https://s2.loli.net/2024/09/29/dxqSrs3ivIJlF5h.png"
// 		}
// 	},
// 	[Urbino.Fuchsia]: {
// 		faction: factions.Urbino,
// 		id: Urbino.Fuchsia,
// 		attack: {
// 			canvasImage: "https://s2.loli.net/2024/09/29/5Vbc3mYw8KJtTDC.png"
// 		},
// 		defense: {
// 			canvasImage: "https://s2.loli.net/2024/09/29/TU81atfzDKiRV2o.png"
// 		}
// 	},
// 	[Urbino.Celestia]: {
// 		faction: factions.Urbino,
// 		id: Urbino.Celestia,
// 		attack: {
// 			canvasImage: "https://s2.loli.net/2024/09/29/PI6eiLuZfcAQ2aR.png"
// 		},
// 		defense: {
// 			canvasImage: "https://s2.loli.net/2024/09/29/Zt93QEgreUnvaxX.png"
// 		}
// 	},
// 	[Urbino.BaiMo]: {
// 		faction: factions.Urbino,
// 		id: Urbino.BaiMo,
// 		attack: {
// 			canvasImage: "https://s2.loli.net/2024/09/29/jt4621ivFRfbEqD.png"
// 		},
// 		defense: {
// 			canvasImage: "https://s2.loli.net/2024/09/29/2KrCPXp5k1e6wfm.png"
// 		}
// 	},
// 	[Urbino.Galatea]: {
// 		faction: factions.Urbino,
// 		id: Urbino.Galatea,
// 		attack: {
// 			canvasImage: "https://s2.loli.net/2024/09/29/wpBbSjafRNFD43K.png"
// 		},
// 		defense: {
// 			canvasImage: "https://s2.loli.net/2024/09/29/t1vlASe5DNRHVZq.png"
// 		}
// 	}
// }

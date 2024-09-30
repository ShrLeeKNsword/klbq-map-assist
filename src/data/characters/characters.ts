import { factions, PUS, TheScissors, Urbino } from "./factions";

interface abilityData {
	passive: {
		canvasImage: string;
	},
	active: {
		canvasImage: string;
		rangeRadius?: number;
	},
	ultimate: {
		canvasImage: string;
		rangeRadius?: number;
	}
}

type characterData = {
	faction: factions;
	id: PUS | TheScissors | Urbino;
	attack?: {
		canvasImage: string;
		skills: abilityData;
	},
	defense?: {
		canvasImage: string;
		skills: abilityData;
	}
}

type characterDatas = {
	[key in PUS | TheScissors | Urbino]: characterData;
}

export function getCharacterById(characters: characterData[], id: PUS | TheScissors | Urbino): characterData | undefined {
	return characters.find(character => character.id === id);
}

export function getCharactersByFaction(characters: characterData[], faction: factions): characterData[] {
	return characters.filter(character => character.faction === faction);
}

export function getCharacterAbilities(character: characterData): abilityData[] {
	const abilities: abilityData[] = [];
	if (character.attack) {
		abilities.push(character.attack.skills);
	}
	if (character.defense) {
		abilities.push(character.defense.skills);
	}
	return abilities;
}

export const characterData: characterDatas = {
	[PUS.Michele]: {
		faction: factions.PUS,
		id: PUS.Michele,
		defense: {
			canvasImage: 'https://s2.loli.net/2024/09/29/29JH5SlaTdCwgFR.png',
			skills: {
				active: {
					canvasImage: "https://s2.loli.net/2024/09/25/8iCzWDaNQPSxqvw.png",
					rangeRadius: 0
				},
				passive: {
					canvasImage: 'https://s2.loli.net/2024/09/25/ANhKZ6GDzOIjPtf.png',
				},
				ultimate: {
					canvasImage: "https://s2.loli.net/2024/09/25/UGeEvYfXiSgD4zr.png",
					rangeRadius: 0
				}
			}
		}
	},
	[PUS.Nobunaga]: {
		faction: factions.PUS,
		id: PUS.Nobunaga,
		defense: {
			canvasImage: 'https://s2.loli.net/2024/09/29/7UuX5VTR8AYWD2o.png',
			skills: {
				passive: {
					canvasImage: "https://s2.loli.net/2024/09/25/AHsc9o8W25UlpNa.png"
				},
				active: {
					canvasImage: "https://s2.loli.net/2024/09/25/VJFzGhSyXmsiHpO.png	",
					rangeRadius: 0
				},
				ultimate: {
					canvasImage: "https://s2.loli.net/2024/09/25/Vr78sb9T32ADMuy.png",
					rangeRadius: 0
				}
			}
		}
	},
	[PUS.Kokona]: {
		faction: factions.PUS,
		id: PUS.Kokona,
		defense: {
			canvasImage: 'https://s2.loli.net/2024/09/29/jtlryiY8WHIGAMq.png',
			skills: {
				passive: {
					canvasImage: "https://s2.loli.net/2024/09/25/V8NijM5onGulX9m.png"
				},
				active: {
					canvasImage: "https://s2.loli.net/2024/09/25/9zFsMYumpwJZrTg.png",
					rangeRadius: undefined
				},
				ultimate: {
					canvasImage: "https://s2.loli.net/2024/09/25/tilQp18zRheBMaJ.png",
					rangeRadius: undefined
				}
			}
		}
	},
	[PUS.Yvette]: {
		faction: factions.PUS,
		id: PUS.Yvette,
		defense: {
			canvasImage: 'https://s2.loli.net/2024/09/29/eIVFmswk3tUlOcR.png',
			skills: {
				active: {
					canvasImage: "https://s2.loli.net/2024/09/25/ESH6FNKQjbafMZn.png",
					rangeRadius: 0
				},
				passive: {
					canvasImage: 'https://s2.loli.net/2024/09/25/2hqoyUWsnbA83BP.png',
				},
				ultimate: {
					canvasImage: 'https://s2.loli.net/2024/09/25/32VnSv59tPwTIhl.png',
					rangeRadius: 0
				}
			}
		}
	},
	[PUS.Flavia]: {
		faction: factions.PUS,
		id: PUS.Flavia,
		defense: {
			canvasImage: 'https://s2.loli.net/2024/09/29/jC98Rq3NhrUXYWK.png',
			skills: {
				active: {
					canvasImage: 'https://s2.loli.net/2024/09/25/58dg6OpPntlviqW.png',
				},
				passive: {
					canvasImage: 'https://s2.loli.net/2024/09/25/u5tV9xaNyjUL6EM.png',
				},
				ultimate: {
					canvasImage: 'https://s2.loli.net/2024/09/25/ezsVQS62bY5iBcG.png',
					rangeRadius: 0
				}
			}
		}
	},
	[TheScissors.Ming]: {
		faction: factions.TheScissors,
		id: TheScissors.Ming,
		attack: {
			canvasImage: 'https://s2.loli.net/2024/09/29/nuhFZjpVGgJSEyc.png',
			skills: {
				active: {
					canvasImage: 'https://s2.loli.net/2024/09/25/NQ2TdSqhseRZY7b.png',
					rangeRadius: undefined
				},
				passive: {
					canvasImage: 'https://s2.loli.net/2024/09/25/bsAzZemy4uEcaHt.png',
				},
				ultimate: {
					canvasImage: 'https://s2.loli.net/2024/09/25/B6KC72wphAdt4Ri.png',
				}
			}
		}
	},
	[TheScissors.Lawine]: {
		faction: factions.TheScissors,
		id: TheScissors.Lawine,
		attack: {
			canvasImage: 'https://s2.loli.net/2024/09/29/DeK5afJoAhpyNcM.png',
			skills: {
				active: {
					canvasImage: 'https://s2.loli.net/2024/09/25/gOFlGIzPjxbpYKw.png',
					rangeRadius: 0
				},
				passive: {
					canvasImage: 'https://s2.loli.net/2024/09/25/8AxLszwVIg17WGq.png',
				},
				ultimate: {
					canvasImage: 'https://s2.loli.net/2024/09/25/HuEnVYb8Mr5e24I.png',
					// ! Another kind of range
				}
			}
		}
	},
	[TheScissors.Meredith]: {
		faction: factions.TheScissors,
		id: TheScissors.Meredith,
		attack: {
			canvasImage: 'https://s2.loli.net/2024/09/29/C4QmVOhp1rB9Gd6.png',
			skills: {
				active: {
					canvasImage: 'https://s2.loli.net/2024/09/25/KWYZTSQmjOHJ2RX.png',
					rangeRadius: 0
				},
				passive: {
					canvasImage: 'https://s2.loli.net/2024/09/25/O8kRqCVEDoK6T3p.png',
				},
				ultimate: {
					canvasImage: 'https://s2.loli.net/2024/09/25/V8KZrx9sY7QBlaP.png',
					rangeRadius: 0
				}
			}
		}
	},
	[TheScissors.Reiichi]: {
		faction: factions.TheScissors,
		id: TheScissors.Reiichi,
		attack: {
			canvasImage: 'https://s2.loli.net/2024/09/29/txSOyYkT4pXhGBn.png',
			skills: {
				active: {
					canvasImage: 'https://s2.loli.net/2024/09/25/C6qts5xeVpS1N4E.png',
					// ! Another kind of range
				},
				passive: {
					canvasImage: 'https://s2.loli.net/2024/09/25/iuSvZDYnFTzmBrl.png',
				},
				ultimate: {
					canvasImage: 'https://s2.loli.net/2024/09/25/bESOlDh9oURvFC3.png',
					// ! Another kind of range
				}
			}
		}
	},
	[TheScissors.Kanami]: {
		faction: factions.TheScissors,
		id: TheScissors.Kanami,
		attack: {
			canvasImage: 'https://s2.loli.net/2024/09/29/7DHOLqvWMzmlch3.png',
			skills: {
				active: {
					canvasImage: 'https://s2.loli.net/2024/09/25/UBJqoYz835GvVxy.png',
				},
				passive: {
					canvasImage: 'https://s2.loli.net/2024/09/25/OHbINYGSQhFazcd.png',
				},
				ultimate: {
					canvasImage: 'https://s2.loli.net/2024/09/25/YH3Phg5XQumsbCM.png',
					rangeRadius: 0
				}
			}
		}
	},
	[TheScissors.Eika]: {
		faction: factions.TheScissors,
		id: TheScissors.Eika,
		attack: {
			canvasImage: 'https://s2.loli.net/2024/09/29/SrnDsxX5bAiBNcE.png',
			skills: {
				active: {
					canvasImage: 'https://s2.loli.net/2024/09/25/SPYXJZwHGObnrmV.png',
					rangeRadius: 0
				},
				passive: {
					canvasImage: 'https://s2.loli.net/2024/09/25/JYfa5PdE6r4Kcio.png',
				},
				ultimate: {
					canvasImage: 'https://s2.loli.net/2024/09/25/sFgyUNK7iWtcvfp.png',
					rangeRadius: 0
				}
			}
		}
	},
	[TheScissors.Fragrans]: {
		faction: factions.TheScissors,
		id: TheScissors.Fragrans,
		attack: {
			canvasImage: 'https://s2.loli.net/2024/09/29/AM58XCKyixJlTGO.png',
			skills: {
				active: {
					canvasImage: 'https://s2.loli.net/2024/09/25/L9j3uWBrl5hNyzx.png',
					rangeRadius: 0
				},
				passive: {
					canvasImage: 'https://s2.loli.net/2024/09/25/B3HDdTpLjAyYQ74.png',
				},
				ultimate: {
					canvasImage: 'https://s2.loli.net/2024/09/25/5Xk9PUOlwFsgE6B.png',
					rangeRadius: 0
				}
			}
		}
	},
	[Urbino.Audrey]: {
		faction: factions.Urbino,
		id: Urbino.Audrey,
		attack: {
			canvasImage: 'https://s2.loli.net/2024/09/29/qD7YufUpTmbzX1x.png',
			skills: {
				active: {
					canvasImage: 'https://s2.loli.net/2024/09/26/9PqOBd7owjJrRVp.png',
				},
				passive: {
					canvasImage: 'https://s2.loli.net/2024/09/26/pfyJk2RLYsXlBFg.png',
				},
				ultimate: {
					canvasImage: 'https://s2.loli.net/2024/09/26/E6tTWi1Suls5Y9R.png',
					rangeRadius: 0
				}
			}
		},
		defense: {
			canvasImage: 'https://s2.loli.net/2024/09/29/IVhuSTZvYmk4CNj.png',
			skills: {
				active: {
					canvasImage: 'https://s2.loli.net/2024/09/26/9PqOBd7owjJrRVp.png',
				},
				passive: {
					canvasImage: 'https://s2.loli.net/2024/09/26/pfyJk2RLYsXlBFg.png',
				},
				ultimate: {
					canvasImage: 'https://s2.loli.net/2024/09/26/E6tTWi1Suls5Y9R.png',
					rangeRadius: 0
				}
			}
		}
	},
	[Urbino.Maddelena]: {
		faction: factions.PUS,
		id: Urbino.Maddelena,
		attack: {
			canvasImage: "https://s2.loli.net/2024/09/29/OGgXKe6pPERflQL.png",
			skills: {
				passive: {
					canvasImage: "https://s2.loli.net/2024/09/25/tazvXEJNs5HuyeD.png"
				},
				active: {
					canvasImage: "https://s2.loli.net/2024/09/25/2r7wkizoLbpqMOZ.png",
					rangeRadius: undefined
				},
				ultimate: {
					canvasImage: "https://s2.loli.net/2024/09/25/tazvXEJNs5HuyeD.png",
					rangeRadius: undefined
				}
			}
		},
		defense: {
			canvasImage: "https://s2.loli.net/2024/09/29/dxqSrs3ivIJlF5h.png",
			skills: {
				passive: {
					canvasImage: "https://s2.loli.net/2024/09/25/tazvXEJNs5HuyeD.png"
				},
				active: {
					canvasImage: "https://s2.loli.net/2024/09/25/2r7wkizoLbpqMOZ.png",
					rangeRadius: undefined
				},
				ultimate: {
					canvasImage: "https://s2.loli.net/2024/09/25/tazvXEJNs5HuyeD.png",
					rangeRadius: undefined
				}
			}
		}
	},
	[Urbino.Fuchsia]: {
		faction: factions.Urbino,
		id: Urbino.Fuchsia,
		attack: {
			canvasImage: "https://s2.loli.net/2024/09/29/5Vbc3mYw8KJtTDC.png",
			skills: {
				active: {
					canvasImage: "https://s2.loli.net/2024/09/25/tkQ3jlHGeRTDPyn.png",
				},
				passive: {
					canvasImage: "https://s2.loli.net/2024/09/25/5ZCmFuQhoP3zYnV.png",
				},
				ultimate: {
					canvasImage: "https://s2.loli.net/2024/09/25/rOxFKuLX7e5QWhw.png",
				}
			}
		},
		defense: {
			canvasImage: "https://s2.loli.net/2024/09/29/TU81atfzDKiRV2o.png",
			skills: {
				active: {
					canvasImage: "https://s2.loli.net/2024/09/25/tkQ3jlHGeRTDPyn.png",
				},
				passive: {
					canvasImage: "https://s2.loli.net/2024/09/25/5ZCmFuQhoP3zYnV.png",
				},
				ultimate: {
					canvasImage: "https://s2.loli.net/2024/09/25/rOxFKuLX7e5QWhw.png",
				}
			}
		}
	},
	[Urbino.Celestia]: {
		faction: factions.Urbino,
		id: Urbino.Celestia,
		attack: {
			canvasImage: "https://s2.loli.net/2024/09/29/PI6eiLuZfcAQ2aR.png",
			skills: {
				active: {
					canvasImage: "https://s2.loli.net/2024/09/25/WmtSU2hFLBPaf85.png",
				},
				passive: {
					canvasImage: "https://s2.loli.net/2024/09/25/O5dXCxh3R1wVINQ.png",
				},
				ultimate: {
					canvasImage: "https://s2.loli.net/2024/09/25/bJalMyBfZ7iXVtx.png",
				}
			}
		},
		defense: {
			canvasImage: "https://s2.loli.net/2024/09/29/Zt93QEgreUnvaxX.png",
			skills: {
				active: {
					canvasImage: "https://s2.loli.net/2024/09/25/WmtSU2hFLBPaf85.png",
				},
				passive: {
					canvasImage: "https://s2.loli.net/2024/09/25/O5dXCxh3R1wVINQ.png",
				},
				ultimate: {
					canvasImage: "https://s2.loli.net/2024/09/25/bJalMyBfZ7iXVtx.png",
				}
			}
		}
	},
	[Urbino.BaiMo]: {
		faction: factions.Urbino,
		id: Urbino.BaiMo,
		attack: {
			canvasImage: "https://s2.loli.net/2024/09/29/jt4621ivFRfbEqD.png",
			skills: {
				passive: {
					canvasImage: "https://s2.loli.net/2024/09/25/xvVheX57uGJMI2k.png"
				},
				active: {
					canvasImage: "https://s2.loli.net/2024/09/25/eUzu75aSXVw2kQF.png",
					rangeRadius: undefined
				},
				ultimate: {
					canvasImage: "https://s2.loli.net/2024/09/25/VkyGJKzHYr4pnlm.png",
					rangeRadius: undefined
				}
			}
		},
		defense: {
			canvasImage: "https://s2.loli.net/2024/09/29/2KrCPXp5k1e6wfm.png",
			skills: {
				passive: {
					canvasImage: "https://s2.loli.net/2024/09/25/xvVheX57uGJMI2k.png"
				},
				active: {
					canvasImage: "https://s2.loli.net/2024/09/25/eUzu75aSXVw2kQF.png",
					rangeRadius: undefined
				},
				ultimate: {
					canvasImage: "https://s2.loli.net/2024/09/25/VkyGJKzHYr4pnlm.png",
					rangeRadius: undefined
				}
			}
		}
	},
	[Urbino.Galatea]: {
		faction: factions.Urbino,
		id: Urbino.Galatea,
		attack: {
			canvasImage: "https://s2.loli.net/2024/09/29/wpBbSjafRNFD43K.png",
			skills: {
				active: {
					canvasImage: "https://s2.loli.net/2024/09/25/UQVBxmGPD9q1tsr.png",
				},
				passive: {
					canvasImage: "https://s2.loli.net/2024/09/25/VmDbBPl9ezv5ZgU.png",
				},
				ultimate: {
					canvasImage: "https://s2.loli.net/2024/09/25/xGpjiLgcUtTJbno.png",
				}
			}
		},
		defense: {
			canvasImage: "https://s2.loli.net/2024/09/29/t1vlASe5DNRHVZq.png",
			skills: {
				active: {
					canvasImage: "https://s2.loli.net/2024/09/25/UQVBxmGPD9q1tsr.png",
				},
				passive: {
					canvasImage: "https://s2.loli.net/2024/09/25/VmDbBPl9ezv5ZgU.png",
				},
				ultimate: {
					canvasImage: "https://s2.loli.net/2024/09/25/xGpjiLgcUtTJbno.png",
				}
			}
		}
	}
}
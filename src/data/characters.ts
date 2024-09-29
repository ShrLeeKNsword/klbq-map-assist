export enum factions {
	PUS = 'PUS',
	TheScissors = 'TheScissors',
	Urbino = 'Urbino',
}

export enum PUS {
	Michele = 'Michele',
	Nobunaga = 'Nobunaga',
	Kokona = 'Kokona',
	Yvette = 'Yvette',
	Flavia = 'Flavia',
}

export enum TheScissors {
	Ming = 'Ming',
	Lawine = 'Lawine',
	Meredith = 'Meredith',
	Reiichi = 'Reiichi',
	Kanami = 'Kanami',
	Eika = 'Eika',
	Fragrans = 'Fragrans',
}

export enum Urbino {
	Celestia = 'Celestia',
	Audrey = 'Audrey',
	Maddelena = 'Maddelena',
	Fuchsia = 'Fuchsia',
	BaiMo = 'BaiMo',
	Galatea = 'Galatea',
}

export type Characters = {
	[P in factions]: {
		[key in P extends factions.PUS ? PUS : P extends factions.TheScissors ? TheScissors : Urbino]: string;
	};
}

type skillData = {
	"Active": string;
	"Passive": string;
	"Ultimate": string;
}

type CharacterData = StandardCharacterData | UrbinoCharacterData;

export function isUrbino(data: CharacterData): data is UrbinoCharacterData {
	return data.faction === factions.Urbino;
}

export function isStandardCharacterData(data: CharacterData): data is StandardCharacterData {
	return !isUrbino(data);
}

interface StandardCharacterData {
	character: PUS | TheScissors;
	faction: factions;
	imageLink: string;
	skills: skillData;
}

interface UrbinoCharacterData {
	character: Urbino;
	faction: factions.Urbino;
	imageLink: {
		defense: string;
		attack: string;
	};
	skills: skillData;
}

export const factionData: {
	[key in factions]: string;
} = {
	PUS: 'https://s2.loli.net/2024/09/25/1El6anYx4qhPbo2.png',
	TheScissors: 'https://s2.loli.net/2024/09/25/PY4HMU7fbQ32Dr1.png',
	Urbino: 'https://s2.loli.net/2024/09/25/hyPUcLZdMNaeOjI.png',
}

export const characterData: {
	[key in PUS | TheScissors | Urbino]: CharacterData;
} = {
	Michele: {
		character: PUS.Michele,
		faction: factions.PUS,
		imageLink: 'https://s2.loli.net/2024/09/29/29JH5SlaTdCwgFR.png',
		skills: {
			Active: 'https://s2.loli.net/2024/09/25/8iCzWDaNQPSxqvw.png',
			Passive: 'https://s2.loli.net/2024/09/25/ANhKZ6GDzOIjPtf.png',
			Ultimate: 'https://s2.loli.net/2024/09/25/UGeEvYfXiSgD4zr.png',
		},
	},
	Nobunaga: {
		character: PUS.Nobunaga,
		faction: factions.PUS,
		imageLink: 'https://s2.loli.net/2024/09/29/7UuX5VTR8AYWD2o.png',
		skills: {
			Active: 'https://s2.loli.net/2024/09/25/VJFzGhSyXmsiHpO.png',
			Passive: 'https://s2.loli.net/2024/09/25/AHsc9o8W25UlpNa.png',
			Ultimate: 'https://s2.loli.net/2024/09/25/Vr78sb9T32ADMuy.png',
		},
	},
	Kokona: {
		character: PUS.Kokona,
		faction: factions.PUS,
		imageLink: 'https://s2.loli.net/2024/09/29/jtlryiY8WHIGAMq.png',
		skills: {
			Active: 'https://s2.loli.net/2024/09/25/9zFsMYumpwJZrTg.png',
			Passive: 'https://s2.loli.net/2024/09/25/V8NijM5onGulX9m.png',
			Ultimate: 'https://s2.loli.net/2024/09/25/tilQp18zRheBMaJ.png',
		},
	},
	Yvette: {
		character: PUS.Yvette,
		faction: factions.PUS,
		imageLink: 'https://s2.loli.net/2024/09/29/eIVFmswk3tUlOcR.png',
		skills: {
			Active: 'https://s2.loli.net/2024/09/25/ESH6FNKQjbafMZn.png',
			Passive: 'https://s2.loli.net/2024/09/25/2hqoyUWsnbA83BP.png',
			Ultimate: 'https://s2.loli.net/2024/09/25/32VnSv59tPwTIhl.png',
		},
	},
	Flavia: {
		character: PUS.Flavia,
		faction: factions.PUS,
		imageLink: 'https://s2.loli.net/2024/09/29/jC98Rq3NhrUXYWK.png',
		skills: {
			Active: 'https://s2.loli.net/2024/09/25/58dg6OpPntlviqW.png',
			Passive: 'https://s2.loli.net/2024/09/25/u5tV9xaNyjUL6EM.png',
			Ultimate: 'https://s2.loli.net/2024/09/25/ezsVQS62bY5iBcG.png',
		},
	},
	Ming: {
		character: TheScissors.Ming,
		faction: factions.TheScissors,
		imageLink: 'https://s2.loli.net/2024/09/29/nuhFZjpVGgJSEyc.png',
		skills: {
			Active: 'https://s2.loli.net/2024/09/25/NQ2TdSqhseRZY7b.png',
			Passive: 'https://s2.loli.net/2024/09/25/bsAzZemy4uEcaHt.png',
			Ultimate: 'https://s2.loli.net/2024/09/25/B6KC72wphAdt4Ri.png',
		},
	},
	Lawine: {
		character: TheScissors.Lawine,
		faction: factions.TheScissors,
		imageLink: 'https://s2.loli.net/2024/09/29/DeK5afJoAhpyNcM.png',
		skills: {
			Active: 'https://s2.loli.net/2024/09/25/gOFlGIzPjxbpYKw.png',
			Passive: 'https://s2.loli.net/2024/09/25/8AxLszwVIg17WGq.png',
			Ultimate: 'https://s2.loli.net/2024/09/25/HuEnVYb8Mr5e24I.png',
		},
	},
	Meredith: {
		character: TheScissors.Meredith,
		faction: factions.TheScissors,
		imageLink: 'https://s2.loli.net/2024/09/29/C4QmVOhp1rB9Gd6.png',
		skills: {
			Active: 'https://s2.loli.net/2024/09/25/KWYZTSQmjOHJ2RX.png',
			Passive: 'https://s2.loli.net/2024/09/25/O8kRqCVEDoK6T3p.png',
			Ultimate: 'https://s2.loli.net/2024/09/25/V8KZrx9sY7QBlaP.png',
		},
	},
	Reiichi: {
		character: TheScissors.Reiichi,
		faction: factions.TheScissors,
		imageLink: 'https://s2.loli.net/2024/09/29/txSOyYkT4pXhGBn.png',
		skills: {
			Active: 'https://s2.loli.net/2024/09/25/C6qts5xeVpS1N4E.png',
			Passive: 'https://s2.loli.net/2024/09/25/iuSvZDYnFTzmBrl.png',
			Ultimate: 'https://s2.loli.net/2024/09/25/bESOlDh9oURvFC3.png',
		},
	},
	Kanami: {
		character: TheScissors.Kanami,
		faction: factions.TheScissors,
		imageLink: 'https://s2.loli.net/2024/09/29/7DHOLqvWMzmlch3.png',
		skills: {
			Active: 'https://s2.loli.net/2024/09/25/UBJqoYz835GvVxy.png',
			Passive: 'https://s2.loli.net/2024/09/25/OHbINYGSQhFazcd.png',
			Ultimate: 'https://s2.loli.net/2024/09/25/YH3Phg5XQumsbCM.png',
		},
	},
	Eika: {
		character: TheScissors.Eika,
		faction: factions.TheScissors,
		imageLink: 'https://s2.loli.net/2024/09/29/SrnDsxX5bAiBNcE.png',
		skills: {
			Active: 'https://s2.loli.net/2024/09/25/SPYXJZwHGObnrmV.png',
			Passive: 'https://s2.loli.net/2024/09/25/JYfa5PdE6r4Kcio.png',
			Ultimate: 'https://s2.loli.net/2024/09/25/sFgyUNK7iWtcvfp.png',
		},
	},
	Fragrans: {
		character: TheScissors.Fragrans,
		faction: factions.TheScissors,
		imageLink: 'https://s2.loli.net/2024/09/29/AM58XCKyixJlTGO.png',
		skills: {
			Active: 'https://s2.loli.net/2024/09/25/L9j3uWBrl5hNyzx.png',
			Passive: 'https://s2.loli.net/2024/09/25/B3HDdTpLjAyYQ74.png',
			Ultimate: 'https://s2.loli.net/2024/09/25/5Xk9PUOlwFsgE6B.png',
		},
	},
	Audrey: {
		character: Urbino.Audrey,
		faction: factions.Urbino,
		imageLink: {
			defense: "https://s2.loli.net/2024/09/29/IVhuSTZvYmk4CNj.png",
			attack: "https://s2.loli.net/2024/09/29/qD7YufUpTmbzX1x.png",
		},
		skills: {
			Active: 'https://s2.loli.net/2024/09/26/9PqOBd7owjJrRVp.png',
			Passive: 'https://s2.loli.net/2024/09/26/pfyJk2RLYsXlBFg.png',
			Ultimate: 'https://s2.loli.net/2024/09/26/E6tTWi1Suls5Y9R.png',
		},
	},
	Maddelena: {
		character: Urbino.Maddelena,
		faction: factions.Urbino,
		imageLink: {
			defense: "https://s2.loli.net/2024/09/29/dxqSrs3ivIJlF5h.png",
			attack: "https://s2.loli.net/2024/09/29/OGgXKe6pPERflQL.png",
		},
		skills: {
			Active: 'https://s2.loli.net/2024/09/25/2r7wkizoLbpqMOZ.png',
			Passive: 'https://s2.loli.net/2024/09/25/tazvXEJNs5HuyeD.png',
			Ultimate: 'https://s2.loli.net/2024/09/25/tazvXEJNs5HuyeD.png',
		},
	},
	Fuchsia: {
		character: Urbino.Fuchsia,
		faction: factions.Urbino,
		imageLink: {
			defense: "https://s2.loli.net/2024/09/29/TU81atfzDKiRV2o.png",
			attack: "https://s2.loli.net/2024/09/29/5Vbc3mYw8KJtTDC.png",
		},
		skills: {
			Active: 'https://s2.loli.net/2024/09/25/tkQ3jlHGeRTDPyn.png',
			Passive: 'https://s2.loli.net/2024/09/25/5ZCmFuQhoP3zYnV.png',
			Ultimate: 'https://s2.loli.net/2024/09/25/rOxFKuLX7e5QWhw.png',
		},
	},
	Celestia: {
		character: Urbino.Celestia,
		faction: factions.Urbino,
		imageLink: {
			defense: "https://s2.loli.net/2024/09/29/Zt93QEgreUnvaxX.png",
			attack: "https://s2.loli.net/2024/09/29/PI6eiLuZfcAQ2aR.png",
		},
		skills: {
			Active: 'https://s2.loli.net/2024/09/25/WmtSU2hFLBPaf85.png',
			Passive: 'https://s2.loli.net/2024/09/25/O5dXCxh3R1wVINQ.png',
			Ultimate: 'https://s2.loli.net/2024/09/25/bJalMyBfZ7iXVtx.png',
		},
	},
	BaiMo: {
		character: Urbino.BaiMo,
		faction: factions.Urbino,
		imageLink: {
			defense: "https://s2.loli.net/2024/09/29/2KrCPXp5k1e6wfm.png",
			attack: "https://s2.loli.net/2024/09/29/jt4621ivFRfbEqD.png",
		},
		skills: {
			Active: 'https://s2.loli.net/2024/09/25/eUzu75aSXVw2kQF.png',
			Passive: 'https://s2.loli.net/2024/09/25/xvVheX57uGJMI2k.png',
			Ultimate: 'https://s2.loli.net/2024/09/25/VkyGJKzHYr4pnlm.png',
		},
	},
	Galatea: {
		character: Urbino.Galatea,
		faction: factions.Urbino,
		imageLink: {
			defense: "https://s2.loli.net/2024/09/29/t1vlASe5DNRHVZq.png",
			attack: "https://s2.loli.net/2024/09/29/wpBbSjafRNFD43K.png",
		},
		skills: {
			Active: 'https://s2.loli.net/2024/09/25/UQVBxmGPD9q1tsr.png',
			Passive: 'https://s2.loli.net/2024/09/25/VmDbBPl9ezv5ZgU.png',
			Ultimate: 'https://s2.loli.net/2024/09/25/xGpjiLgcUtTJbno.png',
		},
	},
}
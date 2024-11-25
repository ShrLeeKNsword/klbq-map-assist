export enum factions {
	PUS = "PUS",
	TheScissors = "TheScissors",
	Urbino = "Urbino"
}

export enum PUS {
	Michele = "Michele",
	Nobunaga = "Nobunaga",
	Kokona = "Kokona",
	Yvette = "Yvette",
	Flavia = "Flavia",
	Yugiri = "Yugiri"
}

export enum TheScissors {
	Ming = "Ming",
	Lawine = "Lawine",
	Meredith = "Meredith",
	Reiichi = "Reiichi",
	Kanami = "Kanami",
	Eika = "Eika",
	Fragrans = "Fragrans"
}

export enum Urbino {
	Celestia = "Celestia",
	Audrey = "Audrey",
	Maddelena = "Maddelena",
	Fuchsia = "Fuchsia",
	BaiMo = "BaiMo",
	Galatea = "Galatea"
}

type factionData = {
	[key in factions]: {
		faction: factions;
		previewImage: string;
	}
}

export const factionsData: factionData = {
	PUS: {
		faction: factions.PUS,
		previewImage: "https://s2.loli.net/2024/09/25/1El6anYx4qhPbo2.png"
	},
	TheScissors: {
		faction: factions.TheScissors,
		previewImage: "https://s2.loli.net/2024/09/25/PY4HMU7fbQ32Dr1.png"
	},
	Urbino: {
		faction: factions.Urbino,
		previewImage: "https://s2.loli.net/2024/09/25/hyPUcLZdMNaeOjI.png"
	}
}
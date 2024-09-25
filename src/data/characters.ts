export enum factions {
	PUS = 'PUS',
	TheScissors = 'TheScissors',
	Urbino = 'Urbino',
}

enum PUS {
	Michele = 'Michele',
	Nobunaga = 'Nobunaga',
	Kokona = 'Kokona',
	Yvette = 'Yvette',
	Flavia = 'Flavia',
}

enum TheScissors {
	Ming = 'Ming',
	Lawine = 'Lawine',
	Meredith = 'Meredith',
	Reiichi = 'Reiichi',
	Kanami = 'Kanami',
	Eika = 'Eika',
	Fragrans = 'Fragrans',
}

enum Urbino {
	Celestia = 'Celestia',
	Audrey = 'Audrey',
	Maddelena = 'Maddelena',
	Fuchsia = 'Fuchsia',
	BaiMo = 'BaiMo',
	Galatea = 'Galatea',
}

enum skillTypes {
	Active = 'Active',
	Passive = 'Passive',
	Ultimate = 'Ultimate',
}

export type Characters = {
	[P in factions]: {
		[key in P extends factions.PUS ? PUS : P extends factions.TheScissors ? TheScissors : Urbino]: string;
	};
}

type skillData = {
	[key in skillTypes]: string
}

interface CharacterData {
	character: PUS | TheScissors | Urbino;
	faction: factions;
	imageLink: string;
	skills: skillData;
}

export const characterData: {
	[key in PUS | TheScissors | Urbino]: CharacterData;
} = {
	Michele: {
		character: PUS.Michele,
		faction: factions.PUS,
		imageLink: '',
		skills: {
			Active: '',
			Passive: '',
			Ultimate: '',
		},
	},
	Nobunaga: {
		character: PUS.Nobunaga,
		faction: factions.PUS,
		imageLink: '',
		skills: {
			Active: '',
			Passive: '',
			Ultimate: '',
		},
	},
	Kokona: {
		character: PUS.Kokona,
		faction: factions.PUS,
		imageLink: '',
		skills: {
			Active: '',
			Passive: '',
			Ultimate: '',
		},
	},
	Yvette: {
		character: PUS.Yvette,
		faction: factions.PUS,
		imageLink: '',
		skills: {
			Active: '',
			Passive: '',
			Ultimate: '',
		},
	},
	Flavia: {
		character: PUS.Flavia,
		faction: factions.PUS,
		imageLink: '',
		skills: {
			Active: '',
			Passive: '',
			Ultimate: '',
		},
	},
	Ming: {
		character: TheScissors.Ming,
		faction: factions.TheScissors,
		imageLink: '',
		skills: {
			Active: '',
			Passive: '',
			Ultimate: '',
		},
	},
	Lawine: {
		character: TheScissors.Lawine,
		faction: factions.TheScissors,
		imageLink: '',
		skills: {
			Active: '',
			Passive: '',
			Ultimate: '',
		},
	},
	Meredith: {
		character: TheScissors.Meredith,
		faction: factions.TheScissors,
		imageLink: '',
		skills: {
			Active: '',
			Passive: '',
			Ultimate: '',
		},
	},
	Reiichi: {
		character: TheScissors.Reiichi,
		faction: factions.TheScissors,
		imageLink: '',
		skills: {
			Active: '',
			Passive: '',
			Ultimate: '',
		},
	},
	Kanami: {
		character: TheScissors.Kanami,
		faction: factions.TheScissors,
		imageLink: '',
		skills: {
			Active: '',
			Passive: '',
			Ultimate: '',
		},
	},
	Eika: {
		character: TheScissors.Eika,
		faction: factions.TheScissors,
		imageLink: '',
		skills: {
			Active: '',
			Passive: '',
			Ultimate: '',
		},
	},
	Fragrans: {
		character: TheScissors.Fragrans,
		faction: factions.TheScissors,
		imageLink: '',
		skills: {
			Active: '',
			Passive: '',
			Ultimate: '',
		},
	},
	Celestia: {
		character: Urbino.Celestia,
		faction: factions.Urbino,
		imageLink: '',
		skills: {
			Active: '',
			Passive: '',
			Ultimate: '',
		},
	},
	Audrey: {
		character: Urbino.Audrey,
		faction: factions.Urbino,
		imageLink: '',
		skills: {
			Active: '',
			Passive: '',
			Ultimate: '',
		},
	},
	Maddelena: {
		character: Urbino.Maddelena,
		faction: factions.Urbino,
		imageLink: '',
		skills: {
			Active: '',
			Passive: '',
			Ultimate: '',
		},
	},
	Fuchsia: {
		character: Urbino.Fuchsia,
		faction: factions.Urbino,
		imageLink: '',
		skills: {
			Active: '',
			Passive: '',
			Ultimate: '',
		},
	},
	BaiMo: {
		character: Urbino.BaiMo,
		faction: factions.Urbino,
		imageLink: '',
		skills: {
			Active: '',
			Passive: '',
			Ultimate: '',
		},
	},
	Galatea: {
		character: Urbino.Galatea,
		faction: factions.Urbino,
		imageLink: '',
		skills: {
			Active: '',
			Passive: '',
			Ultimate: '',
		},
	},
}
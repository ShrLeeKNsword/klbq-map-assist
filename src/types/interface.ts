import { factions, PUS, TheScissors, Urbino } from "../data/characters/factions"
import { grenades } from "../data/grenades"
import { MapName } from "../data/maplist"

export enum Languages {
	en_US = 'English',
	zh_CN = '简体中文',
	ja_JP = '日本語'
}

interface CharacterTypes {
	Sentinel: string,
	Support: string,
	Controller: string,
	Duellist: string,
	Vanguard: string
}

interface CharacterInfo {
	Name: string,
	Type: string,
	skillActiveName: string,
	skillActiveDescription: string,
	skillPassiveName: string,
	skillPassiveDescription: string,
	skillUltimateName: string,
	skillUltimateDescription: string
	subName: string
	subDescription: string
}

interface MarkBox {
	mark: string
	straightline: string
	arrowline: string
	color: string
	undo: string
	clear: string
	clearwarning: {
		title: string
		content: string
		ok: string
		cancel: string
		success: string
		failure: string
	}
}

interface BugPointSetting {
	spotmark: string
	spotmarks: {
		disable: string
		available: string
		all: string
	}
}

interface MobaiSuperJumpSetting {
	spotmark: string
	spotmarks: {
		disable: string
		available: string
		all: string
	}
}

interface Skilllineupsetting {
	spotmark: string
	spotmarks: Record<string, string>
}

interface LineupSetting {
	spotmark: string
	spotmarks: {
		disable: string
		available: string
		all: string
	}
}

interface MapSetting {
	choosemap: string
	maps: {
		[key in MapName]: string
	}
	TeamHighlight: string
	TeamHighlightOptions: {
		prepare: string
		blank: string
	}
	Landmarks: string
}

interface Sidebar {
	attact: string
	defense: string
	mapsetting: string
	character: string
	skill: string
	grenade: string
	lineup: string
	skilllineup: string
	mobaisuperjump: string
	bugpoint: string
	bugpointwarning: JSX.Element
	learnmore: string
	supportus: string
	supportusContent: JSX.Element
}

interface AnnouncementForm {
	title: string
	date: string
	summary: string
	data: object
}

interface AnnouncementData {
	notshowntoday: string
	pin: AnnouncementForm
	history: Array<AnnouncementForm> | null | undefined
}

export interface FriendLinkForm {
	name: string
	icon: JSX.Element
	url: string
}

interface ClassifyForm {
	official: string
	wiki: string
	others: string
}

interface FriendLinkData {
	classify: ClassifyForm
	official: Array<FriendLinkForm>
	wiki: Array<FriendLinkForm>
	others: Array<FriendLinkForm>
	contact: {
		content: JSX.Element
	}
}

export interface SiteListForm {
	icon: JSX.Element | null | undefined
	content: string
	url: string
}

interface SiteListData {
	content: JSX.Element
	Global: Array<SiteListForm>
	CN: Array<SiteListForm>
}

interface SupportUsData {
	content: JSX.Element
	global: string
	CN: string
	list: string
}

export interface I18nData {
	language: Languages
	title: string
	sidebar: Sidebar
	mapsetting: MapSetting
	lineupsetting: LineupSetting
	skilllineupsetting: Skilllineupsetting
	mobaisuperjumpsetting: MobaiSuperJumpSetting
	bugpointsetting: BugPointSetting
	announcement: string
	friendlink: string
	sitelist: string
	announcementdata: AnnouncementData
	friendlinkdata: FriendLinkData
	sitelistdata: SiteListData
	supportusdata: SupportUsData
	factions: {
		[key in factions]: string
	}
	characters: {
		PUS: {
			[key in PUS]: string
		}
		TheScissors: {
			[key in TheScissors]: string
		}
		Urbino: {
			[key in Urbino]: string
		}
	}
	characterInfo: {
		[key in PUS | TheScissors | Urbino]: CharacterInfo
	}
	characterTypes: CharacterTypes
	grenades: {
		[key in grenades]: string
	}
	markbox: MarkBox
}
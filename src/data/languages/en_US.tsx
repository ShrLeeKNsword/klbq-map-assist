import { FaGithub } from "react-icons/fa";
import { Languages } from "../../types/interface";

export default {
	language: Languages.en_US,
	title: 'Strinova Map Assistant',
	announcement: "Announcement",
	friendlink: "Friend Link",
	sitelist: "Switch Server",
	announcementdata: {
		notshowntoday: "Got it",
		pin: {
			title: "Milestone Release V1.0",
			date: "2024.11.12",
			summary: "Milestone release complete.You'll find our social media at the footer of the page.",
			data: {}
		},
		history: []
	},
	friendlinkdata: {
		classify: {
			official: "Official",
			wiki: "Wiki",
			others: "Others"
		},
		official:
			[{
				name: "",
				icon: <img style={{ height: "35px", filter: "brightness(1000%) drop-shadow(0 0 2px rgba(var(--semi-grey-7))" }} src='https://game.gtimg.cn/images/kq/m/web20230505/sec_ordlogo.png' />,
				url: "https://klbq.qq.com/",
			}, {
				name: "",
				icon: <img style={{ height: "22px", filter: "drop-shadow(0 0 2px rgba(var(--semi-grey-9))" }} src='https://klbq-web-cms.strinova.com/prod/strinova_static/home_v12/img/icon/logo-white.png' />,
				url: "https://www.strinova.com/",
			}],
		wiki:
			[{
				name: "",
				icon: <img style={{ height: "32px", filter: "drop-shadow(0 0 2px rgba(var(--semi-grey-9))" }} src='https://s2.loli.net/2024/10/01/NQTMvDZ5ah4omYR.png' />,
				url: "https://wiki.biligame.com/klbq/",
			}, {
				name: "Strinovajp Wiki",
				icon: <></>,
				url: "https://www.strinovajp-wiki.jp/index.html",
			}, {
				name: "",
				icon: <img style={{ height: "22px", filter: "drop-shadow(0 0 2px rgba(var(--semi-grey-1))" }} src='https://s2.loli.net/2024/10/01/R4UxmBPGd2f8kQ7.webp' />,
				url: "https://strinova.wiki.gg/wiki/Strinova_Wiki",
			}, {
				name: "Miraheze Meta",
				icon: <></>,
				url: "https://strinova.org/wiki/",
			}, {
				name: "日本語wiki",
				icon: <img style={{ height: "28px", filter: "drop-shadow(0 0 2px rgba(var(--semi-grey-1))", marginRight: "8px" }} src='https://w.atwiki.jp/common/_img/atwiki_logo_small.svg?t=741a51e81c8c8d5fe9627b874ecad193' />,
				url: "https://w.atwiki.jp/calabiyau_jp/",
			},],
		others:
			[{
				name: "自建房助手",
				icon: <img style={{ height: "35px", filter: "drop-shadow(0 0 2px rgba(var(--semi-grey-1))", marginRight: "8px" }} src='https://s2.loli.net/2024/10/01/pmYnw16rL2PQWBy.png' />,
				url: "https://klbq.fsltech.cn/",
			}],
		contact: {
			content: <div style={{ width: "100%", textAlign: "center" }}>
				Add friend link contact <a href='mailto:fsltech@email.cn'>fsltech@email.cn</a>
			</div>
		}
	},
	sitelistdata: {
		content: <>
			<div>We set several sites for better connection.</div>
		</>,
		Global: [
			{
				icon: <><FaGithub style={{ color: "rgba(var(--semi-grey-9), 1)", fontSize: "20px", marginRight: "10px" }} /></>,
				content: "Github Page",
				url: "https://strinova.fsltech.cn/"
			}
		],
		CN: [
			{
				icon: <></>,
				content: "腾讯云CDN -  上海 - 1",
				url: "https://sh-1.strinova.fsltech.cn/"
			},
			{
				icon: <></>,
				content: "腾讯云CDN - 香港 - 1",
				url: "https://hk-1.strinova.fsltech.cn/"
			}
		],
	},
	supportusdata: {
		content: <>
			<div><strong>STRINOVA MAP ASSISTANT</strong>is an open-source React project.</div>
			<div>So you can use it freely under license GPL-3.0.</div>
			<div>Some image source may need further permission.</div>
			<div>Please ask the official.</div>
			<br />
			<div>Even thougth, you can donate to the developers to make this project better.</div>
			<div>Whatever support you gave ,your would be listed on <strong>STRINOVA MAP ASSISTANT</strong>'s namelist.</div>
			<div>Contact <a href='mailto:fsltech@email.cn'>fsltech@email.cn</a> if you have any more requests.</div>
		</>,
		global: "International",
		CN: "CN",
		list: "Support List"
	},
	sidebar: {
		attact: 'Attack',
		defense: 'Defense',
		mapsetting: 'Map Setting',
		character: 'Character',
		skill: 'Skills',
		grenade: 'Grenades',
		lineup: 'Grenade Lineups',
		skilllineup: 'Skill Lineups',
		mobaisuperjump: 'Baimo Super Jumps',
		bugpoint: 'Bugs',
		bugpointwarning: (
			<div style={{ fontSize: '12px', textAlign: 'left' }}>
				<div>Bugs listed here are for your information only!</div>
				<div>We are not responsible for any bans for abusing any of these bugs.</div>
			</div>
		),
		learnmore: 'Learn More',
		supportus: 'SUPPORT US',
		supportusContent: <></>
	},
	mapsetting: {
		choosemap: 'Map',
		maps: {
			WindyTown: 'Windy Town',
			SpaceLab: 'Space Lab',
			Khesmet: 'Khesmet',
			CauchyDistrict: 'Cauchy District',
			EulerPort: 'Port Euler',
			Area88: 'Area 88',
			Base404: 'Base 404'
		},
		TeamHighlight: 'Team Highlight',
		TeamHighlightOptions: {
			prepare: 'Show',
			blank: 'Hide'
		},
		Landmarks: 'Landmarks'
	},
	lineupsetting: {
		spotmark: 'Spot Mark',
		spotmarks: {
			disable: 'Disable',
			available: 'Available Only',
			all: 'All'
		}
	},
	skilllineupsetting: {
		spotmark: 'Spot Mark',
		spotmarks: {
			disable: 'Disable',
			available: 'Available Only',
			all: 'All'
		}
	},
	mobaisuperjumpsetting: {
		spotmark: 'Spot Mark',
		spotmarks: {
			disable: 'Disable',
			available: 'Available Only',
			all: 'All'
		}
	},
	bugpointsetting: {
		spotmark: 'Spot Mark',
		spotmarks: {
			disable: 'Disable',
			available: 'Available Only',
			all: 'All'
		}
	},
	factions: {
		PUS: 'PUS',
		TheScissors: 'The Scissors',
		Urbino: 'Urbino'
	},
	characters: {
		PUS: {
			Michele: 'Michele Li',
			Nobunaga: 'Nobunaga',
			Kokona: 'Kokona',
			Yvette: 'Yvette',
			Flavia: 'Flavia',
			Yugiri: "Yugiri"
		},
		TheScissors: {
			Ming: 'Ming',
			Lawine: 'Lawine',
			Meredith: 'Meredith',
			Reiichi: 'Reiichi',
			Kanami: 'Kanami',
			Eika: 'Eika',
			Fragrans: 'Fragrans'
		},
		Urbino: {
			Celestia: 'Celestia',
			Audrey: 'Audrey',
			Maddelena: 'Maddelena',
			Fuchsia: 'Fuchsia',
			BaiMo: 'Bai Mo',
			Galatea: 'Galatea'
		}
	},
	characterInfo: {
		Michele: {
			Name: "Michele",
			Type: "Sentinel",
			skillActiveName: `Meow Meow! Turret`,
			skillActiveDescription: `Michele throws a small turret that attached to any surface (except player). The turret will automaticaly attack enemy (3 dmg/s) and slow them down.`,
			skillPassiveName: `Cat Sense`,
			skillPassiveDescription: `Enemy that damaged Michele will be highlighted for Michele and her teammates.`,
			skillUltimateName: `Ultra! Meow Meow!`,
			skillUltimateDescription: `Michele deploy a big Meow Meow Drone with powerful firepower. It will automaticaly attack enemy with bigger damage & range.`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Nobunaga: {
			Name: "Nobunaga",
			Type: "Sentinel",
			skillActiveName: `Observer`,
			skillActiveDescription: `Nobunaga place a device on the ground which will gains Rate Of Fire, faster reload & restore Armor when he's within it range. Max 2 charges. If 2 Observer are placed within each other range, the buff effects are increased. It can be destroyed.`,
			skillPassiveName: `Blinding Pulse`,
			skillPassiveDescription: `When ADS, Nobunaga will build energy with his rifle. When fully charged, if enemy got hit by this charged shot, their crosshairs in ADS will be glitched out. Nobunaga's base Armor +10`,
			skillUltimateName: `E.M.P`,
			skillUltimateDescription: `Place a pulse device on the ground which emit large range pulse wave. Enemy within range will be highlighted & silenced continuously. It can be detroyed by any weapons.`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Kokona: {
			Name: "Kokona",
			Type: "Support",
			skillActiveName: `Healing Drone`,
			skillActiveDescription: `Kokona sends a healing drone to heal and recover armor a selected ally or herself. Allies that stand near the drone will also healed.`,
			skillPassiveName: `Emergency Rescue`,
			skillPassiveDescription: `Kokona can summon a drone to auto-revive downed allies. Can revive multiple allies at the same time. Revived ally has 50 HP. Also Kokona restores 2 HP per second.`,
			skillUltimateName: `Rebuild`,
			skillUltimateDescription: `Kokona open up K.I.A terminal and choose an ally to resurrect using drones. The resurected ally will has full HP & Armor. It can be canceled either kill Kokona before she ults or destroy the drones when they resurrecting.`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Yvette: {
			Name: "Yvette",
			Type: "Controller",
			skillActiveName: `Fei`,
			skillActiveDescription: `Yvette summon her teddy bear Fei to tranform into a real bear. Press the skill again to control Fei, Fei can dash forward to knock enemies up & leave an icy ground behind (2 charges). Which makes enemy slides & take more damage. Hold right mouse to recall Fei. Yvette is vulnerable while controlling Fei.`,
			skillPassiveName: `Hidden Snow`,
			skillPassiveDescription: `Yvette will go stealth after standing still for few secs. She can only be detected if going near her stealth range.`,
			skillUltimateName: `Cold Breeze`,
			skillUltimateDescription: `Yvette summon raging Fei that that slam the ground 3 times & create an icy ground which get bigger each slam. Enemy inside will slides, take more damage, slower Reload Speed, slower ADS Speed & slower Rate Of Fire.`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Flavia: {
			Name: "Flavia",
			Type: "Duellist",
			skillActiveName: `Illusory Phantom`,
			skillActiveDescription: `Flavia summons the Phantom Butterfly to follows her for 5 seconds, during which time she loses 1HP from an attack, she becomes invincible for 2 seconds and spawns a Phantom Orb on the spot. The Phantom Orb will near-sight surrounding enemies and can be destroyed. Use the skill again to cancel invincible state instantly.`,
			skillPassiveName: `Rebirth Circle`,
			skillPassiveDescription: `Whenever Flavia takes 15 Damage, reduces Illusory Phantom's cooldown by 1 second. For every 160 damage taken, she gains 1 temporary Ultimate Point, which remains valid for the current round. Flavia's base armor +5'`,
			skillUltimateName: `Dream Butterfly Transformation`,
			skillUltimateDescription: `Flavia creates an illusionary field centered around herself. If she knocked out while in the field, Flavia'll transforms into a butterfly & revives herself after 3 seconds (repeat till ult ends). Enemies outside the field cannot see Flavia but they still can attack Flavia & will see Flavia if they attacked by her. If Flavia is killed by enemies outside the field, it will not trigger auto-revive & she'll die instantly.`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Yugiri: {
			Name: "Yugiri",
			Type: "Controller",
			skillActiveName: `Poison Mist`,
			skillActiveDescription: `Throws a snail forward, creating a poisonous mist in a spherical area upon activation. The mist continuously lowers the maximum armour of enemies, which will then recover shortly after leaving the mist. Activating the snail will cost energy, and activating multiple snails will consume more energy then if one is activated. `,
			skillPassiveName: `Toxic Fog Eruption`,
			skillPassiveDescription: `After dealing a set amount of HP, she will cause an explosion within the enemy, affecting it with corrosion, temporarily corroding the nearby enemy’s shield. `,
			skillUltimateName: `Poison Erosion`,
			skillUltimateDescription: `Summons a large wave of mist that slowly advances forwards, reducing the max shields of any enemy struck and also applying the Corrosion effect. `,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Ming: {
			Name: "Ming",
			Type: "Duellist",
			skillActiveName: `Plasma Ball`,
			skillActiveDescription: `Fires a ball of electricity that will automatically detonate when it reaches the maximum distance or hits an enemy superstring. It can also be manually detonated by pressing the skill key again. The ball of electricity will destroy the armor of all enemy units (including summons) within the range and slow them down. Ming will increase his movement speed when entering the electric field.`,
			skillPassiveName: `Armor Absorbing`,
			skillPassiveDescription: `When Ming uses firearms and active skills to damage the enemy's armor or shield, his armor will be restored based on the amount of damage. During the duration of the ultimate, the passive will restore temporary armor and increase the amount restored.`,
			skillUltimateName: `Plasma Armor`,
			skillUltimateDescription: `Ming gains temporary armor and applies a stackable slow to his shots. When Ming uses a gun or active skill to damage an enemy's armor, the skill's duration is extended and temporary armor is restored.`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Lawine: {
			Name: "Lawine",
			Type: "Initiator",
			skillActiveName: `Pulse Knife`,
			skillActiveDescription: `Throws the Pulse Knife to create a large magnetic field, slowly highlight enemies within range to Lawine and her teammates. The pulse knife will disappear immediately after a failed scan. The pulse knife can scan up to 3 times and can be destroyed by any weapons & nades.`,
			skillPassiveName: `Exposure Trace`,
			skillPassiveDescription: `Enemy hit by Lawine's Primary Weapon will be highlighted. Only Lawine can see.`,
			skillUltimateName: `Escape The Shadow`,
			skillUltimateDescription: `Lawine creates a rectangular magnetic field in front. When entering the magnetic field, Lawine becomes invisible. Lawine cannot use any weapons while invisible.`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Meredith: {
			Name: "Meredith",
			Type: "Controller",
			skillActiveName: `Sand Heatwave`,
			skillActiveDescription: `Meredith fires an energy orb which will creates a sand field when hit enemy or obstacles. All enemy inside will be slowed, reduces reload speed and their HP will reduces overtime.`,
			skillPassiveName: `Time Warp`,
			skillPassiveDescription: `Reduce Meredith's falling speed when aiming, using skills and nades.`,
			skillUltimateName: `Quicksand Burial`,
			skillUltimateDescription: `Meredith throws a pyramid artifact and create a massive sandstorm. All enemy inside will be near-sighted, HP reduced overtime, slowed down while being pulled to the center. Allies also got near-sighted.`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Reiichi: {
			Name: "Reiichi",
			Type: "Controller",
			skillActiveName: `Dawn Curtain`,
			skillActiveDescription: `Reiichi uses his umbrella to create a curtain of Paper energy light that can be released vertically or horizontally, which obscures the field of view.`,
			skillPassiveName: `Dawn Insight`,
			skillPassiveDescription: `When in ADS, Reiichi will build up energy with his sniper. When fully charged, it will scan a small are in front of him & hightlight all enemy for himself & teammates.`,
			skillUltimateName: `Sacred Screen of Refuge`,
			skillUltimateDescription: `Immediately refresh Dawn Curtain, and enchance Dawn Curtain which now can block bullets from enemy. The blocking effect also applies to pre-use Dawn Curtain.`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Kanami: {
			Name: "Kanami",
			Type: "Initiator",
			skillActiveName: `Symphony`,
			skillActiveDescription: `Kanami infuses her sniper with her melody, then shoot to any surface which will resonate and hightlight all enemy in it radius for Kanami & teammates.`,
			skillPassiveName: `Sonic Boom`,
			skillPassiveDescription: `When a bullet hit a target it will highlight enemy and ultilities through wall briefly.`,
			skillUltimateName: `Showtime`,
			skillUltimateDescription: `Kanami summon a hologram of herself, the music start playing which glitch out enemy scope in ADS while slowing & pulling them to the center.`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Eika: {
			Name: "Eika",
			Type: "Duellist",
			skillActiveName: `Hellfire Cage`,
			skillActiveDescription: `Creates a fire cage in front of Aika that burns enemies who pass through its boundaries, and the cage disippates prematurely if there are no more enemies inside. When Aika enters the cage, her shotgun will deals additional burn damage against enemies within the cage. Casting the skill with 100 heat, the flame will turn to blue & enemy takes more damage.`,
			skillPassiveName: `Reserve Flare`,
			skillPassiveDescription: `When Aika deals damage to enemies, She gathers a small amount of heat for her heat gauge, up to a max of 100. At max heat, Aika deals bonus damage against paper-mode enemies and empowers her abilities.`,
			skillUltimateName: `Firestorm`,
			skillUltimateDescription: `Throws out up to 3 fireball that can explode into a tornado, lifting (like wind bomb effect) and pulling in enemies, dealing continuous fire damage to them. Casting the skill with 100 heat, increases the tornado's size, damage, as well as highlighting (Not through wall) any enemies caught within.`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Fragrans: {
			Name: "Fragrans",
			Type: "Support",
			skillActiveName: `Vibrant And Fragrant`,
			skillActiveDescription: `Fragrans can release two limited quantities of perfumes. After being released, it will create a fragrance area centered on itself, and the area will increase the fire rate or movement speed of the ally, and the fragrance effect will gradually decrease over time, and eventually disappear.`,
			skillPassiveName: `Revive The Aroma`,
			skillPassiveDescription: `Fragrans emits a faint scent of recovery, and nearby teammates and herself slowly regenerate health.`,
			skillUltimateName: `Intense Fragrance`,
			skillUltimateDescription: `Fragrans will create an area of intense fragrance centered on herself, and allies in the area will gain a high rate of fire, increased movement speed, and health regeneration, the effect will not be decayed, and Fragrans will not be able to use weapons during the release, but will receive a significant damage reduction.`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Celestia: {
			Name: "Celestia",
			Type: "Support",
			skillActiveName: `Guardian Of The Star`,
			skillActiveDescription: `Celestia targets an allied character with a guardian star, replenishing temporary armor. The star then returns to her, granting her the half of the original effect.`,
			skillPassiveName: `Cosmos`,
			skillPassiveDescription: `When allies is near Huxing, both allies & herself will regain Armor overtime (+2/s). `,
			skillUltimateName: `Stargate`,
			skillUltimateDescription: `Huxing open the Stargate and choose an ally across the map, immediately gains her & the chosen ally a huge Extra Armor, then she'll start build up enegry. When fully charged, Huxing will teleports to the chosen ally. It can be canceled if Huxing takes certain amount of damage or uses the skill again. When canceled Huxing will teleport back to where she used the skill, the Extra Armor Buff will not lost.`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Audrey: {
			Name: "Audrey",
			Type: "Sentinel",
			skillActiveName: `Heavy Fire`,
			skillActiveDescription: `Audrey enters stationary state & cannot move. Greatly increase Rate Of Fire & Max Shield Limit of her MG. Her MG is no longer need to reload but will overheat overtime. Audrey MG no longer has recoil.`,
			skillPassiveName: `Royal Shield`,
			skillPassiveDescription: `Audrey will gains 30 Extra Armor when ADS. This Extra Armor will be restored shortly after the shield is broken. Audrey's base armor +5`,
			skillUltimateName: `Bombardment`,
			skillUltimateDescription: `Audrey enters stationary state & summon her grenade launcher that shoot out 6 incendiary round. Each round will bounce off the wall and explodes when hit the ground, creating 3 small area of fire causing damage overtime.`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Maddelena: {
			Name: "Maddelena",
			Type: "Controller",
			skillActiveName: `Color Binding`,
			skillActiveDescription: `Maddelena fires a puddle of paint, enemies that pass through this puddle will be slowed and cannot use Paper Mode.`,
			skillPassiveName: `Color Footprint`,
			skillPassiveDescription: `Enemy hit by Maddelena' Primary Weapon or her skills will be slowed and leave footprints behind.`,
			skillUltimateName: `Color Bubble`,
			skillUltimateDescription: `Maddelena fires a giant bubble which will becomes bigger overtime, enemies within the bubble won't be able to use Paper Mode and leave their footprints. When the bubble explodes, it will apply slow and vulnerability effect to enemies within the blast area.`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Fuchsia: {
			Name: "Fuchsia",
			Type: "Duellist",
			skillActiveName: `Predator's Sense`,
			skillActiveDescription: `Fuchsia senses surrounding enemies which highlights full HP enemies briefly & continiously for injured enemies. Sensing enemy will also increase Fuchsia's movement speed for short time.`,
			skillPassiveName: `Fight To Feed`,
			skillPassiveDescription: `When Fuchsia get a kill or assist, dead enemy will drop an Energy Crystal. She can go near and absorb it which will quickly restores herself 50HP.`,
			skillUltimateName: `Bloodbath`,
			skillUltimateDescription: `Fuchsia gains massive Rate Of Fire, faster Reload Speed, ADS Speed & Movement Speed. Predator's Sense will be enchanced & hightlight all enemies in her view. Absorbing Energy Crystal will extend the duration.`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		BaiMo: {
			Name: "BaiMo",
			Type: "Duellist",
			skillActiveName: `Skydance`,
			skillActiveDescription: `Baimo quickly dash forward & immediately reload 2 shell to his shotgun. Getting a kill will refresh the skill.`,
			skillPassiveName: `Hip-Hop Boom Color`,
			skillPassiveDescription: `When BaiMo deals atleast 50 Damage to enemy, they Paper Mode is disabled for few secs.`,
			skillUltimateName: `Let's Rock!`,
			skillUltimateDescription: `BaiMo place a respawn beacon at selected area and the music starts playing. When killed or press the skill again, Baimo will teleport back to the beacon fully restore his HP.`,
			subName: `subName`,
			subDescription: `subDescription`,
		},
		Galatea: {
			Name: "Galatea",
			Type: "Initiator",
			skillActiveName: `Flying Cards Flash`,
			skillActiveDescription: `Galatea releases a card that flies out in an arc, and when the card touches the ground or wall, a clone will be generated, and Galatea can teleport to the location of the clone by pressing the interaction button, and the clone can be destroyed. Each clone can detect visible enemies within a 10-meter radius and expose them to Galatea and all of her teammates, as well as enemies attacking the clone for a short period of time`,
			skillPassiveName: `Fraudulent Shadow`,
			skillPassiveDescription: `When Galatea detaches from a wall, it leaves a clone at the wall sticker, and each time she gets off the wall, it will respawn again, and when the clone is damaged, it will passively enter the cooldown.`,
			skillUltimateName: `Shadow Card Trick`,
			skillUltimateDescription: `Galatea throws a bunch of cards in front of her, each of which spawns a clone and teleports Galatea.`,
			subName: `subName`,
			subDescription: `subDescription`,
		}
	},
	characterTypes: {
		Sentinel: 'Sentinel',
		Support: 'Support',
		Controller: 'Controller',
		Duellist: 'Duellist',
		Initiator: 'Initiator'
	},
	grenades: {
		Flashbang: 'Flashbang',
		FragGrenade: 'Frag Grenade',
		HealingGrenade: 'Healing Grenade',
		Interceptor: 'Interceptor',
		SlowGrenade: 'Slow Grenade',
		SmokeBomb: 'Smoke Bomb',
		Alarm: 'Alarm',
		WindstormGrenade: 'Windstorm Grenade',
		SnowBall: 'Snow Ball'
	},
	markbox: {
		mark: 'Mark',
		straightline: 'Straight Line',
		arrowline: 'Arrow Line',
		color: 'Color',
		undo: 'Undo',
		clear: 'Clear',
		clearwarning: {
			title: 'Confirm to clear all marks?',
			content: 'This action cannot be undone',
			ok: 'Confirm',
			cancel: 'Cancel',
			success: 'Cleared all markings',
			failure: 'Failed to clear markings'
		}
	}
}
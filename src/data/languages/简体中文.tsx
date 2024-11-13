import { FaGithub } from "react-icons/fa";
import { Languages } from "../i18n";

export default {
	language: Languages['简体中文'],
	title: '卡拉彼丘地图助手',
	announcement: "公告",
	friendlink: "友情链接",
	sitelist: "切换网站节点",
	announcementdata: {
		notshowntoday: "今日不再显示",
		pin: {
			title: "正式版发布",
			date: "2024.11.12",
			summary: "网站正式版已上线，欢迎使用！有任何问题可以通过网页最下方联系我们。",
			data: {}
		},
		history: []
	},
	friendlinkdata: {
		classify: {
			official: "官方",
			wiki: "Wiki",
			others: "其他"
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
				添加友链请联系 <a href='mailto:fsltech@email.cn'>fsltech@email.cn</a>
			</div>
		}
	},
	sitelistdata: {
		content: <>
			<div>为了提供更快的访问速度以及减轻服务器压力，</div>
			<div>我们开设了不同节点</div>
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
			<div><strong>卡拉彼丘地图助手</strong>是一款开源应用，</div>
			<div>因此你可以免费在 GPL-3.0 开源协议的范畴下使用本应用。</div>
			<div>美术资料与部分UI版权归原作者与官方所有，</div>
			<div>请咨询对应作者与官方授权！</div>
			<br />
			<div>但即便如此，你的赞助也可以给予开发者前进的动力，让这个项目变得更好。</div>
			<div>无论你使用何种形式赞助，你都可以在<strong>卡拉彼丘地图助手</strong>的 GitHub 项目主页和网站展示您的信息（个人主页、公司主页、GitHub 资料页等）。</div>
			<div>如需展示，请在留言中留下需要展示的内容或将内容连同赞助收据发送至 <a href='mailto:fsltech@email.cn'>fsltech@email.cn</a></div>
		</>,
		global: "国际",
		CN: "中国境内",
		list: "赞助列表"
	},
	sidebar: {
		attact: '进攻',
		defense: '防守',
		mapsetting: '地图设置',
		character: '超弦体',
		skill: '技能',
		grenade: '战术道具',
		lineup: '战术道具点位',
		skilllineup: '技能点位',
		mobaisuperjump: '白墨超级跳点位',
		bugpoint: 'Bug点位',
		bugpointwarning: (
			<div style={{ fontSize: '12px', textAlign: 'left' }}>
				<div>这里列出的Bug点位仅用于警示作用，请勿在游戏中利于Bug！</div>
				<div>在游戏中利用Bug导致被封禁等不良后果本站概不负责！</div>
			</div>
		),
		learnmore: '了解更多',
		supportus: '支持我们',
		supportusContent: <></>
	},
	mapsetting: {
		choosemap: '选择地图',
		maps: {
			WindyTown: '风曳镇',
			SpaceLab: '空间实验室',
			Khesmet: '科斯迷特',
			EulerPort: '欧拉港口',
			CauchyDistrict: '柯西街区',
			Area88: '88区',
			Base404: '404基地'
		},
		TeamHighlight: '区分阵营',
		TeamHighlightOptions: {
			prepare: '准备阶段',
			blank: '空白'
		},
		Landmarks: '点位标记'
	},
	lineupsetting: {
		spotmark: '点位标记',
		spotmarks: {
			disable: '禁用',
			available: '仅有效',
			all: '全部'
		}
	},
	skilllineupsetting: {
		spotmark: '点位标记',
		spotmarks: {
			disable: '禁用',
			available: '仅有效',
			all: '全部'
		}
	},
	mobaisuperjumpsetting: {
		spotmark: '点位标记',
		spotmarks: {
			disable: '禁用',
			available: '仅有效',
			all: '全部'
		}
	},
	bugpointsetting: {
		spotmark: '点位标记',
		spotmarks: {
			disable: '禁用',
			available: '仅有效',
			all: '全部'
		}
	},
	factions: {
		PUS: '欧泊',
		TheScissors: '剪刀手',
		Urbino: '乌尔比诺'
	},
	characters: {
		PUS: {
			Michele: '米雪儿·李',
			Nobunaga: '信',
			Kokona: '心夏',
			Yvette: '伊薇特',
			Flavia: '芙拉薇娅',
			Yugiri: "忧雾"
		},
		TheScissors: {
			Ming: '明',
			Lawine: '拉薇',
			Meredith: '梅瑞狄斯',
			Reiichi: '令',
			Kanami: '香奈美',
			Eika: '艾卡',
			Fragrans: '珐格兰丝'
		},
		Urbino: {
			Celestia: '星绘',
			Audrey: '奥黛丽',
			Maddelena: '白墨',
			Fuchsia: '玛德蕾娜',
			BaiMo: '绯莎',
			Galatea: '加拉蒂亚'
		}
	},
	characterInfo: {
		Michele: {
			Name: "米雪儿·李",
			Type: "守护",
			skillActiveName: `喵喵卫士`,
			skillActiveDescription: `米雪儿投掷可附着在建筑表面的喵喵卫士，喵喵卫士将自动攻击一定范围内的敌方角色，并使其减速。`,
			skillPassiveName: `猫踪喵迹`,
			skillPassiveDescription: `米雪儿被武器直接命中时，可以使造成伤害的敌人进入透视状态。`,
			skillUltimateName: `火力大喵`,
			skillUltimateDescription: `米雪儿部署一架强大火力的火力炮艇，火力炮艇将自动攻击一定范围内的敌方角色。`
		},
		Nobunaga: {
			Name: "信",
			Type: "守护",
			skillActiveName: `守望之眼`,
			skillActiveDescription: `信可布置至多两个守望之眼，在守望之眼的范围内将获得射速和人机工效提升并回复护甲；两个守望之眼互相连接时，增益效果提升。`,
			skillPassiveName: `致盲脉冲`,
			skillPassiveDescription: `开镜状态下的信开始积蓄能量，能量续满后，他的射击将使敌人在开镜状态下丢失准星。`,
			skillUltimateName: `脉冲过载`,
			skillUltimateDescription: `信原地部署一个向四周不断发射脉冲波的脉冲装置，被脉冲波命中的敌人将被透视给全体队友且进入一段时间的沉默状态。`
		},
		Kokona: {
			Name: "心夏",
			Type: "支援",
			skillActiveName: `治疗无人机`,
			skillActiveDescription: `心夏选择自己或一个友方角色为目标生成—个治疗无人机，无人机可以为被释放目标回复护甲，并给无人机周围所有友方目标回复生命值。`,
			skillPassiveName: `急速救援`,
			skillPassiveDescription: `心夏会在未受击时缓慢回复自身生命值，同时在救援友方角色时，心夏会放出援护无人机自动扶起队友。`,
			skillUltimateName: `卡丘重塑`,
			skillUltimateDescription: `心夏选择一个阵亡的友方角色，将其复活在自己附近。`
		},
		Yvette: {
			Name: "伊薇特",
			Type: "控场",
			skillActiveName: `熊熊出击`,
			skillActiveDescription: `伊薇特召出战术熊，熊可以冲撞，撞到障碍物或是再次按下左键会在地面上留下冰面。冰面附带打滑和易伤效果。`,
			skillPassiveName: `皑皑藏雪`,
			skillPassiveDescription: `伊薇特站立不动一段时间后，会进入迷彩状态，远处的敌人看不见伊薇特，当愈发靠近时才会慢慢显示其轮廓。`,
			skillUltimateName: `爽爽霜风`,
			skillUltimateDescription: `伊薇特召唤出一只巨大的冰霜熊，分三段展开极寒领域，敌人在此将受到打滑和易伤，降低射速及人机工效的效果。`
		},
		Flavia: {
			Name: "芙拉薇娅",
			Type: "决斗",
			skillActiveName: `致幻魅影`,
			skillActiveDescription: `芙拉薇娅召唤幻蝶短时间跟随自己，期间受到攻击损失生命值时进入短时间的无敌状态并原地生成一个致幻球。致幻球限制敌方视野且可被击碎。`,
			skillPassiveName: `周生复始`,
			skillPassiveDescription: `芙拉薇娅累计受到少量伤害时会减少主动技能的冷却时间；累计受到大量伤害时会获得临时绝招点数，通过此方式获得的绝招点数当前回合有效。`,
			skillUltimateName: `幻梦化蝶`,
			skillUltimateDescription: `芙拉薇娅以自身为中心释放致幻领域，领域内的敌方单位造成致命伤害时，芙拉薇娅会化身为蝴蝶，短时间后重塑身体，继续战斗。领域外敌方无视重塑规则但仅在被攻击时可视芙拉薇娅。`
		},
		Yugiri: {
			Name: "忧雾",
			Type: "控场",
			skillActiveName: `蚀甲毒雾`,
			skillActiveDescription: `布置一个蜗牛装置，激活后可产生球形毒雾，临时腐蚀附近敌方角色的护甲。`,
			skillPassiveName: `毒雾爆发`,
			skillPassiveDescription: `使用主武器对敌方角色造成一定量的生命值伤害后，会引爆敌人体内的腐蚀性毒素，临时腐蚀附近敌方角色的护甲。`,
			skillUltimateName: `凌毒侵蚀`,
			skillUltimateDescription: `召唤大范围的毒雾向前方缓慢推进，腐蚀范围内敌方角色的护甲上限。`
		},
		Ming: {
			Name: "明",
			Type: "决斗",
			skillActiveName: `破甲电球`,
			skillActiveDescription: `明发射一个电球，其达到最大距离、碰到敌方超弦体时会自动引爆，也可通过手动再次按下技能键后主动引爆。电球会破坏范围内所有敌方单位（包含召唤物）的护甲并造成减速。明进入电场将提升移动速度。`,
			skillPassiveName: `吸能赋甲`,
			skillPassiveDescription: `明使用枪械和主动技能对敌方护甲或护盾造成伤害时，自己的护甲将得到基于该伤害量的回复。绝招持续时间内，被动会回复临时护甲并增加回复量。`,
			skillUltimateName: `强雷铸甲`,
			skillUltimateDescription: `明获得临时护甲并使自己的射击附带可叠加的减速效果。明使用枪械和主动技能对敌人的护甲造成伤害时，可延长该技能持续时间并回复临时护甲。`
		},
		Lawine: {
			Name: "拉薇",
			Type: "先锋",
			skillActiveName: `寻影猎刃`,
			skillActiveDescription: `拉薇投掷脉冲刀，制造一个磁力场，将一定范围内的敌方单位暴露给拉薇及其队友，脉冲刀每次扫描探测不到敌人时会立刻消失，最多扫描三次。`,
			skillPassiveName: `曝影显踪`,
			skillPassiveDescription: `拉薇主武器命中敌方单位时，会将其短暂透视给自己。`,
			skillUltimateName: `遁影藏踪`,
			skillUltimateDescription: `拉薇于自身正前方生成一片矩形磁场。进入磁场时，拉薇将进入隐身状态。隐身状态下的拉薇无法射击。`
		},
		Meredith: {
			Name: "梅瑞狄斯",
			Type: "控场",
			skillActiveName: `金沙热浪`,
			skillActiveDescription: `梅瑞狄斯打出一颗弦能球体，于落点处创造一片黄沙领域，降低敌方角色移速和人机工效一段时间并暂时削减其生命值。`,
			skillPassiveName: `时零沙环`,
			skillPassiveDescription: `滞空状态下，当梅瑞狄斯进入技能瞄准、武器瞄准或者战术瞄准的状态时，自身的下落速度会被降低。`,
			skillUltimateName: `流沙大葬`,
			skillUltimateDescription: `梅瑞狄斯投掷出一个能制造巨大沙暴领域的金字塔。沙暴领域可以遮蔽视野，并暂时削减敌方角色生命值。`
		},
		Reiichi: {
			Name: "令",
			Type: "控场",
			skillActiveName: `破晓帷幕`,
			skillActiveDescription: `令使用自己的伞制造出一堵可以纵向释放或者横向释放的弦能光幕，光幕会遮蔽视野。`,
			skillPassiveName: `黎明洞悉`,
			skillPassiveDescription: `在保持开镜状态时，令每一段时间会扫描一遍前方敌人及其召唤物，使其透视，仅令可见。`,
			skillUltimateName: `庇护圣屏`,
			skillUltimateDescription: `立即刷新主动技能，在持续时间内增强光幕，使其能够格挡所有来自敌方角色的子弹。`
		},
		Kanami: {
			Name: "香奈美",
			Type: "先锋",
			skillActiveName: `旋律回响`,
			skillActiveDescription: `香奈美可以用枪射出声呐片，声呐片会释放出声波实时探查其前方180°一定范围内无建筑障碍物遮挡的敌人，被发现的敌人会暴露给香奈美及其队友。`,
			skillPassiveName: `交响爆音`,
			skillPassiveDescription: `香奈美的主武器发射子弹之后，会以子弹落点范围产生一个圆形音波区，处在音波区内的敌人信息会被暴露给香奈美自己。`,
			skillUltimateName: `演出开始`,
			skillUltimateDescription: `香奈美在战场内展开舞台，舞台展开后开始播放音乐，所有在舞台一定范围内的敌人都会被歌声吸引、减速、丢失准星的同时还会被晕眩，降低射速。`
		},
		Eika: {
			Name: "艾卡",
			Type: "决斗",
			skillActiveName: `炼狱牢笼`,
			skillActiveDescription: `在面前生成一个球形火牢，敌人穿过牢壁受到火焰伤害，牢内没敌人时提前结束。艾卡在火牢内，主武器对内部敌人造成额外火焰伤害。消耗100热量所获增益：牢壁的伤害更高。`,
			skillPassiveName: `日珥蓄火`,
			skillPassiveDescription: `每次射击命中敌人会积攒热量，最多100值。满热时对弦化敌人造伤能力增强。满热下，其他技能可以消耗热量获得强化。`,
			skillUltimateName: `烈焰风暴`,
			skillUltimateDescription: `本回合内最多丢出3道烈焰风暴，吹飞敌人并造成火焰伤害。每发消耗100热量所获增益：风暴更大，伤害更高，且敌人高亮。`
		},
		Fragrans: {
			Name: "珐格兰丝",
			Type: "支援",
			skillActiveName: `活力芬芳`,
			skillActiveDescription: `珐格兰丝可以释放两种有限数量的香水。释放后会以自己为中心创造香氛区域，区域内己方会获得射速或移速提升，香氛效果会随着时间推移逐渐减弱，最终消失。`,
			skillPassiveName: `复苏芳香`,
			skillPassiveDescription: `珐格兰丝会散发淡淡的恢复香氛，附近的队友和自己都会缓慢恢复生命值。`,
			skillUltimateName: `激昂芬芳`,
			skillUltimateDescription: `珐格兰丝会以自己为中心制造强烈香氛区域，区域内友军会获得高额射速、移速提升和生命值恢复，该效果不会衰减且生命值恢复不会被伤害中断，释放期间珐格兰丝无法使用武器，但会获得大幅减伤。`
		},
		Celestia: {
			Name: "星绘",
			Type: "支援",
			skillActiveName: `守护星芒`,
			skillActiveDescription: `星绘选择一个友方角色，投掷流星弦能，赋予其临时护甲。之后流星弦能将返回星绘身边，赋予星绘临时护甲。`,
			skillPassiveName: `星弦甲生`,
			skillPassiveDescription: `星绘周围有友方角色时，可缓慢恢复该角色与自身的护甲值。`,
			skillUltimateName: `星空之门`,
			skillUltimateDescription: `星绘选择一个友方角色，为该队友和自身提供临时护甲值，并开始蓄能。蓄能完毕后，星绘将传送到该角色身边，蓄能期间按下大招键可取消传送（不取消护甲增益）。`
		},
		Audrey: {
			Name: "奥黛丽",
			Type: "守护",
			skillActiveName: `重火倾泄`,
			skillActiveDescription: `进入架设状态，大幅提升射速，无后坐力，连续射击不需更换弹匣。若奥黛丽的连续射击时间过长，便会进入枪口过热状态无法射击。`,
			skillPassiveName: `皇家盾牌`,
			skillPassiveDescription: `奥黛丽进入架枪模式或进入开镜模式时，召唤护盾守护自身正面，且架枪模式下会获得额外护盾最大值。`,
			skillUltimateName: `狂轰滥炸`,
			skillUltimateDescription: `奥黛丽架设一把榴弹发射器，可发射六枚榴弹炮。榴弹炮爆炸后会分裂成弹跳炸弹，弹跳炸弹爆炸时将于地面生成火海。`
		},
		Maddelena: {
			Name: "玛德蕾娜",
			Type: "控场",
			skillActiveName: `颜料束缚`,
			skillActiveDescription: `玛德蕾娜发射一滩颜料，经过这滩颜料的敌人将被减速、弦化禁止并暴露脚印。`,
			skillPassiveName: `颜料脚印`,
			skillPassiveDescription: `玛德蕾娜使用主武器命中敌方角色时，可使敌方角色减速并暴露脚印。`,
			skillUltimateName: `颜料泡泡`,
			skillUltimateDescription: `玛德蕾娜发射巨大泡泡，泡泡内的敌人将被禁止弦化且暴露脚印。泡泡爆炸后将对爆炸范围内的敌人施加额外的减速和易伤效果。`
		},
		Fuchsia: {
			Name: "绯莎",
			Type: "决斗",
			skillActiveName: `残息追踪`,
			skillActiveDescription: `对周围敌人感知，满血敌人被短暂透视，生命值不满则被持续透视，上述效果仅自己可视。感应到敌人将增加绯莎的移动速度。`,
			skillPassiveName: `以战养战`,
			skillPassiveDescription: `绯莎参与击破时，死亡的敌人将原地掉落能量晶体。绯莎可以靠近并吸收能量晶体，回复自身生命值。绯莎第一次吸取能量晶体时可增加自身生命值上限。`,
			skillUltimateName: `浴血狂戮`,
			skillUltimateDescription: `绯莎大幅度提升自身的射速和人机工效，并使得主动技能可令视野内敌人高亮。吸收能量晶体将延长该效果持续时间。`
		},
		BaiMo: {
			Name: "白墨",
			Type: "决斗",
			skillActiveName: `炫空斗舞`,
			skillActiveDescription: `白墨进入弦化状态，向前翻转跳跃贴近敌人，并为主武器自动补充子弹。白墨参与击破将刷新冷却。`,
			skillPassiveName: `嘻哈嘣彩`,
			skillPassiveDescription: `白墨的主武器单次射击命中敌人造成至少50点伤害后，使其弦化禁止。`,
			skillUltimateName: `重返街头`,
			skillUltimateDescription: `白墨原地放置一个重生信标，死亡或倒地时可以立即在信标处重生。白墨可以选择主动返回信标，并回复全部生命值。`
		},
		Galatea: {
			Name: "加拉蒂亚",
			Type: "先锋",
			skillActiveName: `飞牌瞬闪`,
			skillActiveDescription: `加拉蒂亚释放出一张卡牌以弧线飞出，卡牌碰到地面、墙面时会生成分身，按下交互键可以传送到分身位置。`,
			skillPassiveName: `欺诈牌影`,
			skillPassiveDescription: `当加拉蒂亚脱离墙面时，会在贴墙位置留下一个分身，每次下墙都会重新生成分身，当分身受伤时该被动进入冷却。加拉蒂亚的每一个分身在生成时都可以短暂探测周围无建筑障碍物遮挡的敌人给加拉蒂亚及全体友方，攻击分身的敌人也会被暂时暴露。`,
			skillUltimateName: `牌影戏法`,
			skillUltimateDescription: `加拉蒂亚朝前方随意投出大量卡牌，每一个卡牌都可以生成分身并让加拉蒂亚传送。`
		}
	},
	characterTypes: {
		Sentinel: '守护',
		Support: '支援',
		Controller: '控场',
		Duellist: '决斗',
		Vanguard: '先锋'
	},
	grenades: {
		Flashbang: '闪光弹',
		FragGrenade: '手雷',
		HealingGrenade: '治疗雷',
		Interceptor: '拦截者',
		SlowGrenade: '减速雷',
		SmokeBomb: '烟雾弹',
		Alarm: '警报器',
		WindstormGrenade: '风场雷',
		SnowBall: '雪球'
	},
	markbox: {
		mark: '画笔',
		straightline: '直线',
		arrowline: '箭头',
		color: '颜色',
		undo: '撤销',
		clear: '清空',
		clearwarning: {
			title: '确认清除所有笔迹？',
			content: '此操作不可撤销',
			ok: '确认',
			cancel: '取消',
			success: '已清除所有笔迹',
			failure: '清除笔迹失败'
		}
	}
}
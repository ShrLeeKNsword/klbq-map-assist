import { factions, PUS, TheScissors, Urbino } from './characters/factions'
import { grenades as grenades } from './grenades'
import { MapName } from './maplist'
import { FaGithub } from "react-icons/fa";

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

interface LineupSetting {
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

interface MobaiSuperJumpSetting {
  spotmark: string
  spotmarks: {
    disable: string
    available: string
    all: string
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

interface CharacterInfo {
  skillActiveName: string,
  skillActiveDescription: string,
  skillPassiveName: string,
  skillPassiveDescription: string,
  skillUltimateName: string,
  skillUltimateDescription: string
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
    [key in PUS|TheScissors|Urbino]: CharacterInfo
  }
  grenades: {
    [key in grenades]: string
  }
  markbox: MarkBox
}

export enum Languages {
  '简体中文',
  'English',
  '日本語'
}

export const i18nData: {
  [key in Languages]: I18nData
} = [
    {
      language: Languages['简体中文'],
      title: '卡拉彼丘地图助手',
      announcement: "公告",
      friendlink: "友情链接",
      sitelist: "切换网站节点",
      announcementdata: {
        notshowntoday: "今日不再显示",
        pin: {
          title: "网站测试运行",
          date: "2024.10.2",
          summary: "网站基础功能完善，角色图标已可拖拽。其余功能尽情期待！",
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
          Flavia: '芙拉薇娅'
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
          skillActiveName: `喵喵！炮塔`,
          skillActiveDescription: `米歇尔投掷一个小炮塔，可以附着在任何表面（除玩家外）。炮塔会自动攻击敌人（3 伤害/秒）并减慢他们的速度。`,
          skillPassiveName: `猫感知`,
          skillPassiveDescription: `攻击米歇尔的敌人将被米歇尔和她的队友高亮显示。`,
          skillUltimateName: `终极！喵喵！`,
          skillUltimateDescription: `米歇尔部署一个强大的喵喵无人机，会自动以更大的伤害和范围攻击敌人。`
        },
        Nobunaga: {
          skillActiveName: `观察者`,
          skillActiveDescription: `信长在地面上放置一个装置，当他在其范围内时，他的射速、重装速度和护甲恢复速度都会提高。最多有 2 次充能。如果 2 个观察者在彼此的范围内，则增益效果增加。该装置可以被破坏。`,
          skillPassiveName: `致盲脉冲`,
          skillPassiveDescription: `瞄准时，信长的步枪会积累能量。当充能完毕时，击中敌人会导致他们的瞄准失准。信长的基础护甲+10。`,
          skillUltimateName: `电磁脉冲`,
          skillUltimateDescription: `在地面放置一个脉冲装置，发出大范围脉冲波。范围内的敌人会被连续高亮显示并沉默。可以被任何武器破坏。`
        },
        Kokona: {
          skillActiveName: `治疗无人机`,
          skillActiveDescription: `可可娜派出一台治疗无人机，治疗和恢复选定盟友或她自己的护甲。附近的盟友也会受到治疗。`,
          skillPassiveName: `紧急救援`,
          skillPassiveDescription: `可可娜可以召唤无人机自动复活倒下的盟友。可以同时复活多个盟友，复活的盟友拥有 50 点生命值。此外，可可娜每秒恢复 2 点生命值。`,
          skillUltimateName: `重建`,
          skillUltimateDescription: `可可娜启动终端选择一个盟友，用无人机复活他。复活的盟友将拥有满生命值和护甲。可以通过在她施放技能前击杀可可娜或摧毁复活无人机来取消。`
        },
        Yvette: {
          skillActiveName: `飞飞`,
          skillActiveDescription: `伊薇特召唤她的泰迪熊飞飞，变成一只真正的熊。再次按技能键控制飞飞，飞飞可以向前冲撞敌人并留下一片冰地（2 次充能），使敌人滑行并承受更多伤害。按住右键召回飞飞。控制飞飞时伊薇特会变得脆弱。`,
          skillPassiveName: `隐雪`,
          skillPassiveDescription: `伊薇特静止几秒后会进入隐身状态。只有在她的隐身范围内靠近敌人时才会被发现。`,
          skillUltimateName: `寒风`,
          skillUltimateDescription: `伊薇特召唤愤怒的飞飞，猛击地面 3 次，形成越来越大的冰地。冰地内的敌人会滑行、承受更多伤害，并降低装填速度、瞄准速度和射速。`
        },
        Flavia: {
          skillActiveName: `幻象幽灵`,
          skillActiveDescription: `弗拉维亚召唤幻象蝴蝶跟随她 5 秒，此期间若她受到攻击，变得无敌 2 秒并在原地生成一个幻象光球。幻象光球会使附近敌人短暂失明并可以被摧毁。再次使用技能会立即取消无敌状态。`,
          skillPassiveName: `重生圈`,
          skillPassiveDescription: `每当弗拉维亚受到 15 点伤害时，幻象幽灵的冷却时间减少 1 秒。每累计 160 点伤害，她获得 1 点临时终极点数，仅在当前回合有效。弗拉维亚的基础护甲 +5。`,
          skillUltimateName: `梦蝶变`,
          skillUltimateDescription: `弗拉维亚在自己周围创建一个幻象领域，若她在领域中倒下，将变成蝴蝶并在 3 秒后复活（终极持续期间重复）。领域外的敌人看不到弗拉维亚，但仍可攻击她；如果弗拉维亚被领域外敌人击杀，将无法自动复活，立即死亡。`
        },
        Ming: {
          skillActiveName: `等离子球`,
          skillActiveDescription: `明发射一个电球，其达到最大距离、碰到敌方超弦体时会自动引爆，也可通过手动再次按下技能键后主动引爆。电球会破坏范围内所有敌方单位（包含召唤物）的护甲并造成减速。明进入电场将提升移动速度。`,
          skillPassiveName: `护甲吸收`,
          skillPassiveDescription: `明使用枪械和主动技能对敌方护甲或护盾造成伤害时，自己的护甲将得到基于该伤害量的回复。绝招持续时间内，被动会回复临时护甲并增加回复量。`,
          skillUltimateName: `等离子护甲`,
          skillUltimateDescription: `明获得临时护甲并使自己的射击附带可叠加的减速效果。明使用枪械和主动技能对敌人的护甲造成伤害时，可延长该技能持续时间并回复临时护甲。`
        },
        Lawine: {
          skillActiveName: `脉冲刀`,
          skillActiveDescription: `投掷脉冲刀，在范围内生成一个大磁场，使敌人被缓慢高亮显示给拉维娜及其队友。脉冲刀扫描失败时会立即消失。脉冲刀最多可以扫描 3 次，可以被任何武器或手雷摧毁。`,
          skillPassiveName: `暴露痕迹`,
          skillPassiveDescription: `被拉维娜的主要武器击中的敌人会被高亮显示，仅拉维娜可见。`,
          skillUltimateName: `逃离阴影`,
          skillUltimateDescription: `拉维娜在面前创建一个矩形磁场，进入磁场后变为隐身状态。隐身状态下无法使用任何武器。`
        },
        Meredith: {
          skillActiveName: `沙热波`,
          skillActiveDescription: `梅雷迪斯发射一个能量球，击中敌人或障碍物时会生成沙地。沙地内的敌人会被减速，装填速度降低，生命值随时间减少。`,
          skillPassiveName: `时间扭曲`,
          skillPassiveDescription: `瞄准、使用技能和投掷手雷时，梅雷迪斯的下落速度减少。`,
          skillUltimateName: `流沙埋葬`,
          skillUltimateDescription: `梅雷迪斯投掷一个金字塔神器，产生一个巨大的沙尘暴。沙尘暴中的敌人会短暂失明、生命值随时间减少、被减速并被拉向中心。盟友也会受到短暂失明效果。`
        },
        Reiichi: {
          skillActiveName: `曙光幕`,
          skillActiveDescription: `Reiichi创造一个纸状能量幕，可垂直或水平部署以遮挡视线。`,
          skillPassiveName: `曙光洞察`,
          skillPassiveDescription: `在瞄准时，Reiichi的狙击步枪会积蓄能量。充能完毕后，它会在前方小范围扫描，并为Reiichi和他的队友高亮所有敌人。`,
          skillUltimateName: `庇护圣屏`,
          skillUltimateDescription: `刷新曙光幕并强化，使其能够阻挡敌方子弹。该效果适用于新部署的和已有的曙光幕。`
        },
        Kanami: {
          skillActiveName: `交响曲`,
          skillActiveDescription: `Kanami给她的狙击步枪注入旋律，射击表面产生共鸣，并在半径范围内高亮所有敌人，供Kanami和她的队友查看。`,
          skillPassiveName: `音爆`,
          skillPassiveDescription: `当子弹击中目标时，会短暂透视墙壁显示敌人和装置。`,
          skillUltimateName: `表演时间`,
          skillUltimateDescription: `Kanami召唤她的全息影像，音乐会干扰敌人瞄准，同时减速并将他们拉向中心。`
        },
        Eika: {
          skillActiveName: `地狱火笼`,
          skillActiveDescription: `制造一个火焰笼罩，通过笼子中的敌人会受到燃烧伤害。若没有敌人留在笼中，笼子会消散。在最大热度下，火焰会变为蓝色并造成更高伤害。`,
          skillPassiveName: `备用火花`,
          skillPassiveDescription: `Eika通过对敌人造成伤害来积攒热量，最高可达100。达到最大热度时，对易受伤害的敌人造成额外伤害，并增强她的技能。`,
          skillUltimateName: `火风暴`,
          skillUltimateDescription: `投掷最多3个火球，爆炸后形成龙卷风，将敌人拉起并持续造成火焰伤害。在最大热度时，龙卷风的范围和伤害增加，并高亮其中的敌人。`
        },
        Fragrans: {
          skillActiveName: `芳香四溢`,
          skillActiveDescription: `Fragrans释放两个香水装置，产生芳香区域，提升区域内盟友的射速或移动速度。效果会随时间减弱。`,
          skillPassiveName: `复活香气`,
          skillPassiveDescription: `Fragrans会散发微弱的治愈香气，缓慢恢复自己和附近队友的生命值。`,
          skillUltimateName: `浓郁芳香`,
          skillUltimateDescription: `创造一个浓烈的芳香区域，为盟友提供高速射击、移动速度加成和生命恢复。在效果期间，Fragrans无法使用武器，但获得显著的伤害减免。`
        },
        Celestia: {
          skillActiveName: `星守护`,
          skillActiveDescription: `Celestia向盟友发送一颗守护之星，恢复其临时护甲。星星随后返回Celestia，赋予她一半的效果。`,
          skillPassiveName: `宇宙`,
          skillPassiveDescription: `当盟友靠近Celestia时，她和盟友会逐渐恢复护甲（+2/s）。`,
          skillUltimateName: `星门`,
          skillUltimateDescription: `Celestia打开星门，选择地图上的一位盟友，为他们和自己提供额外护甲。充能后，她会传送至所选盟友位置。若Celestia受伤或再次使用技能，传送会取消并返回原位，护甲不损失。`
        },
        Audrey: {
          skillActiveName: `重火力`,
          skillActiveDescription: `Audrey进入静止状态，大幅增加机枪的射速和最大护盾。机枪不再需要重新装填，但会随时间过热且无后坐力。`,
          skillPassiveName: `皇家护盾`,
          skillPassiveDescription: `Audrey在瞄准时额外获得30护甲，破损后会短暂恢复。她的基础护甲增加5。`,
          skillUltimateName: `轰炸`,
          skillUltimateDescription: `Audrey进入静止状态并召唤一个榴弹发射器，发射6发燃烧弹。每发燃烧弹会在地面上生成火焰区域，持续造成伤害。`
        },
        Maddelena: {
          skillActiveName: `色彩束缚`,
          skillActiveDescription: `Maddelena发射一滩颜料，经过的敌人会被减速，且无法使用纸张模式。`,
          skillPassiveName: `色彩足迹`,
          skillPassiveDescription: `被Maddelena的主武器或技能命中的敌人会被减速并留下可见的足迹。`,
          skillUltimateName: `色彩泡泡`,
          skillUltimateDescription: `Maddelena释放一个不断扩大的泡泡，使其中的敌人无法使用纸张模式并显示其足迹。泡泡爆炸后会减速并使敌人易受伤害。`
        },
        Fuchsia: {
          skillActiveName: `猎人感应`,
          skillActiveDescription: `Fuchsia感应附近的敌人，短暂高亮全血的敌人并持续高亮受伤的敌人，同时增加她的移动速度。`,
          skillPassiveName: `战斗进食`,
          skillPassiveDescription: `击杀或助攻敌人会掉落能量晶体，Fuchsia吸收后可恢复50生命值。`,
          skillUltimateName: `血浴`,
          skillUltimateDescription: `Fuchsia获得极高的射速、装填速度、瞄准速度和移动速度。猎人感应增强，视线中的所有敌人都会高亮。吸收能量晶体会延长持续时间。`
        },
        BaiMo: {
          skillActiveName: `天空舞`,
          skillActiveDescription: `BaiMo迅速向前冲刺，并为霰弹枪重新装填两发子弹。击杀时技能会刷新。`,
          skillPassiveName: `嘻哈色彩`,
          skillPassiveDescription: `当造成至少50点伤害时，BaiMo会短暂禁用敌人的纸张模式。`,
          skillUltimateName: `街头之王`,
          skillUltimateDescription: `BaiMo进入街头之王状态，获得生命吸收并降低所有技能冷却时间。击杀会使技能冷却时间清零。`
        },
        Galatea: {
          skillActiveName: `飞卡闪现`,
          skillActiveDescription: `Galatea释放一张沿弧线飞出的卡牌，当卡牌触地或触墙时，会生成一个克隆体，Galatea可以通过按互动键传送到克隆体的位置，且克隆体可以被摧毁。每个克隆体可以探测10米范围内的可见敌人，并暴露给Galatea及其所有队友，同时短时间内显示攻击克隆体的敌人位置。`,
          skillPassiveName: `欺诈之影`,
          skillPassiveDescription: `当Galatea脱离墙壁时，会在墙上留下一个克隆体，每次离墙时会重新生成。当克隆体受到伤害时，将进入冷却。`,
          skillUltimateName: `影子卡牌戏法`,
          skillUltimateDescription: `Galatea向前投掷一堆卡牌，每张卡牌生成一个克隆体并传送Galatea。`
        }
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
    },
    {
      language: Languages.English,
      title: 'Strinova Map Assistant',
      announcement: "Announcement",
      friendlink: "Friend Link",
      sitelist: "Switch Server",
      announcementdata: {
        notshowntoday: "Got it",
        pin: {
          title: "Site Beta test",
          date: "2024.10.2",
          summary: "Most of the core function is ready to use, but some are still in progress. We will continue to optimize and update the site.",
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
          Flavia: 'Flavia'
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
          skillActiveName: `Meow Meow! Turret`,
          skillActiveDescription: `Michele throws a small turret that attached to any surface (except player). The turret will automaticaly attack enemy (3 dmg/s) and slow them down.`,
          skillPassiveName: `Cat Sense`,
          skillPassiveDescription: `Enemy that damaged Michele will be highlighted for Michele and her teammates.`,
          skillUltimateName: `Ultra! Meow Meow!`,
          skillUltimateDescription: `Michele deploy a big Meow Meow Drone with powerful firepower. It will automaticaly attack enemy with bigger damage & range.`
        },
        Nobunaga: {
          skillActiveName: `Observer`,
          skillActiveDescription: `Nobunaga place a device on the ground which will gains Rate Of Fire, faster reload & restore Armor when he's within it range. Max 2 charges. If 2 Observer are placed within each other range, the buff effects are increased. It can be destroyed.`,
          skillPassiveName: `Blinding Pulse`,
          skillPassiveDescription: `When ADS, Nobunaga will build energy with his rifle. When fully charged, if enemy got hit by this charged shot, their crosshairs in ADS will be glitched out. Nobunaga's base Armor +10`,
          skillUltimateName: `E.M.P`,
          skillUltimateDescription: `Place a pulse device on the ground which emit large range pulse wave. Enemy within range will be highlighted & silenced continuously. It can be detroyed by any weapons.`
        },
        Kokona: {
          skillActiveName: `Healing Drone`,
          skillActiveDescription: `Kokona sends a healing drone to heal and recover armor a selected ally or herself. Allies that stand near the drone will also healed.`,
          skillPassiveName: `Emergency Rescue`,
          skillPassiveDescription: `Kokona can summon a drone to auto-revive downed allies. Can revive multiple allies at the same time. Revived ally has 50 HP. Also Kokona restores 2 HP per second.`,
          skillUltimateName: `Rebuild`,
          skillUltimateDescription: `Kokona open up K.I.A terminal and choose an ally to resurrect using drones. The resurected ally will has full HP & Armor. It can be canceled either kill Kokona before she ults or destroy the drones when they resurrecting.`
        },
        Yvette: {
          skillActiveName: `Fei`,
          skillActiveDescription: `Yvette summon her teddy bear Fei to tranform into a real bear. Press the skill again to control Fei, Fei can dash forward to knock enemies up & leave an icy ground behind (2 charges). Which makes enemy slides & take more damage. Hold right mouse to recall Fei. Yvette is vulnerable while controlling Fei.`,
          skillPassiveName: `Hidden Snow`,
          skillPassiveDescription: `Yvette will go stealth after standing still for few secs. She can only be detected if going near her stealth range.`,
          skillUltimateName: `Cold Breeze`,
          skillUltimateDescription: `Yvette summon raging Fei that that slam the ground 3 times & create an icy ground which get bigger each slam. Enemy inside will slides, take more damage, slower Reload Speed, slower ADS Speed & slower Rate Of Fire.`
        },
        Flavia: {
          skillActiveName: `Illusory Phantom`,
          skillActiveDescription: `Flavia summons the Phantom Butterfly to follows her for 5 seconds, during which time she loses 1HP from an attack, she becomes invincible for 2 seconds and spawns a Phantom Orb on the spot. The Phantom Orb will near-sight surrounding enemies and can be destroyed. Use the skill again to cancel invincible state instantly.`,
          skillPassiveName: `Rebirth Circle`,
          skillPassiveDescription: `Whenever Flavia takes 15 Damage, reduces Illusory Phantom's cooldown by 1 second. For every 160 damage taken, she gains 1 temporary Ultimate Point, which remains valid for the current round. Flavia's base armor +5'`,
          skillUltimateName: `Dream Butterfly Transformation`,
          skillUltimateDescription: `Flavia creates an illusionary field centered around herself. If she knocked out while in the field, Flavia'll transforms into a butterfly & revives herself after 3 seconds (repeat till ult ends). Enemies outside the field cannot see Flavia but they still can attack Flavia & will see Flavia if they attacked by her. If Flavia is killed by enemies outside the field, it will not trigger auto-revive & she'll die instantly.`
        },
        Ming: {
          skillActiveName: `Plasma Ball`,
          skillActiveDescription: `Fires a ball of electricity that will automatically detonate when it reaches the maximum distance or hits an enemy superstring. It can also be manually detonated by pressing the skill key again. The ball of electricity will destroy the armor of all enemy units (including summons) within the range and slow them down. Ming will increase his movement speed when entering the electric field.`,
          skillPassiveName: `Armor Absorbing`,
          skillPassiveDescription: `When Ming uses firearms and active skills to damage the enemy's armor or shield, his armor will be restored based on the amount of damage. During the duration of the ultimate, the passive will restore temporary armor and increase the amount restored.`,
          skillUltimateName: `Plasma Armor`,
          skillUltimateDescription: `Ming gains temporary armor and applies a stackable slow to his shots. When Ming uses a gun or active skill to damage an enemy's armor, the skill's duration is extended and temporary armor is restored.`
        },
        Lawine: {
          skillActiveName: `Pulse Knife`,
          skillActiveDescription: `Throws the Pulse Knife to create a large magnetic field, slowly highlight enemies within range to Lawine and her teammates. The pulse knife will disappear immediately after a failed scan. The pulse knife can scan up to 3 times and can be destroyed by any weapons & nades.`,
          skillPassiveName: `Exposure Trace`,
          skillPassiveDescription: `Enemy hit by Lawine's Primary Weapon will be highlighted. Only Lawine can see.`,
          skillUltimateName: `Escape The Shadow`,
          skillUltimateDescription: `Lawine creates a rectangular magnetic field in front. When entering the magnetic field, Lawine becomes invisible. Lawine cannot use any weapons while invisible.`
        },
        Meredith: {
          skillActiveName: `Sand Heatwave`,
          skillActiveDescription: `Meredith fires an energy orb which will creates a sand field when hit enemy or obstacles. All enemy inside will be slowed, reduces reload speed and their HP will reduces overtime.`,
          skillPassiveName: `Time Warp`,
          skillPassiveDescription: `Reduce Meredith's falling speed when aiming, using skills and nades.`,
          skillUltimateName: `Quicksand Burial`,
          skillUltimateDescription: `Meredith throws a pyramid artifact and create a massive sandstorm. All enemy inside will be near-sighted, HP reduced overtime, slowed down while being pulled to the center. Allies also got near-sighted.`
        },
        Reiichi: {
          skillActiveName: `Dawn Curtain`,
          skillActiveDescription: `Reiichi uses his umbrella to create a curtain of Paper energy light that can be released vertically or horizontally, which obscures the field of view.`,
          skillPassiveName: `Dawn Insight`,
          skillPassiveDescription: `When in ADS, Reiichi will build up energy with his sniper. When fully charged, it will scan a small are in front of him & hightlight all enemy for himself & teammates.`,
          skillUltimateName: `Sacred Screen of Refuge`,
          skillUltimateDescription: `Immediately refresh Dawn Curtain, and enchance Dawn Curtain which now can block bullets from enemy. The blocking effect also applies to pre-use Dawn Curtain.`
        },
        Kanami: {
          skillActiveName: `Symphony`,
          skillActiveDescription: `Kanami infuses her sniper with her melody, then shoot to any surface which will resonate and hightlight all enemy in it radius for Kanami & teammates.`,
          skillPassiveName: `Sonic Boom`,
          skillPassiveDescription: `When a bullet hit a target it will highlight enemy and ultilities through wall briefly.`,
          skillUltimateName: `Showtime`,
          skillUltimateDescription: `Kanami summon a hologram of herself, the music start playing which glitch out enemy scope in ADS while slowing & pulling them to the center.`
        },
        Eika: {
          skillActiveName: `Hellfire Cage`,
          skillActiveDescription: `Creates a fire cage in front of Aika that burns enemies who pass through its boundaries, and the cage disippates prematurely if there are no more enemies inside. When Aika enters the cage, her shotgun will deals additional burn damage against enemies within the cage. Casting the skill with 100 heat, the flame will turn to blue & enemy takes more damage.`,
          skillPassiveName: `Reserve Flare`,
          skillPassiveDescription: `When Aika deals damage to enemies, She gathers a small amount of heat for her heat gauge, up to a max of 100. At max heat, Aika deals bonus damage against paper-mode enemies and empowers her abilities.`,
          skillUltimateName: `Firestorm`,
          skillUltimateDescription: `Throws out up to 3 fireball that can explode into a tornado, lifting (like wind bomb effect) and pulling in enemies, dealing continuous fire damage to them. Casting the skill with 100 heat, increases the tornado's size, damage, as well as highlighting (Not through wall) any enemies caught within.`
        },
        Fragrans: {
          skillActiveName: `Vibrant And Fragrant`,
          skillActiveDescription: `Fragrans can release two limited quantities of perfumes. After being released, it will create a fragrance area centered on itself, and the area will increase the fire rate or movement speed of the ally, and the fragrance effect will gradually decrease over time, and eventually disappear.`,
          skillPassiveName: `Revive The Aroma`,
          skillPassiveDescription: `Fragrans emits a faint scent of recovery, and nearby teammates and herself slowly regenerate health.`,
          skillUltimateName: `Intense Fragrance`,
          skillUltimateDescription: `Fragrans will create an area of intense fragrance centered on herself, and allies in the area will gain a high rate of fire, increased movement speed, and health regeneration, the effect will not be decayed, and Fragrans will not be able to use weapons during the release, but will receive a significant damage reduction.`
        },
        Celestia: {
          skillActiveName: `Guardian Of The Star`,
          skillActiveDescription: `Celestia targets an allied character with a guardian star, replenishing temporary armor. The star then returns to her, granting her the half of the original effect.`,
          skillPassiveName: `Cosmos`,
          skillPassiveDescription: `When allies is near Huxing, both allies & herself will regain Armor overtime (+2/s). `,
          skillUltimateName: `Stargate`,
          skillUltimateDescription: `Huxing open the Stargate and choose an ally across the map, immediately gains her & the chosen ally a huge Extra Armor, then she'll start build up enegry. When fully charged, Huxing will teleports to the chosen ally. It can be canceled if Huxing takes certain amount of damage or uses the skill again. When canceled Huxing will teleport back to where she used the skill, the Extra Armor Buff will not lost.`
        },
        Audrey: {
          skillActiveName: `Heavy Fire`,
          skillActiveDescription: `Audrey enters stationary state & cannot move. Greatly increase Rate Of Fire & Max Shield Limit of her MG. Her MG is no longer need to reload but will overheat overtime. Audrey MG no longer has recoil.`,
          skillPassiveName: `Royal Shield`,
          skillPassiveDescription: `Audrey will gains 30 Extra Armor when ADS. This Extra Armor will be restored shortly after the shield is broken. Audrey's base armor +5`,
          skillUltimateName: `Bombardment`,
          skillUltimateDescription: `Audrey enters stationary state & summon her grenade launcher that shoot out 6 incendiary round. Each round will bounce off the wall and explodes when hit the ground, creating 3 small area of fire causing damage overtime.`
        },
        Maddelena: {
          skillActiveName: `Color Binding`,
          skillActiveDescription: `Maddelena fires a puddle of paint, enemies that pass through this puddle will be slowed and cannot use Paper Mode.`,
          skillPassiveName: `Color Footprint`,
          skillPassiveDescription: `Enemy hit by Maddelena' Primary Weapon or her skills will be slowed and leave footprints behind.`,
          skillUltimateName: `Color Bubble`,
          skillUltimateDescription: `Maddelena fires a giant bubble which will becomes bigger overtime, enemies within the bubble won't be able to use Paper Mode and leave their footprints. When the bubble explodes, it will apply slow and vulnerability effect to enemies within the blast area.`
        },
        Fuchsia: {
          skillActiveName: `Predator's Sense`,
          skillActiveDescription: `Fuchsia senses surrounding enemies which highlights full HP enemies briefly & continiously for injured enemies. Sensing enemy will also increase Fuchsia's movement speed for short time.`,
          skillPassiveName: `Fight To Feed`,
          skillPassiveDescription: `When Fuchsia get a kill or assist, dead enemy will drop an Energy Crystal. She can go near and absorb it which will quickly restores herself 50HP.`,
          skillUltimateName: `Bloodbath`,
          skillUltimateDescription: `Fuchsia gains massive Rate Of Fire, faster Reload Speed, ADS Speed & Movement Speed. Predator's Sense will be enchanced & hightlight all enemies in her view. Absorbing Energy Crystal will extend the duration.`
        },
        BaiMo: {
          skillActiveName: `Skydance`,
          skillActiveDescription: `Baimo quickly dash forward & immediately reload 2 shell to his shotgun. Getting a kill will refresh the skill.`,
          skillPassiveName: `Hip-Hop Boom Color`,
          skillPassiveDescription: `When BaiMo deals atleast 50 Damage to enemy, they Paper Mode is disabled for few secs.`,
          skillUltimateName: `Let's Rock!`,
          skillUltimateDescription: `BaiMo place a respawn beacon at selected area and the music starts playing. When killed or press the skill again, Baimo will teleport back to the beacon fully restore his HP.`
        },
        Galatea: {
          skillActiveName: `Flying Cards Flash`,
          skillActiveDescription: `Galatea releases a card that flies out in an arc, and when the card touches the ground or wall, a clone will be generated, and Galatea can teleport to the location of the clone by pressing the interaction button, and the clone can be destroyed. Each clone can detect visible enemies within a 10-meter radius and expose them to Galatea and all of her teammates, as well as enemies attacking the clone for a short period of time`,
          skillPassiveName: `Fraudulent Shadow`,
          skillPassiveDescription: `When Galatea detaches from a wall, it leaves a clone at the wall sticker, and each time she gets off the wall, it will respawn again, and when the clone is damaged, it will passively enter the cooldown.`,
          skillUltimateName: `Shadow Card Trick`,
          skillUltimateDescription: `Galatea throws a bunch of cards in front of her, each of which spawns a clone and teleports Galatea.`
        }
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
    },
    {
      language: Languages.日本語,
      title: 'Strinova マップアシスタント',
      announcement: "Announcement",
      friendlink: "Friend Link",
      sitelist: "Switch Server",
      announcementdata: {
        notshowntoday: "今日不再显示",
        pin: {
          title: "网站测试运行",
          date: "2024.10.2",
          summary: "网站基础功能完善，角色图标已可拖拽。其余功能尽情期待！",
          data: {}
        },
        history: []
      },
      friendlinkdata: {
        classify: {
          official: "official",
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
        attact: 'Attack',
        defense: 'Defense',
        mapsetting: 'マップの設定',
        character: 'キャラクター（超弦体）',
        skill: 'スキル',
        grenade: '戦術アイテム',
        lineup: '戦術アイテムのポイント',
        skilllineup: 'スキルポイント',
        mobaisuperjump: '白墨スーパージャンプ',
        bugpoint: 'プログラムエラー',
        bugpointwarning: (
          <div style={{ fontSize: '12px', textAlign: 'left' }}>
            <div>ここにリストされているエラーは参照用です！</div>
            <div>私たちはこれらの脆弱性を悪用する禁止令には責任を負いません。</div>
          </div>
        ),
        learnmore: '詳細',
        supportus: 'SUPPORT US',
        supportusContent: <></>
      },
      mapsetting: {
        choosemap: 'マップ',
        maps: {
          WindyTown: 'ウィンディタウン',
          SpaceLab: 'スペース研究センター',
          Khesmet: '科斯迷特',
          CauchyDistrict: 'コーシー街区',
          EulerPort: 'オイラー港',
          Area88: '88街区',
          Base404: '404基地'
        },
        TeamHighlight: 'チームハイライト',
        TeamHighlightOptions: {
          prepare: '表示',
          blank: '非表示'
        },
        Landmarks: 'ランドマーク'
      },
      lineupsetting: {
        spotmark: 'スポットマーク',
        spotmarks: {
          disable: '無効',
          available: '可能なものだけ',
          all: '全て'
        }
      },
      skilllineupsetting: {
        spotmark: 'スポットマーク',
        spotmarks: {
          disable: '無効',
          available: '可能なものだけ',
          all: '全て'
        }
      },
      mobaisuperjumpsetting: {
        spotmark: 'スポットマーク',
        spotmarks: {
          disable: '無効',
          available: '可能なものだけ',
          all: '全て'
        }
      },
      bugpointsetting: {
        spotmark: 'スポットマーク',
        spotmarks: {
          disable: '無効',
          available: '可能なものだけ',
          all: '全て'
        }
      },
      factions: {
        PUS: 'PUS',
        TheScissors: 'シザーズ',
        Urbino: 'ウルビノ'
      },
      characters: {
        PUS: {
          Michele: 'ミシェル',
          Nobunaga: '信長',
          Kokona: '心夏',
          Yvette: 'イヴェット',
          Flavia: 'フラヴィア'
        },
        TheScissors: {
          Ming: 'ミン',
          Lawine: 'ラヴィーネ',
          Meredith: 'メレディス',
          Reiichi: '令一',
          Kanami: '香奈美',
          Eika: 'アイカ',
          Fragrans: 'フラグランス'
        },
        Urbino: {
          Celestia: '星理恵',
          Audrey: 'オードリー',
          Maddelena: 'マダレーナ',
          Fuchsia: 'フューシャ',
          BaiMo: '白墨',
          Galatea: 'ガラテア'
        }
      },
      characterInfo: {
        Michele: {
          skillActiveName: `ミャウミャウ！タレット`,
          skillActiveDescription: `ミシェルは小さなタレットを投げ、プレイヤー以外の表面に設置します。タレットは自動的に敵を攻撃し（3ダメージ/秒）、減速させます。`,
          skillPassiveName: `キャットセンス`,
          skillPassiveDescription: `ミシェルにダメージを与えた敵は、ミシェルとそのチームメイトにハイライト表示されます。`,
          skillUltimateName: `ウルトラ！ミャウミャウ！`,
          skillUltimateDescription: `ミシェルは強力な火力を持つ大きなミャウミャウドローンを展開します。より大きなダメージと範囲で敵を自動的に攻撃します。`
        },
        Nobunaga: {
          skillActiveName: `オブザーバー`,
          skillActiveDescription: `信長は地面に装置を設置し、その範囲内にいる時に射撃速度、リロード速度が上昇し、アーマーが回復します。最大2チャージ。2つのオブザーバーが互いの範囲内に設置されると、バフ効果が増加します。破壊可能です。`,
          skillPassiveName: `ブラインディングパルス`,
          skillPassiveDescription: `ADSの際、信長のライフルにエネルギーが蓄積されます。フルチャージ時に敵がこの充電ショットに命中すると、敵のADSクロスヘアがグリッチします。信長の基本アーマー+10`,
          skillUltimateName: `E.M.P`,
          skillUltimateDescription: `地面にパルス装置を設置し、広範囲のパルス波を放出します。範囲内の敵は継続的にハイライト表示され、沈黙状態になります。あらゆる武器で破壊可能です。`
        },
        Kokona: {
          skillActiveName: `ヒーリングドローン`,
          skillActiveDescription: `ここなは選択した味方または自身を回復しアーマーを回復するドローンを送ります。ドローンの近くにいる味方も回復します。`,
          skillPassiveName: `エマージェンシーレスキュー`,
          skillPassiveDescription: `ここなはダウンした味方を自動で蘇生するドローンを召喚できます。複数の味方を同時に蘇生可能です。蘇生された味方のHPは50です。またここなは毎秒2HPを回復します。`,
          skillUltimateName: `リビルド`,
          skillUltimateDescription: `ここなはK.I.A端末を開き、ドローンを使用して味方を復活させることができます。復活した味方はHPとアーマーが全回復します。ここなが復活前に倒されるか、復活中のドローンが破壊されるとキャンセルされます。`
        },
        Yvette: {
          skillActiveName: `フェイ`,
          skillActiveDescription: `イヴェットは彼女のテディベアのフェイを召喚し、本物の熊に変身させます。スキルを再度押すとフェイを操作でき、フェイは前方にダッシュして敵を打ち上げ、氷の地面を残します（2チャージ）。敵はスライドしより多くのダメージを受けます。右クリック長押しでフェイを呼び戻します。フェイを操作中のイヴェットは無防備です。`,
          skillPassiveName: `ヒドゥンスノー`,
          skillPassiveDescription: `イヴェットは数秒間じっとしているとステルス状態になります。ステルス範囲に近づくと検知されます。`,
          skillUltimateName: `コールドブリーズ`,
          skillUltimateDescription: `イヴェットは激怒したフェイを召喚し、地面を3回叩きつけ、叩くたびに大きくなる氷の地面を作ります。範囲内の敵はスライドし、より多くのダメージを受け、リロード速度、ADS速度、射撃速度が低下します。`
        },
        Flavia: {
          skillActiveName: `幻影のファントム`,
          skillActiveDescription: `フラヴィアはファントムバタフライを召喚し5秒間追従させます。この間1HPのダメージを受けると2秒間無敵になり、その場にファントムオーブを生成します。ファントムオーブは周囲の敵の視界を制限し、破壊可能です。スキルを再度使用すると無敵状態を即座にキャンセルできます。`,
          skillPassiveName: `リバースサークル`,
          skillPassiveDescription: `フラヴィアが15ダメージを受けるごとに、幻影のファントムのクールダウンが1秒減少します。160ダメージを受けるごとに、現在のラウンドで有効な一時的なアルティメットポイントを1獲得します。フラヴィアの基本アーマー+5`,
          skillUltimateName: `ドリームバタフライトランスフォーメーション`,
          skillUltimateDescription: `フラヴィアは自身を中心に幻影フィールドを作成します。フィールド内でノックダウンすると、フラヴィアは蝶に変身し3秒後に復活します（アルティメット終了まで繰り返し）。フィールド外の敵はフラヴィアを見ることができませんが、攻撃することは可能で、フラヴィアに攻撃された場合は見えるようになります。フィールド外の敵に倒された場合、自動復活は発動せず即座に死亡します。`
        },
        Ming: {
          skillActiveName: `プラズマボール`,
          skillActiveDescription: `最大距離に達するか敵のスーパーストリングに命中すると自動的に爆発する電気の球を発射します。スキルキーを再度押すことで手動で爆発させることもできます。範囲内のすべての敵ユニット（召喚物を含む）のアーマーを破壊し、減速させます。ミンは電場に入ると移動速度が上昇します。`,
          skillPassiveName: `アーマー吸収`,
          skillPassiveDescription: `ミンが銃火器とアクティブスキルで敵のアーマーやシールドにダメージを与えた時、ダメージ量に応じてアーマーが回復します。アルティメット中は、一時的なアーマーを回復し、回復量が増加します。`,
          skillUltimateName: `プラズマアーマー`,
          skillUltimateDescription: `ミンは一時的なアーマーを獲得し、ショットに重ね掛け可能な減速効果を付与します。ミンが銃やアクティブスキルで敵のアーマーにダメージを与えると、スキルの継続時間が延長され、一時的なアーマーが回復します。`
        },
        Lawine: {
          skillActiveName: `パルスナイフ`,
          skillActiveDescription: `パルスナイフを投げて大きな磁場を作り、範囲内の敵をラヴィンとそのチームメイトにゆっくりとハイライト表示します。スキャンに失敗するとパルスナイフは直ちに消滅します。パルスナイフは最大3回スキャンでき、あらゆる武器とグレネードで破壊可能です。`,
          skillPassiveName: `露出トレース`,
          skillPassiveDescription: `ラヴィンのプライマリーウェポンに命中した敵がハイライト表示されます。ラヴィンのみが見ることができます。`,
          skillUltimateName: `エスケープザシャドウ`,
          skillUltimateDescription: `ラヴィンは前方に長方形の磁場を作成します。磁場に入るとラヴィンは透明になります。透明化中は武器を使用できません。`
        },
        Meredith: {
          skillActiveName: `サンドヒートウェーブ`,
          skillActiveDescription: `メレディスは敵や障害物に当たると砂場を作るエネルギーオーブを発射します。範囲内の敵は減速し、リロード速度が低下し、HPが時間とともに減少します。`,
          skillPassiveName: `タイムワープ`,
          skillPassiveDescription: `エイム中、スキルやグレネードを使用中のメレディスの落下速度が低下します。`,
          skillUltimateName: `クイックサンドバリアル`,
          skillUltimateDescription: `メレディスはピラミッドのアーティファクトを投げ、巨大な砂嵐を作り出します。範囲内の敵は視界が制限され、HPが時間とともに減少し、中心に引き寄せられながら減速します。味方も視界が制限されます。`
        },
        Reiichi: {
          skillActiveName: `暁のカーテン`,
          skillActiveDescription: `霊一は傘を使って、縦または横に展開できる紙のエネルギー光のカーテンを作り出し、視界を遮ります。`,
          skillPassiveName: `暁の洞察`,
          skillPassiveDescription: `ADS時、霊一のスナイパーにエネルギーが蓄積されます。フルチャージ時、前方の小範囲をスキャンし、すべての敵を自身とチームメイトにハイライト表示します。`,
          skillUltimateName: `聖なる守護のスクリーン`,
          skillUltimateDescription: `直ちに暁のカーテンをリフレッシュし、敵の弾を遮断できるように強化します。この遮断効果は事前に使用した暁のカーテンにも適用されます。`
        },
        Kanami: {
          skillActiveName: `シンフォニー`,
          skillActiveDescription: `カナミは自身のスナイパーにメロディーを注入し、任意の表面に射撃すると共鳴し、範囲内のすべての敵をカナミとチームメイトにハイライト表示します。`,
          skillPassiveName: `ソニックブーム`,
          skillPassiveDescription: `弾が標的に命中すると、敵とユーティリティを壁越しに一時的にハイライト表示します。`,
          skillUltimateName: `ショータイム`,
          skillUltimateDescription: `カナミは自身のホログラムを召喚し、音楽が流れ始め、敵のADSスコープをグリッチさせながら、減速させ中心に引き寄せます。`
        },
        Eika: {
          skillActiveName: `ヘルファイアケージ`,
          skillActiveDescription: `アイカの前方に火のケージを作成し、境界を通過する敵を燃焼させます。ケージ内に敵がいなくなると早期に消滅します。アイカがケージに入ると、ケージ内の敵に対してショットガンが追加の燃焼ダメージを与えます。ヒートゲージが100の状態でスキルを使用すると、炎が青色に変化し、敵がより多くのダメージを受けます。`,
          skillPassiveName: `リザーブフレア`,
          skillPassiveDescription: `アイカが敵にダメージを与えると、ヒートゲージに少量のヒートを蓄積し、最大100まで貯めることができます。最大ヒート時、ペーパーモードの敵に対するボーナスダメージが増加し、アビリティが強化されます。`,
          skillUltimateName: `ファイアストーム`,
          skillUltimateDescription: `最大3つのファイアボールを投げ出し、竜巻に爆発し、敵を持ち上げ（風爆効果のように）引き寄せながら、継続的な火炎ダメージを与えます。ヒートゲージが100の状態でスキルを使用すると、竜巻のサイズとダメージが増加し、範囲内の敵をハイライト表示（壁越しは不可）します。`
        },
        Fragrans: {
          skillActiveName: `バイブラントアンドフレグラント`,
          skillActiveDescription: `フレグランスは2種類の限定量の香りを放出できます。放出後、自身を中心に香りの領域を作り出し、その領域内で味方の射撃速度または移動速度を上昇させます。香りの効果は時間とともに徐々に減少し、最終的に消滅します。`,
          skillPassiveName: `リバイブザアロマ`,
          skillPassiveDescription: `フレグランスは回復の微かな香りを放出し、近くの味方と自身のHPがゆっくりと回復します。`,
          skillUltimateName: `インテンスフレグランス`,
          skillUltimateDescription: `フレグランスは自身を中心に強烈な香りの領域を作り出し、範囲内の味方は高い射撃速度、移動速度上昇、HP回復を得ます。効果は減衰せず、フレグランスは放出中に武器を使用できませんが、大幅なダメージ軽減を受けます。`
        },
        Celestia: {
          skillActiveName: `ガーディアンオブザスター`,
          skillActiveDescription: `セレスティアは味方キャラクターにガーディアンスターを付与し、一時的なアーマーを回復させます。スターは彼女に戻り、元の効果の半分を彼女に付与します。`,
          skillPassiveName: `コスモス`,
          skillPassiveDescription: `味方がフーシンの近くにいる時、味方と自身のアーマーが時間とともに回復します（+2/秒）。`,
          skillUltimateName: `スターゲート`,
          skillUltimateDescription: `フーシンはスターゲートを開き、マップ上の味方を選択し、即座に自身と選択した味方に大量の追加アーマーを付与し、その後エネルギーを蓄積し始めます。フルチャージ時、フーシンは選択した味方の位置にテレポートします。一定量のダメージを受けるかスキルを再度使用するとキャンセル可能です。キャンセル時、フーシンはスキルを使用した場所に戻りますが、追加アーマーバフは失われません。`
        },
        Audrey: {
          skillActiveName: `ヘビーファイア`,
          skillActiveDescription: `オードリーは固定状態となり移動不可能になります。彼女のマシンガンの射撃速度と最大シールド限界が大幅に上昇します。マシンガンはリロードが不要になりますが、時間とともにオーバーヒートします。オードリーのマシンガンの反動がなくなります。`,
          skillPassiveName: `ロイヤルシールド`,
          skillPassiveDescription: `オードリーはADS時に30の追加アーマーを獲得します。このアーマーはシールドが破壊された直後に回復します。オードリーの基本アーマー+5`,
          skillUltimateName: `ボンバードメント`,
          skillUltimateDescription: `オードリーは固定状態となり、6発の焼夷弾を発射するグレネードランチャーを召喚します。各弾は壁で跳ね返り、地面に当たると爆発し、継続的なダメージを与える3つの小さな火炎地帯を作り出します。`
        },
        Maddelena: {
          skillActiveName: `カラーバインディング`,
          skillActiveDescription: `マッデレーナは塗料の水たまりを発射し、この水たまりを通過する敵は減速しペーパーモードを使用できなくなります。`,
          skillPassiveName: `カラーフットプリント`,
          skillPassiveDescription: `マッデレーナのプライマリーウェポンまたはスキルに命中した敵は減速し、足跡を残します。`,
          skillUltimateName: `カラーバブル`,
          skillUltimateDescription: `マッデレーナは時間とともに大きくなる巨大なバブルを発射し、バブル内の敵はペーパーモードを使用できず、足跡を残します。バブルが爆発すると、爆発範囲内の敵に減速と脆弱化効果を与えます。`
        },
        Fuchsia: {
          skillActiveName: `プレデターズセンス`,
          skillActiveDescription: `フクシアは周囲の敵を感知し、フルHPの敵を一時的に、負傷した敵を継続的にハイライト表示します。敵を感知すると短時間フクシアの移動速度が上昇します。`,
          skillPassiveName: `ファイトトゥフィード`,
          skillPassiveDescription: `フクシアがキルまたはアシストを獲得すると、死亡した敵がエネルギークリスタルをドロップします。近づいて吸収すると素早く50HPを回復します。`,
          skillUltimateName: `ブラッドバス`,
          skillUltimateDescription: `フクシアは大幅な射撃速度、リロード速度、ADS速度、移動速度を獲得します。プレデターズセンスが強化され、視界内のすべての敵をハイライト表示します。エネルギークリスタルを吸収すると継続時間が延長されます。`
        },
        BaiMo: {
          skillActiveName: `スカイダンス`,
          skillActiveDescription: `バイモは素早く前方にダッシュし、即座にショットガンに2発をリロードします。キルを獲得するとスキルがリフレッシュされます。`,
          skillPassiveName: `ヒップホップブームカラー`,
          skillPassiveDescription: `バイモが敵に50以上のダメージを与えると、数秒間ペーパーモードが無効になります。`,
          skillUltimateName: `レッツロック！`,
          skillUltimateDescription: `バイモは選択した場所にリスポーンビーコンを設置し、音楽が流れ始めます。倒されるかスキルを再度使用すると、バイモはビーコンに戻りHPが全回復します。`
        },
        Galatea: {
          skillActiveName: `フライングカーズフラッシュ`,
          skillActiveDescription: `ガラテアは弧を描いて飛ぶカードを放出し、カードが地面や壁に触れるとクローンが生成されます。ガラテアは相互作用ボタンを押してクローンの位置にテレポートでき、クローンは破壊可能です。各クローンは10メートル範囲内の可視の敵を検知し、ガラテアとすべてのチームメイトに露見させ、さらにクローンを攻撃する敵も短時間露見させます。`,
          skillPassiveName: `フロードゥレントシャドウ`,
          skillPassiveDescription: `ガラテアが壁から離れる時、壁のステッカーにクローンを残し、壁から降りるたびに再度出現します。クローンがダメージを受けると、パッシブにクールダウンに入ります。`,
          skillUltimateName: `シャドウカードトリック`,
          skillUltimateDescription: `ガラテアは前方に複数のカードを投げ、それぞれがクローンを生成し、ガラテアをテレポートさせます。`
        }
      },
      grenades: {
        Flashbang: '閃光弹',
        FragGrenade: 'フラググレネード',
        HealingGrenade: '回復グレネード',
        Interceptor: 'インターセプター',
        SlowGrenade: '减速ボム',
        SmokeBomb: '煙幕弾',
        Alarm: '警報器',
        WindstormGrenade: '風雷ボム',
        SnowBall: '雪玉'
      },
      markbox: {
        mark: 'マーク',
        straightline: '直線',
        arrowline: 'Arrow Line',
        color: 'カラー',
        undo: '戻す',
        clear: '消去',
        clearwarning: {
          title: '全てのマークを消去しますか?',
          content: 'この操作は元に戻せません',
          ok: '確認',
          cancel: 'キャンセル',
          success: '全てのマークを消去しました',
          failure: 'マークの削除に失敗しました'
        }
      }
    }
    // TODO: 繁体中文 (TW)
  ]

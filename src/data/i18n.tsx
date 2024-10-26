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

interface FriendLinkForm {
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

interface SiteListForm {
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

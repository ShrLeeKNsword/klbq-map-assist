import { Characters, factions } from "./characters";
import { MapName } from "./maplist";

interface Sidebar {
  mapsetting: string;
  character: string;
  skill: string;
  grenade: string;
  lineup: string;
  skilllineup: string;
  mobaisuperjump: string;
  bugpoint: string;
  bugpointwarning: JSX.Element;
}

interface MapSetting {
  choosemap: string;
  maps: {
    [key in MapName]: string;
  };
  TeamHighlight: string;
  TeamHighlightOptions: {
    prepare: string;
    blank: string;
  };
  Landmarks: string;
  LandmarkOptions: {
    enable: string;
    disable: string;
  };
}

interface LineupSetting {
  spotmark: string;
  spotmarks: {
    disable: string;
    available: string;
    all: string;
  };
}
interface Skilllineupsetting {
  spotmark: string;
  spotmarks: Record<string, string>;
}

interface MobaiSuperJumpSetting {
  spotmark: string;
  spotmarks: {
    disable: string;
    available: string;
    all: string;
  };
}

interface BugPointSetting {
  spotmark: string;
  spotmarks: {
    disable: string;
    available: string;
    all: string;
  };
}

interface Grenades {
  Flashbang: string;
  FragGrenade: string;
  HealingGrenade: string;
  Interceptor: string;
  SlowGrenade: string;
  SmokeBomb: string;
  Alarm: string;
  WindstormGrenade: string;
  SnowBall: string;
}

interface MarkBox {
  mark: string;
  straightline: string;
  color: string;
  undo: string;
  clear: string;
  clearwarning: {
    title: string;
    content: string;
    ok: string;
    cancel: string;
    success: string;
    failure: string;
  };
}

interface I18nData {
  language: string;
  title: string;
  sidebar: Sidebar;
  mapsetting: MapSetting;
  lineupsetting: LineupSetting;
  skilllineupsetting: Skilllineupsetting;
  mobaisuperjumpsetting: MobaiSuperJumpSetting;
  bugpointsetting: BugPointSetting;
  factions: {
    [key in factions]: string;
  };
  characters: Characters;
  grenades: Grenades;
  markbox: MarkBox;
}

export const i18nData: I18nData[] = [
  {
    language: "简体中文",
    title: "卡拉彼丘地图助手",
    sidebar: {
      mapsetting: "地图设置",
      character: "超弦体",
      skill: "技能",
      grenade: "战术道具",
      lineup: "战术道具点位",
      skilllineup: "技能点位",
      mobaisuperjump: "白墨超级跳点位",
      bugpoint: "Bug点位",
      bugpointwarning: (
        <div style={{ fontSize: "12px", textAlign: "left" }}>
          <div>这里列出的Bug点位仅用于警示作用，请勿在游戏中利于Bug！</div>
          <div>在游戏中利用Bug导致被封禁等不良后果本站概不负责！</div>
        </div>
      ),
    },
    mapsetting: {
      choosemap: "选择地图",
      maps: {
        WindyTown: "风曳镇",
        SpaceLab: "空间实验室",
        Khesmet: "科斯迷特",
        EulerPort: "欧拉港口",
        CauchyDistrict: "柯西街区",
        Area88: "88区",
        Base404: "404基地",
      },
      TeamHighlight: "地图类型",
      TeamHighlightOptions: {
        prepare: "准备阶段",
        blank: "空白",
      },
      Landmarks: "点位标记",
      LandmarkOptions: {
        enable: "启用",
        disable: "禁用",
      },
    },
    lineupsetting: {
      spotmark: "点位标记",
      spotmarks: {
        disable: "禁用",
        available: "仅有效",
        all: "全部",
      },
    },
    skilllineupsetting: {
      spotmark: "点位标记",
      spotmarks: {
        disable: "禁用",
        available: "仅有效",
        all: "全部",
      },
    },
    mobaisuperjumpsetting: {
      spotmark: "点位标记",
      spotmarks: {
        disable: "禁用",
        available: "仅有效",
        all: "全部",
      },
    },
    bugpointsetting: {
      spotmark: "点位标记",
      spotmarks: {
        disable: "禁用",
        available: "仅有效",
        all: "全部",
      },
    },
    factions: {
      PUS: "欧泊",
      TheScissors: "剪刀手",
      Urbino: "乌尔比诺",
    },
    characters: {
      PUS: {
        Michele: "米雪儿·李",
        Nobunaga: "信",
        Kokona: "心夏",
        Yvette: "伊薇特",
        Flavia: "芙拉薇娅",
      },
      TheScissors: {
        Ming: "明",
        Lawine: "拉薇",
        Meredith: "梅瑞狄斯",
        Reiichi: "令",
        Kanami: "香奈美",
        Eika: "艾卡",
        Fragrans: "珐格兰丝",
      },
      Urbino: {
        Celestia: "星绘",
        Audrey: "奥黛丽",
        Maddelena: "白墨",
        Fuchsia: "玛德蕾娜",
        BaiMo: "绯莎",
        Galatea: "加拉蒂亚",
      },
    },
    grenades: {
      Flashbang: "闪光弹",
      FragGrenade: "手雷",
      HealingGrenade: "治疗雷",
      Interceptor: "拦截者",
      SlowGrenade: "减速雷",
      SmokeBomb: "烟雾弹",
      Alarm: "警报器",
      WindstormGrenade: "风场雷",
      SnowBall: "雪球",
    },
    markbox: {
      mark: "画笔",
      straightline: "直线",
      color: "颜色",
      undo: "撤销",
      clear: "清空",
      clearwarning: {
        title: "确认清除所有笔迹？",
        content: "此操作不可撤销",
        ok: "确认",
        cancel: "取消",
        success: "已清除所有笔迹",
        failure: "清除笔迹失败",
      },
    },
  },
  {
    language: "English",
    title: "Strinova Map Assistant",
    sidebar: {
      mapsetting: "Map Setting",
      character: "Character",
      skill: "Skills",
      grenade: "Grenades",
      lineup: "Grenade Lineups",
      skilllineup: "Skill Lineups",
      mobaisuperjump: "Baimo Super Jumps",
      bugpoint: "Bugs",
      bugpointwarning: (
        <div style={{ fontSize: "12px", textAlign: "left" }}>
          <div>Bugs listed here are for your information only!</div>
          <div>We are not responsible for any bans for abusing any of these bugs.</div>
        </div>
      ),
    },
    mapsetting: {
      choosemap: "Map",
      maps: {
        WindyTown: "Windy Town",
        SpaceLab: "Space Lab",
        Khesmet: "Khesmet",
        CauchyDistrict: "Cauchy District",
        EulerPort: "Port Euler",
        Area88: "Area 88",
        Base404: "Base 404",
      },
      TeamHighlight: "Team Highlight",
      TeamHighlightOptions: {
        prepare: "Show",
        blank: "Hide",
      },
      Landmarks: "Landmarks",
      LandmarkOptions: {
        enable: "Show",
        disable: "Hide",
      },
    },
    lineupsetting: {
      spotmark: "Spot Mark",
      spotmarks: {
        disable: "Disable",
        available: "Available Only",
        all: "All",
      },
    },
    skilllineupsetting: {
      spotmark: "Spot Mark",
      spotmarks: {
        disable: "Disable",
        available: "Available Only",
        all: "All",
      },
    },
    mobaisuperjumpsetting: {
      spotmark: "Spot Mark",
      spotmarks: {
        disable: "Disable",
        available: "Available Only",
        all: "All",
      },
    },
    bugpointsetting: {
      spotmark: "Spot Mark",
      spotmarks: {
        disable: "Disable",
        available: "Available Only",
        all: "All",
      },
    },
    factions: {
      PUS: "PUS",
      TheScissors: "The Scissors",
      Urbino: "Urbino",
    },
    characters: {
      PUS: {
        Michele: "Michele Li",
        Nobunaga: "Nobunaga",
        Kokona: "Kokona",
        Yvette: "Yvette",
        Flavia: "Flavia",
      },
      TheScissors: {
        Ming: "Ming",
        Lawine: "Lawine",
        Meredith: "Meredith",
        Reiichi: "Reiichi",
        Kanami: "Kanami",
        Eika: "Eika",
        Fragrans: "Fragrans",
      },
      Urbino: {
        Celestia: "Celestia",
        Audrey: "Audrey",
        Maddelena: "Maddelena",
        Fuchsia: "Fuchsia",
        BaiMo: "Bai Mo",
        Galatea: "Galatea",
      },
    },
    grenades: {
      Flashbang: "Flashbang",
      FragGrenade: "Frag Grenade",
      HealingGrenade: "Healing Grenade",
      Interceptor: "Interceptor",
      SlowGrenade: "Slow Grenade",
      SmokeBomb: "Smoke Bomb",
      Alarm: "Alarm",
      WindstormGrenade: "Windstorm Grenade",
      SnowBall: "Snow Ball",
    },
    markbox: {
      mark: "Mark",
      straightline: "Straight Line",
      color: "Color",
      undo: "Undo",
      clear: "Clear",
      clearwarning: {
        title: "Confirm to clear all marks?",
        content: "This action cannot be undone",
        ok: "Confirm",
        cancel: "Cancel",
        success: "Cleared all markings",
        failure: "Failed to clear markings",
      },
    },
  },
  // TODO: 日本語 (JP)
  // TODO: 繁体中文 (TW)
];
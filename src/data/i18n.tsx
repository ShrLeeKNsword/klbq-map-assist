interface Sidebar {
  mapsetting: string;
  charactor: string;
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
  maps: Record<string, string>;
  maptype: string;
  maptypes: Record<string, string>;
  spotmark: string;
  spotmarks: Record<string, string>;
}

interface LineupSetting {
  spotmark: string;
  spotmarks: Record<string, string>;
}

interface MobaiSuperJumpSetting {
  spotmark: string;
  spotmarks: Record<string, string>;
}

interface BugPointSetting {
  spotmark: string;
  spotmarks: Record<string, string>;
}

interface Charactors {
  PUS: Record<string, string>;
  TS: Record<string, string>;
  Urbino: Record<string, string>;
}

interface Grenades {
  Flashbang: string;
  FragGrenade: string;
  HealingGrenade: string;
  Interceptor: string;
  SlowGrenade: string;
  SmokeBomb: string;
  Tattletale: string;
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
  };
}

interface I18nData {
  language: string;
  title: string;
  sidebar: Sidebar;
  mapsetting: MapSetting;
  lineupsetting: LineupSetting;
  mobaisuperjumpsetting: MobaiSuperJumpSetting;
  bugpointsetting: BugPointSetting;
  charactors: Charactors;
  grenades: Grenades;
  markbox: MarkBox;
}

export const i18nData: I18nData[] = [
  {
    language: "简体中文",
    title: "卡拉彼丘地图助手",
    sidebar: {
      mapsetting: "地图设置",
      charactor: "超弦体",
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
        风曳镇: "风曳镇",
        空间实验室: "空间实验室",
        科斯迷特: "科斯迷特",
        欧拉港口: "欧拉港口",
        柯西街区: "柯西街区",
        "88区": "88区",
        "404基地": "404基地",
      },
      maptype: "地图类型",
      maptypes: {
        prepare: "准备阶段",
        blank: "空白",
      },
      spotmark: "点位标记",
      spotmarks: {
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
    charactors: {
      PUS: {
        Michele: "米雪儿·李",
        Nobunaga: "信",
        Kokona: "心夏",
        Yvette: "伊薇特",
        Flavia: "芙拉薇娅",
      },
      TS: {
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
      Tattletale: "警报器",
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
      },
    },
  },
  {
    language: "English",
    title: "KLBQ Map Assistant",
    sidebar: {
      mapsetting: "Map Setting",
      charactor: "Character",
      skill: "Skill",
      grenade: "Grenade",
      lineup: "Grenade Lineup",
      skilllineup: "Skill Lineup",
      mobaisuperjump: "Mobai Super Jump",
      bugpoint: "Bug Point",
      bugpointwarning: (
        <div style={{ fontSize: "12px", textAlign: "left" }}>
          <div>The bug points listed here are for warning purposes only. Do not exploit bugs in the game!</div>
          <div>We are not responsible for any adverse consequences such as bans resulting from exploiting bugs in the game!</div>
        </div>
      ),
    },
    mapsetting: {
      choosemap: "Choose Map",
      maps: {
        FengYeTown: "Feng Ye Town",
        SpaceLab: "Space Lab",
        Cosmite: "Cosmite",
        EulerPort: "Euler Port",
        CauchyDistrict: "Cauchy District",
        Area88: "Area 88",
        Base404: "Base 404",
      },
      maptype: "Map Type",
      maptypes: {
        prepare: "Preparation Stage",
        blank: "Blank",
      },
      spotmark: "Spot Mark",
      spotmarks: {
        enable: "Enable",
        disable: "Disable",
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
    charactors: {
      PUS: {
        Michele: "Michele Li",
        Nobunaga: "Nobunaga",
        Kokona: "Kokona",
        Yvette: "Yvette",
        Flavia: "Flavia",
      },
      TS: {
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
      Tattletale: "Tattletale",
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
      },
    },
  },
  // TODO: 日本語 (JP)
  // TODO: 繁体中文 (TW)
];
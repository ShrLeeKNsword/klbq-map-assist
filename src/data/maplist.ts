// The value of each key represents the corresponding key in the language file
export enum MapName {
  WindyTown = "WindyTown",
  SpaceLab = "SpaceLab",
  Khesmet = "Khesmet",
  EulerPort = "EulerPort",
  CauchyDistrict = "CauchyDistrict",
  Area88 = "Area88",
  Base404 = "Base404"
}

interface MapList {
  map: MapName;
  imgPrepareLink: string;
  imgBlankLink: string;
}

export const mapList: MapList[] = [
  {
    map: MapName.WindyTown,
    imgPrepareLink: "https://s2.loli.net/2024/09/24/Shk6rXTwvAlDGMC.png",
    imgBlankLink: "https://s2.loli.net/2024/09/24/85uxWct3DeRByTO.png"
  }, {
    map: MapName.SpaceLab,
    imgPrepareLink: "https://s2.loli.net/2024/09/24/QI6hnMtsJpSCKgE.png",
    imgBlankLink: "https://s2.loli.net/2024/09/24/KxUYEBqdlyZ92rC.png"
  }, {
    map: MapName.Khesmet,
    imgPrepareLink: "https://s2.loli.net/2024/09/24/QnNZHhT4wDbFxIO.png",
    imgBlankLink: "https://s2.loli.net/2024/09/24/jroCB9iqR1l5LDp.png"
  }, {
    map: MapName.EulerPort,
    imgPrepareLink: "https://s2.loli.net/2024/09/24/Md2Pa1HKtJyk7oO.png",
    imgBlankLink: "https://s2.loli.net/2024/09/24/NGWk2HXwSvmdgOY.png"
  }, {
    map: MapName.CauchyDistrict,
    imgPrepareLink: "https://s2.loli.net/2024/09/24/Uw3ftVPQOLu5MCj.png",
    imgBlankLink: "https://s2.loli.net/2024/09/24/cLDQtdwAJyr2k7T.png"
  }, {
    map: MapName.Area88,
    imgPrepareLink: "https://s2.loli.net/2024/09/24/wouqxsUy1JaP8l6.png",
    imgBlankLink: "https://s2.loli.net/2024/09/24/YBUsSC78oOrx16W.png"
  }, {
    map: MapName.Base404,
    imgPrepareLink: "https://s2.loli.net/2024/09/24/XfMi4qcV5zmTy78.png",
    imgBlankLink: "https://s2.loli.net/2024/09/24/pjGMHJClRsXEoAf.png"
  }
];


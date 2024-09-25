import { useState } from 'react';
import { Layout, Collapse, Typography, Select, Tooltip, Popover, Col, Row, Popconfirm, ColorPicker, Banner, Toast } from '@douyinfe/semi-ui';
import { IconEdit, IconDelete, IconUndo, IconLanguage, IconMinus, IconGithubLogo, IconMaximize } from '@douyinfe/semi-icons';
import ColorBtn from './components/buttons/colorBtn.tsx';
import CharacterBtn from './components/buttons/characterBtn.tsx';
import SkillBtn from './components/buttons/skillBtn.tsx';
import GrenadeBtn from './components/buttons/grenadeBtn.tsx';

import './App.css';
import DrawableMap from './components/drawableMap.tsx';
import StandardButton from './components/buttons/standardButton.tsx';
import { i18nData } from './data/i18n.tsx';
import { mapList } from './data/maplist.ts';
import { canvasElement, colorPalette, mapTools } from './utils/canvasConstants.ts';
import ButtonNoPopover from './components/buttons/buttonNoPopover.tsx';

const styles = {
  commonStyles: {
    height: 64,
    lineHeight: '64px',
    background: 'var(--semi-color-fill-0)'
  },
  canvasToolButtonStyle: {
    borderRadius: "100%",
    margin: "5px",
    width: "50px",
    height: "50px",
    display: 'flex',
    placeItems: 'center',
    placeContent: 'center',
    backgroundColor: "rgba(var(--semi-grey-0), 1)",
    boxShadow: "0 0 0 3px rgba(var(--semi-grey-1), 1)",
    marginTop: "35px",
  }
}

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  const { Title } = Typography;

  const [presentLanguage, setPresentLanguage] = useState(i18nData[0]);
  const [closeallcollapse, setCloseAllCollapse] = useState(false);
  const [presentMap, setPresentMap] = useState(presentLanguage.mapsetting.maps.WindyTown);

  const [canvasTool, setTool] = useState<mapTools>(mapTools.SELECT);
  const [penColor, setpenColor] = useState("red");

  const [penWidth, setpenWidth] = useState(2);
  const [lineWidth, setLineWidth] = useState(2);

  const [canvasElements, setCanvasElements] = useState<canvasElement[]>([]);
  const [mapPrepareMode, setMapPrepareMode] = useState(true);
  const [mapMarkNameMode, setMarkNameMode] = useState(true);

  const [presentMapURL, setPresentMapURL] = useState({ imgPrepareLink: mapList[0].imgPrepareLink, imgBlankLink: mapList[0].imgBlankLink });
  const [togglevisible, setToggleVisible] = useState(false);

  const Sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  const changePresentmap = (value: string) => {
    setPresentMap(value);
    for (const mapinfo of mapList) {
      if (mapinfo.map === value) {
        setPresentMapURL({ imgPrepareLink: mapinfo.imgPrepareLink, imgBlankLink: mapinfo.imgBlankLink });
      }
    }
  }

  const changePresentlanguage = async (value: string) => {
    for (const languageinfo of i18nData) {
      if (languageinfo.language === value) {
        setPresentMap(languageinfo.mapsetting.maps.WindyTown);
        setPresentMapURL({ imgPrepareLink: mapList[0].imgPrepareLink, imgBlankLink: mapList[0].imgBlankLink });
        setMapPrepareMode(true);
        setMarkNameMode(true);
        setCloseAllCollapse(true);
        setPresentLanguage(languageinfo);
      }
    }
    await Sleep(100)
    setCloseAllCollapse(false);
  }

  const colorPlate = <div className="grid grid-flex">
    <Row gutter={[16, 24]} type="flex" justify="space-around" align="middle" style={{ marginLeft: "25px" }}>
      {colorPalette.map((color) => {
        return <Col span={4}>
          <div className="col-content" onClick={() => { setpenColor(color) }}><ColorBtn color={color} /></div>
        </Col>
      })}
      <Col span={4}>
        <ColorPicker alpha={true} onChange={(value) => { setpenColor(value.hex) }} usePopover={true}>
          <div className="col-content"><ColorBtn linercolor="70deg, red, blue" /></div>
        </ColorPicker>
      </Col>
    </Row>
  </div>;

  const CharactorModuel = <>
    <div style={{ display: 'flex', placeItems: 'center', width: "100%", position: "relative", left: "-5px" }}>
      <div><img src='https://s2.loli.net/2024/09/25/1El6anYx4qhPbo2.png' style={{ height: "40px" }}></img></div>
      <Title heading={6}>{presentLanguage.factions.PUS}</Title>
    </div>
    <Row gutter={[24, 8]} type="flex" align="middle">
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/6Of7oigcQ5weJHh.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/dx6MZJgzUf3Xlay.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/Kl9MLgtJFqYDkN2.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/N5VL236lvYXQ4O1.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/I9fm7ZsCRw5tuzV.png' /></Col>
    </Row>
    <div style={{ display: 'flex', placeItems: 'center', width: "100%", position: "relative", left: "-5px", marginTop: "5px" }}>
      <div><img src='https://s2.loli.net/2024/09/25/PY4HMU7fbQ32Dr1.png' style={{ height: "40px" }}></img></div>
      <Title heading={6}>{presentLanguage.factions.TheScissors}</Title>
    </div>
    <Row gutter={[24, 8]} type="flex" align="middle">
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/qhENkLvnlWdIQox.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/mo6Yds1UQn9eXhu.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/awVpAXErSo4Cs9K.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/CNGfkr2sHT86PLb.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/ynbCQZvjfaSTqDA.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/LsfhU12uXvDtm7S.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/tfKwYLHmIxeUg1u.png' /></Col>
    </Row>
    <div style={{ display: 'flex', placeItems: 'center', width: "100%", position: "relative", left: "-5px", marginTop: "5px" }}>
      <div><img src='https://s2.loli.net/2024/09/25/hyPUcLZdMNaeOjI.png' style={{ height: "40px" }}></img></div>
      <Title heading={6}>{presentLanguage.factions.Urbino}</Title>
    </div>
    <Row gutter={[24, 8]} type="flex" align="middle">
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/sZU6SJ3Vn4dfkap.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/o6DfG7n9KCtzvbE.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/IS4QHlqreY97OCE.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/VJUBm193pTqjxwb.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/bLOreh5Bxf6lEjT.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/GJOlL4BZKjzSmMx.png' /></Col>
    </Row>
  </>

  const SkillModuel = <>
    <div style={{ display: 'flex', placeItems: 'center', width: "100%", position: "relative", left: "-5px" }}>
      <div><img src='https://s2.loli.net/2024/09/25/1El6anYx4qhPbo2.png' style={{ height: "40px" }}></img></div>
      <Title heading={6}>{presentLanguage.factions.PUS}</Title>
    </div>
    <Row gutter={[24, 8]} type="flex" align="middle">
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/6Of7oigcQ5weJHh.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/8iCzWDaNQPSxqvw.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/ANhKZ6GDzOIjPtf.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/UGeEvYfXiSgD4zr.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/dx6MZJgzUf3Xlay.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/VJFzGhSyXmsiHpO.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/AHsc9o8W25UlpNa.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/Vr78sb9T32ADMuy.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/Kl9MLgtJFqYDkN2.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/9zFsMYumpwJZrTg.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/V8NijM5onGulX9m.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/tilQp18zRheBMaJ.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/N5VL236lvYXQ4O1.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/ESH6FNKQjbafMZn.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/2hqoyUWsnbA83BP.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/32VnSv59tPwTIhl.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/I9fm7ZsCRw5tuzV.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/58dg6OpPntlviqW.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/u5tV9xaNyjUL6EM.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/ezsVQS62bY5iBcG.png' /></Col>
    </Row>
    <div style={{ display: 'flex', placeItems: 'center', width: "100%", position: "relative", left: "-5px", marginTop: "5px" }}>
      <div><img src='https://s2.loli.net/2024/09/25/PY4HMU7fbQ32Dr1.png' style={{ height: "40px" }}></img></div>
      <Title heading={6}>{presentLanguage.factions.TheScissors}</Title>
    </div>
    <Row gutter={[24, 8]} type="flex" align="middle">
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/qhENkLvnlWdIQox.png' /></Col>
      <Col span={6}><SkillBtn top="4px" imglink='https://s2.loli.net/2024/09/25/NQ2TdSqhseRZY7b.png' /></Col>
      <Col span={6}><SkillBtn top="4px" imglink='https://s2.loli.net/2024/09/25/bsAzZemy4uEcaHt.png' /></Col>
      <Col span={6}><SkillBtn top="1px" imglink='https://s2.loli.net/2024/09/25/B6KC72wphAdt4Ri.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/mo6Yds1UQn9eXhu.png' /></Col>
      <Col span={6}><SkillBtn top="4px" imglink='https://s2.loli.net/2024/09/25/gOFlGIzPjxbpYKw.png' /></Col>
      <Col span={6}><SkillBtn top="4px" imglink='https://s2.loli.net/2024/09/25/8AxLszwVIg17WGq.png' /></Col>
      <Col span={6}><SkillBtn top="4px" imglink='https://s2.loli.net/2024/09/25/HuEnVYb8Mr5e24I.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/awVpAXErSo4Cs9K.png' /></Col>
      <Col span={6}><SkillBtn top="-4px" imglink='https://s2.loli.net/2024/09/25/KWYZTSQmjOHJ2RX.png' /></Col>
      <Col span={6}><SkillBtn top="-4px" imglink='https://s2.loli.net/2024/09/25/O8kRqCVEDoK6T3p.png' /></Col>
      <Col span={6}><SkillBtn top="-4px" imglink='https://s2.loli.net/2024/09/25/V8KZrx9sY7QBlaP.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/CNGfkr2sHT86PLb.png' /></Col>
      <Col span={6}><SkillBtn top="2px" imglink='https://s2.loli.net/2024/09/25/C6qts5xeVpS1N4E.png' /></Col>
      <Col span={6}><SkillBtn top="3px" imglink='https://s2.loli.net/2024/09/25/iuSvZDYnFTzmBrl.png' /></Col>
      <Col span={6}><SkillBtn top="3px" imglink='https://s2.loli.net/2024/09/25/bESOlDh9oURvFC3.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/ynbCQZvjfaSTqDA.png' /></Col>
      <Col span={6}><SkillBtn top="3px" imglink='https://s2.loli.net/2024/09/25/UBJqoYz835GvVxy.png' /></Col>
      <Col span={6}><SkillBtn top="3px" imglink='https://s2.loli.net/2024/09/25/OHbINYGSQhFazcd.png' /></Col>
      <Col span={6}><SkillBtn top="3px" imglink='https://s2.loli.net/2024/09/25/YH3Phg5XQumsbCM.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/LsfhU12uXvDtm7S.png' /></Col>
      <Col span={6}><SkillBtn top="3px" imglink='https://s2.loli.net/2024/09/25/SPYXJZwHGObnrmV.png' /></Col>
      <Col span={6}><SkillBtn top="3px" imglink='https://s2.loli.net/2024/09/25/JYfa5PdE6r4Kcio.png' /></Col>
      <Col span={6}><SkillBtn top="3px" imglink='https://s2.loli.net/2024/09/25/sFgyUNK7iWtcvfp.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/tfKwYLHmIxeUg1u.png' /></Col>
      <Col span={6}><SkillBtn top="-4px" imglink='https://s2.loli.net/2024/09/25/L9j3uWBrl5hNyzx.png' /></Col>
      <Col span={6}><SkillBtn top="-4px" imglink='https://s2.loli.net/2024/09/25/B3HDdTpLjAyYQ74.png' /></Col>
      <Col span={6}><SkillBtn top="-4px" imglink='https://s2.loli.net/2024/09/25/5Xk9PUOlwFsgE6B.png' /></Col>
    </Row>
    <div style={{ display: 'flex', placeItems: 'center', width: "100%", position: "relative", left: "-5px", marginTop: "5px" }}>
      <div><img src='https://s2.loli.net/2024/09/25/hyPUcLZdMNaeOjI.png' style={{ height: "40px" }}></img></div>
      <Title heading={6}>{presentLanguage.factions.Urbino}</Title>
    </div>
    <Row gutter={[24, 8]} type="flex" align="middle">
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/o6DfG7n9KCtzvbE.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/2r7wkizoLbpqMOZ.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/tazvXEJNs5HuyeD.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/tazvXEJNs5HuyeD.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/IS4QHlqreY97OCE.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/tkQ3jlHGeRTDPyn.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/5ZCmFuQhoP3zYnV.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/rOxFKuLX7e5QWhw.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/VJUBm193pTqjxwb.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/WmtSU2hFLBPaf85.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/O5dXCxh3R1wVINQ.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/bJalMyBfZ7iXVtx.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/bLOreh5Bxf6lEjT.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/eUzu75aSXVw2kQF.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/xvVheX57uGJMI2k.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/VkyGJKzHYr4pnlm.png' /></Col>
      <Col span={6}><CharacterBtn imglink='https://s2.loli.net/2024/09/25/GJOlL4BZKjzSmMx.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/UQVBxmGPD9q1tsr.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/VmDbBPl9ezv5ZgU.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://s2.loli.net/2024/09/25/xGpjiLgcUtTJbno.png' /></Col>
    </Row>
  </>

  const GrenadeModuel = <>
    <Row gutter={[24, 8]} type="flex" align="middle">
      <Col span={6}><GrenadeBtn imglink='https://s2.loli.net/2024/09/24/y6xfMWzvi5GrE8Z.png' /></Col>
      <Col span={6}><GrenadeBtn imglink='https://s2.loli.net/2024/09/24/siyl1V9OETwdntX.png' /></Col>
      <Col span={6}><GrenadeBtn imglink='https://s2.loli.net/2024/09/24/z8DXpG7icOdRhkj.png' /></Col>
      <Col span={6}><GrenadeBtn imglink='https://s2.loli.net/2024/09/24/M7NLCWwZaYU5lyb.png' /></Col>
      <Col span={6}><GrenadeBtn imglink='https://s2.loli.net/2024/09/24/iZpv7XY5j1DJGAL.png' /></Col>
      <Col span={6}><GrenadeBtn imglink='https://s2.loli.net/2024/09/24/rR5g1ukx7j6tPFK.png' /></Col>
      <Col span={6}><GrenadeBtn imglink='https://s2.loli.net/2024/09/24/MQYHj54khqVxetJ.png' /></Col>
      <Col span={6}><GrenadeBtn imglink='https://s2.loli.net/2024/09/24/nJzYDPiv8uWsdMx.png' /></Col>
      <Col span={6}><GrenadeBtn imglink='https://s2.loli.net/2024/09/24/2UAiJIGMwRKauXt.png' /></Col>
    </Row>
  </>

  return (
    <Layout className="components-layout-demo" style={{ height: 720, width: 1280, margin: "auto" }}>
      <Header style={styles.commonStyles}>
        <Title heading={3} style={{ margin: '14px 0' }} >{presentLanguage.title} - {presentMap} {mapPrepareMode ? "[" + presentLanguage.mapsetting.TeamHighlightOptions.prepare + "]" : "[" + presentLanguage.mapsetting.TeamHighlightOptions.blank + "]"} {mapMarkNameMode ? "[" + presentLanguage.mapsetting.Landmarks + "]" : ""}</Title>
        <div style={{ position: "relative", left: "1100px", top: "-60px", height: "100%", width: "200px", display: "flex" }}>
          <div style={{ marginTop: "8px", marginRight: "12px" }}><IconLanguage size='extra-large' /></div>
          <Select defaultValue="简体中文" style={{ width: 120, marginTop: "18px" }} onChange={value => changePresentlanguage(value as string)}>
            {i18nData.map((language) => {
              return <Select.Option key={language.language} value={language.language}>{language.language}</Select.Option>;
            })}
          </Select></div>
      </Header>
      <Layout>
        <Sider style={{ width: '340px', background: 'var(--semi-color-fill-2)' }}>
          <Collapse accordion activeKey={closeallcollapse ? [] : undefined} className='no-scroll-bar' style={{ overflowY: "scroll", height: "600px" }} motion={!closeallcollapse}>
            <Collapse.Panel header={presentLanguage.sidebar.mapsetting} itemKey="1">
              <div>
                <Row gutter={[16, 8]} type="flex" align="middle">
                  <Col span={9}>
                    {presentLanguage.mapsetting.choosemap}
                  </Col>
                  <Col span={7}>
                    <Select defaultValue={presentLanguage.mapsetting.maps.WindyTown} style={{ width: 120 }} onChange={value => changePresentmap(value as string)}>
                      {Object.keys(presentLanguage.mapsetting.maps).map((key) => (
                        <Select.Option value={key}>{presentLanguage.mapsetting.maps[key as keyof typeof presentLanguage.mapsetting.maps]}</Select.Option>
                      ))}
                    </Select>
                  </Col>
                  <Col span={9}>
                    {presentLanguage.mapsetting.TeamHighlight}
                  </Col>
                  <Col span={7}>
                    <Select defaultValue="准备阶段" style={{ width: 120 }} onChange={value => setMapPrepareMode(value as string === "准备阶段" ? true : false)}>
                      <Select.Option value="准备阶段">{presentLanguage.mapsetting.TeamHighlightOptions.prepare}</Select.Option>
                      <Select.Option value="空白">{presentLanguage.mapsetting.TeamHighlightOptions.blank}</Select.Option>
                    </Select>
                  </Col>
                  <Col span={9}>
                    {presentLanguage.mapsetting.Landmarks}
                  </Col>
                  <Col span={7}>
                    <Select defaultValue="启用" style={{ width: 120 }} onChange={value => setMarkNameMode(value as string === "启用" ? true : false)}>
                      <Select.Option value="启用">{presentLanguage.mapsetting.LandmarkOptions.enable}</Select.Option>
                      <Select.Option value="禁用">{presentLanguage.mapsetting.LandmarkOptions.disable}</Select.Option>
                    </Select>
                  </Col>
                </Row>
              </div>
            </Collapse.Panel>
            <Collapse.Panel header={presentLanguage.sidebar.character} itemKey="2" >
              {CharactorModuel}
            </Collapse.Panel>
            <Collapse.Panel header={presentLanguage.sidebar.skill} itemKey="3">
              {SkillModuel}
            </Collapse.Panel>
            <Collapse.Panel header={presentLanguage.sidebar.grenade} itemKey="4">
              {GrenadeModuel}
            </Collapse.Panel>
            <Collapse.Panel header={presentLanguage.sidebar.lineup} itemKey="5">
              <Row gutter={[16, 8]} type="flex" align="middle">
                <Col span={9}>
                  {presentLanguage.lineupsetting.spotmark}
                </Col>
                <Col span={7}>
                  <Select defaultValue="禁用" style={{ width: 120 }} onChange={() => { }}>
                    <Select.Option value="禁用">{presentLanguage.lineupsetting.spotmarks.disable}</Select.Option>
                    <Select.Option value="仅有效">{presentLanguage.lineupsetting.spotmarks.available}</Select.Option>
                    <Select.Option value="全部">{presentLanguage.lineupsetting.spotmarks.all}</Select.Option>
                  </Select>
                </Col>
              </Row>
              <Row gutter={[24, 8]} type="flex" align="middle" style={{ marginTop: "5px" }}>
                <Col span={6}><GrenadeBtn badge="×" imglink='https://s2.loli.net/2024/09/24/y6xfMWzvi5GrE8Z.png' /></Col>
                <Col span={6}><GrenadeBtn badge="√" imglink='https://s2.loli.net/2024/09/24/siyl1V9OETwdntX.png' /></Col>
                <Col span={6}><GrenadeBtn badge="×" imglink='https://s2.loli.net/2024/09/24/z8DXpG7icOdRhkj.png' /></Col>
                <Col span={6}><GrenadeBtn badge="√" imglink='https://s2.loli.net/2024/09/24/M7NLCWwZaYU5lyb.png' /></Col>
                <Col span={6}><GrenadeBtn badge="×" imglink='https://s2.loli.net/2024/09/24/iZpv7XY5j1DJGAL.png' /></Col>
                <Col span={6}><GrenadeBtn badge="√" imglink='https://s2.loli.net/2024/09/24/rR5g1ukx7j6tPFK.png' /></Col>
                <Col span={6}><GrenadeBtn badge="×" imglink='https://s2.loli.net/2024/09/24/MQYHj54khqVxetJ.png' /></Col>
                <Col span={6}><GrenadeBtn badge="√" imglink='https://s2.loli.net/2024/09/24/nJzYDPiv8uWsdMx.png' /></Col>
                <Col span={6}><GrenadeBtn badge="×" imglink='https://s2.loli.net/2024/09/24/2UAiJIGMwRKauXt.png' /></Col>
              </Row>
            </Collapse.Panel>
            <Collapse.Panel header={presentLanguage.sidebar.skilllineup} itemKey="6">
              <Row gutter={[16, 8]} type="flex" align="middle">
                <Col span={9}>
                  {presentLanguage.mobaisuperjumpsetting.spotmark}
                </Col>
                <Col span={7}>
                  <Select defaultValue="禁用" style={{ width: 120 }} onChange={() => { }}>
                    <Select.Option value="禁用">{presentLanguage.mobaisuperjumpsetting.spotmarks.disable}</Select.Option>
                    <Select.Option value="仅有效">{presentLanguage.mobaisuperjumpsetting.spotmarks.available}</Select.Option>
                    <Select.Option value="全部">{presentLanguage.mobaisuperjumpsetting.spotmarks.all}</Select.Option>
                  </Select>
                </Col>
              </Row>
            </Collapse.Panel>
            <Collapse.Panel header={presentLanguage.sidebar.mobaisuperjump} itemKey="7">
              <Row gutter={[16, 8]} type="flex" align="middle">
                <Col span={9}>
                  {presentLanguage.mobaisuperjumpsetting.spotmark}
                </Col>
                <Col span={7}>
                  <Select defaultValue="禁用" style={{ width: 120 }} onChange={() => { }}>
                    <Select.Option value="禁用">{presentLanguage.mobaisuperjumpsetting.spotmarks.disable}</Select.Option>
                    <Select.Option value="仅有效">{presentLanguage.mobaisuperjumpsetting.spotmarks.available}</Select.Option>
                    <Select.Option value="全部">{presentLanguage.mobaisuperjumpsetting.spotmarks.all}</Select.Option>
                  </Select>
                </Col>
              </Row>
            </Collapse.Panel>
            <Collapse.Panel header={presentLanguage.sidebar.bugpoint} itemKey="8">
              <Banner
                fullMode
                closeIcon={null}
                type="danger"
                description={presentLanguage.sidebar.bugpointwarning}
              />
              <Row gutter={[16, 8]} type="flex" align="middle" style={{ marginTop: "5px" }}>
                <Col span={9}>
                  {presentLanguage.bugpointsetting.spotmark}
                </Col>
                <Col span={7}>
                  <Select defaultValue="禁用" style={{ width: 120 }} onChange={() => { }}>
                    <Select.Option value="禁用">{presentLanguage.bugpointsetting.spotmarks.disable}</Select.Option>
                    <Select.Option value="仅有效">{presentLanguage.bugpointsetting.spotmarks.available}</Select.Option>
                    <Select.Option value="全部">{presentLanguage.bugpointsetting.spotmarks.all}</Select.Option>
                  </Select>
                </Col>
              </Row>
            </Collapse.Panel>
          </Collapse>
        </Sider>
        <Content style={{ height: "100%", lineHeight: '100px', width: '100%', margin: 'auto', display: 'flex', placeItems: 'center' }}>
          <DrawableMap presentMapURL={mapPrepareMode ? presentMapURL.imgPrepareLink : presentMapURL.imgBlankLink} canvasTool={canvasTool} penColor={penColor} canvasElements={canvasElements} setCanvasElements={setCanvasElements} penWidth={penWidth} lineWidth={lineWidth} />
          <div style={{ position: "relative", top: "-20px", right: "40px", width: "58px", height: "max" }}>
            <ButtonNoPopover icon={IconMaximize} onClick={() => setTool(mapTools.SELECT)} isActiveTool={canvasTool === mapTools.SELECT} />
            <Popover
              content={colorPlate}
              position={"left"}
            >
              <div style={styles.canvasToolButtonStyle}><ColorBtn color={penColor} /></div>
            </Popover>
            <StandardButton icon={IconEdit} penWidth={penWidth} penColor={penColor} setpenWidth={setpenWidth} onClick={() => setTool(mapTools.PEN)} isActiveTool={canvasTool === mapTools.PEN} />
            <StandardButton icon={IconMinus} penWidth={lineWidth} penColor={penColor} setpenWidth={setLineWidth} onClick={() => setTool(mapTools.LINE)} isActiveTool={canvasTool === mapTools.LINE} />
            <Tooltip content={presentLanguage.markbox.undo}>
              <ButtonNoPopover icon={IconUndo} onClick={() => setCanvasElements(canvasElements.slice(0, -1))} isActiveTool={false} />
            </Tooltip>
            <Popconfirm
              visible={togglevisible}
              title={presentLanguage.markbox.clearwarning.title}
              content={presentLanguage.markbox.clearwarning.content}
              okText={presentLanguage.markbox.clearwarning.ok}
              cancelText={presentLanguage.markbox.clearwarning.cancel}
              onConfirm={() => { setCanvasElements([]); setToggleVisible(!togglevisible); Toast.success(presentLanguage.markbox.clearwarning.success) }}
              onCancel={() => { setToggleVisible(!togglevisible) }}
              position='left'
            >
              <Tooltip content={presentLanguage.markbox.clear}>
                <div onClick={() => setToggleVisible(!togglevisible)} style={styles.canvasToolButtonStyle}><IconDelete size='extra-large' /></div>
              </Tooltip>
            </Popconfirm>
          </div>
        </Content>
      </Layout>
      <Footer style={styles.commonStyles}><div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "120px" }}><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="nofollow"><img decoding="async" loading="lazy" src="https://s2.loli.net/2024/09/16/TPdoKCrgVb4i37J.png" width="107" height="38" style={{ marginRight: "20px", marginTop: "12px" }} /></a><div style={{ marginBottom: "12px" }}>© 番石榴网络科技工作室 & <IconGithubLogo style={{ margin: "6px" }} /><a href='https://github.com/ShrLeeKNsword/klbq-map-assist' target="_blank">Github Contributors</a> & <a href='https://wiki.biligame.com/klbq/%E9%A6%96%E9%A1%B5' target='_blank'>卡拉彼丘Wiki</a></div></div></Footer>
    </Layout >
  )
}

export default App

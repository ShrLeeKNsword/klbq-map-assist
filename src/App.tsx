import { useState } from 'react';
import { Layout, Collapse, Typography, Select, Tooltip, Popover, Col, Row, Popconfirm, ColorPicker, Banner, Toast } from '@douyinfe/semi-ui';
import ColorBtn from './components/buttons/colorBtn.tsx';
import CharacterBtn from './components/buttons/characterBtn.tsx';
import SkillBtn from './components/buttons/skillBtn.tsx';
import GrenadeBtn from './components/buttons/grenadeBtn.tsx';

import './App.css';
import DrawableMap from './components/drawableMap.tsx';
import StandardButton from './components/buttons/standardButton.tsx';
import ContributeBox from './components/contributors.tsx';
import { I18nData, i18nData } from './data/i18n.tsx';
import { mapList } from './data/maplist.ts';
import { characterData, factionData, factions } from './data/characters.ts';
import { canvasElement, colorPalette, mapTools } from './utils/canvasConstants.ts';
import ButtonNoPopover from './components/buttons/buttonNoPopover.tsx';
import { grenadeData } from './data/grenades.ts';

import { MdCreate, MdDelete, MdOutlineTranslate, MdUndo } from 'react-icons/md';
import { GiArrowCursor } from 'react-icons/gi';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import { PiLineSegmentFill } from 'react-icons/pi';

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

  const [presentLanguage, setPresentLanguage] = useState<I18nData>(i18nData[1]);
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

  const CharacterModule = Object.keys(factions).map((faction) => {
    return <><div style={{ display: 'flex', placeItems: 'center', width: "100%", position: "relative", left: "-8px" }}>
      <div><img src={factionData[faction as factions]} style={{ height: "40px" }}></img></div>
      <Title heading={6}>{presentLanguage.factions[faction as factions]}</Title>
    </div><Row gutter={[24, 8]} type='flex' align='middle'>
        {Object.keys(characterData).map((character) => {
          const char = characterData[character as keyof typeof characterData];
          if (char.faction === faction) {
            return <Col span={6}><CharacterBtn imglink={char.imageLink} /></Col>
          }
        })}
      </Row>
    </>
  })

  const SkillModule = Object.keys(factions).map((faction) => {
    return <><div style={{ display: 'flex', placeItems: 'center', width: "100%", position: "relative", left: "-8px", marginTop: "5px" }}>
      <div>
        <img src={factionData[faction as factions]} style={{ height: "40px" }} />
      </div>
      <Title heading={6}>{presentLanguage.factions[faction as factions]}</Title>
    </div>
      <Row gutter={[24, 8]} type="flex" align="middle">
        {Object.keys(characterData).map((character) => {
          const char = characterData[character as keyof typeof characterData];
          if (char.faction === faction) {
            return <><Col span={6}><CharacterBtn imglink={char.imageLink} /></Col>
              <Col span={6}><SkillBtn imglink={char.skills.Active} /></Col>
              <Col span={6}><SkillBtn imglink={char.skills.Passive} /></Col>
              <Col span={6}><SkillBtn imglink={char.skills.Ultimate} /></Col></>
          }
        })}
      </Row>
    </>
  })

  const GrenadeButtons = grenadeData.map(grenade => {
    return <Col span={6}><GrenadeBtn imglink={grenade.imageLink} /></Col>
  });

  return (
    <Layout className="components-layout-demo" style={{ height: 720, width: 1280, margin: "auto" }}>
      <Header style={styles.commonStyles}>
        <Title heading={3} style={{ margin: '14px 0' }} >{presentLanguage.title} - {presentMap} <span>{mapMarkNameMode ? <MdCreate size='1.5rem' /> : <></>}</span></Title>
        <div style={{ position: "relative", left: "1100px", top: "-60px", height: "100%", width: "200px", display: "flex" }}>
          <div style={{ marginTop: "8px", marginRight: "12px" }}><MdOutlineTranslate size='1.5rem' /></div>
          <Select defaultValue={presentLanguage.language} style={{ width: 120, marginTop: "18px" }} onChange={value => changePresentlanguage(value as string)}>
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
                    <Select defaultValue={presentLanguage.mapsetting.maps.WindyTown} style={{ width: 140 }} onChange={value => changePresentmap(value as string)}>
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
              {CharacterModule}
            </Collapse.Panel>
            <Collapse.Panel header={presentLanguage.sidebar.skill} itemKey="3">
              {SkillModule}
            </Collapse.Panel>
            <Collapse.Panel header={presentLanguage.sidebar.grenade} itemKey="4">
              <Row gutter={[24, 8]} type="flex" align="middle">
                {GrenadeButtons}
              </Row>
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
            <ButtonNoPopover icon={GiArrowCursor} onClick={() => setTool(mapTools.SELECT)} isActiveTool={canvasTool === mapTools.SELECT} />
            <Popover
              content={colorPlate}
              position={"left"}
            >
              <div style={styles.canvasToolButtonStyle}><ColorBtn color={penColor} /></div>
            </Popover>
            <StandardButton icon={MdCreate} penWidth={penWidth} penColor={penColor} setpenWidth={setpenWidth} onClick={() => setTool(mapTools.PEN)} isActiveTool={canvasTool === mapTools.PEN} />
            <StandardButton icon={PiLineSegmentFill} penWidth={lineWidth} penColor={penColor} setpenWidth={setLineWidth} onClick={() => setTool(mapTools.LINE)} isActiveTool={canvasTool === mapTools.LINE} />
            <Tooltip content={presentLanguage.markbox.undo}>
              <ButtonNoPopover icon={MdUndo} onClick={() => setCanvasElements(canvasElements.slice(0, -1))} isActiveTool={false} />
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
                <div onClick={() => setToggleVisible(!togglevisible)} style={styles.canvasToolButtonStyle}><MdDelete size='2rem' /></div>
              </Tooltip>
            </Popconfirm>
          </div>
        </Content>
      </Layout>
      <Footer className='undragable' style={styles.commonStyles}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "120px" }}>
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="nofollow">
            <img decoding="async" loading="lazy" src="https://s2.loli.net/2024/09/16/TPdoKCrgVb4i37J.png" width="107" height="38" style={{ marginRight: "20px", marginTop: "12px" }} />
          </a>
          <div style={{ marginBottom: "12px" }}>
            {"© 番石榴网络科技工作室 & "}
            <Popover
              content={<ContributeBox learnmore={presentLanguage.sidebar.learnmore} />}
              position={"top"}
            >
              <a>Contributors</a>
            </Popover>
            {" & "}<a href='https://wiki.biligame.com/klbq/%E9%A6%96%E9%A1%B5' target='_blank'>卡拉彼丘Wiki</a>{" | "}
          </div>
          <div style={{ height: "max", display: "flex", alignItems: "center", marginLeft: "10px", marginTop: "-7px" }}>
            <a href='https://github.com/ShrLeeKNsword/klbq-map-assist' target="_blank" style={{}}>
              <FaGithub />
            </a>
            <a href='https://discord.com/invite/C6AYFvgR' target="_blank" style={{ marginLeft: "5px" }}>
              <FaDiscord />
            </a>
          </div>
        </div>
      </Footer>
    </Layout >
  )
}

export default App

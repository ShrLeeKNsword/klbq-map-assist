import { useState } from 'react';
import { Layout, Collapse, Typography, Select, Tooltip, Popover, Col, Row, Popconfirm } from '@douyinfe/semi-ui';
import { IconEdit, IconDelete, IconUndo, IconLanguage } from '@douyinfe/semi-icons';
import ColorBtn from './components/colorBtb.tsx';

import './App.css';

function App() {
  const i18nData = [
    {
      language: "简体中文",
      title: "卡拉彼丘地图助手",
      sidebar: {
        mapsetting: "地图设置",
        charactor: "超弦体",
        skill: "技能",
        grenade: "战术道具",
        lineup: "lineup点位"
      },
      charactors: {
        PUS: {
          Michele: "米雪儿·李",
          Nobunaga: "信",
          Kokona: "心夏",
          Yvette: "伊薇特",
          Flavia: "芙拉薇娅"
        },
        TS: {
          Ming: "明",
          Lawine: "拉薇",
          Meredith: "梅瑞狄斯",
          Reiichi: "令",
          Kanami: "香奈美",
          Eika: "艾卡",
          Fragrans: "珐格兰丝"
        },
        Urbino: {
          Celestia: "星绘",
          Audrey: "奥黛丽",
          Maddelena: "白墨",
          Fuchsia: "玛德蕾娜",
          BaiMo: "绯莎",
          Galatea: "加拉蒂亚"
        }
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
        SnowBall: "雪球"
      },
      markbox: {
        mark: "画笔",
        undo: "撤销",
        clear: "清空",
        clearwarning: {
          title:"确认清除所有笔迹？",
          content: "此操作不可撤销"
        }
      }
    }
  ];
  const { Header, Footer, Sider, Content } = Layout;
  const commonStyle = {
    height: 64,
    lineHeight: '64px',
    background: 'var(--semi-color-fill-0)'
  };
  const { Title } = Typography;
  const [presentMap, setPresentMap] = useState("风曳镇");
  const [presentLanguage, setPresentLanguage] = useState(i18nData[0]);
  const [penColor, setpenColor] = useState("red");
  const [presentMapURL, setPresentMapURL] = useState("https://patchwiki.biligame.com/images/klbq/c/c2/5dzy2fxrj3ihqq2n9gfmpe2g91ofc0p.png");
  const mapList = [
    {
      mapName: "风曳镇",
      imgLink: "https://patchwiki.biligame.com/images/klbq/c/c2/5dzy2fxrj3ihqq2n9gfmpe2g91ofc0p.png"
    }, {
      mapName: "空间实验室",
      imgLink: "https://patchwiki.biligame.com/images/klbq/thumb/6/66/jth3bp2k8eopctdj42xo52fewsxci1s.png/800px-%E5%9C%B0%E5%9B%BE-%E7%A9%BA%E9%97%B4%E5%AE%9E%E9%AA%8C%E5%AE%A42.png"
    }, {
      mapName: "科斯迷特",
      imgLink: "https://patchwiki.biligame.com/images/klbq/thumb/c/c4/6pqvpjg5zvg14xtsydzeb95ok2ysq17.png/600px-%E5%9C%B0%E5%9B%BE-%E7%A7%91%E6%96%AF%E8%BF%B7%E7%89%B92.png"
    }, {
      mapName: "欧拉港口",
      imgLink: "https://patchwiki.biligame.com/images/klbq/thumb/2/29/cjlkwy6ikzo7pehy7xf7h5edfn8b5xt.png/600px-%E5%9C%B0%E5%9B%BE-oula-0.png"
    }, {
      mapName: "柯西街区",
      imgLink: "https://patchwiki.biligame.com/images/klbq/f/f6/jxevkldn7u4bx678t7hwqdcvxw7ta9m.png"
    }, {
      mapName: "88区",
      imgLink: "https://patchwiki.biligame.com/images/klbq/thumb/3/35/a1wr3rbkbabvf5ijojx4ow0nikeonhl.png/800px-%E5%9C%B0%E5%9B%BE-88area-0.png"
    }, {
      mapName: "404基地",
      imgLink: "https://patchwiki.biligame.com/images/klbq/thumb/8/8e/p8mgyehvp4ah71xc5txnmhbuwgarxku.png/800px-%E5%9C%B0%E5%9B%BE-base404-0.png"
    }
  ]
  const [togglevisible, setToggleVisible] = useState(false);

  const changePresentmap = (value: any) => {
    setPresentMap(value);
    for (const mapinfo of mapList) {
      if (mapinfo.mapName === value) {
        setPresentMapURL(mapinfo.imgLink);
      }
    }
  }

  const changePresentlanguage = (value: any) => {
    for (const languageinfo of i18nData) {
      if (languageinfo.language === value) {
        setPresentLanguage(languageinfo);
      }
    }
  }

  const article = <div className="grid grid-flex">
    <Row gutter={[16, 24]} type="flex" justify="space-around" align="middle" style={{ marginLeft: "25px" }}>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("red") }}><ColorBtn color="red" /></div>
      </Col>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("orange") }}><ColorBtn color="orange" /></div>
      </Col>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("yellow") }}><ColorBtn color="yellow" /></div>
      </Col>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("green") }}><ColorBtn color="green" /></div>
      </Col>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("blue") }}><ColorBtn color="blue" /></div>
      </Col>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("purple") }}><ColorBtn color="purple" /></div>
      </Col>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("white") }}><ColorBtn color="white" /></div>
      </Col>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("rgba(var(--semi-grey-0), 1)") }}><ColorBtn color="rgba(var(--semi-grey-0), 1)" /></div>
      </Col>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("rgba(var(--semi-grey-2), 1)") }}><ColorBtn color="rgba(var(--semi-grey-2), 1)" /></div>
      </Col>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("rgba(var(--semi-grey-4), 1)") }}><ColorBtn color="rgba(var(--semi-grey-4), 1)" /></div>
      </Col>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("rgba(var(--semi-grey-6), 1)") }}><ColorBtn color="rgba(var(--semi-grey-6), 1)" /></div>
      </Col>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("rgba(var(--semi-grey-8), 1)") }}><ColorBtn color="rgba(var(--semi-grey-8), 1)" /></div>
      </Col>
    </Row>
  </div>;


  const canvasToolBtnStyle = {
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

  return (
    <Layout className="components-layout-demo" style={{ height: 720, width: 1280 }}>
      <Header style={commonStyle}>
        <Title heading={3} style={{ margin: '14px 0' }} >{presentLanguage.title} - {presentMap}</Title>
        <div style={{ position: "relative", left: "1100px", top: "-60px", height: "100%", width: "200px", display: "flex" }}>
          <div style={{ marginTop: "8px", marginRight: "12px" }}><IconLanguage size='extra-large' /></div>
          <Select defaultValue="简体中文" style={{ width: 120, marginTop: "18px" }} onChange={changePresentlanguage}>
            <Select.Option value="简体中文">简体中文</Select.Option>
            <Select.Option value="繁体中文">繁体中文</Select.Option>
            <Select.Option value="日本語">日本語</Select.Option>
            <Select.Option value="English">English</Select.Option>
          </Select></div>
      </Header>
      <Layout>
        <Sider style={{ width: '180px', background: 'var(--semi-color-fill-2)' }}>
          <Collapse accordion defaultActiveKey="1">
            <Collapse.Panel header={presentLanguage.sidebar.mapsetting} itemKey="1">
              <p>
                <Select defaultValue="风曳镇" style={{ width: 120 }} onChange={changePresentmap}>
                  <Select.Option value="风曳镇">风曳镇</Select.Option>
                  <Select.Option value="空间实验室">空间实验室</Select.Option>
                  <Select.Option value="科斯迷特">科斯迷特</Select.Option>
                  <Select.Option value="欧拉港口">欧拉港口</Select.Option>
                  <Select.Option value="柯西街区">柯西街区</Select.Option>
                  <Select.Option value="88区">88区</Select.Option>
                  <Select.Option value="404基地">404基地</Select.Option>
                </Select>
              </p>
            </Collapse.Panel>
            <Collapse.Panel header={presentLanguage.sidebar.charactor} itemKey="2">
              <p>Hi, bytedance dance dance. This is the docsite of Semi UI. </p>
            </Collapse.Panel>
            <Collapse.Panel header={presentLanguage.sidebar.skill} itemKey="3">
              <p>Hi, bytedance dance dance. This is the docsite of Semi UI. </p>
            </Collapse.Panel>
            <Collapse.Panel header={presentLanguage.sidebar.grenade} itemKey="4">
              <p>Hi, bytedance dance dance. This is the docsite of Semi UI. </p>
            </Collapse.Panel>
            <Collapse.Panel header={presentLanguage.sidebar.lineup} itemKey="5">
              <p>Hi, bytedance dance dance. This is the docsite of Semi UI. </p>
            </Collapse.Panel>
          </Collapse>
        </Sider>
        <Content style={{ height: "100%", lineHeight: '100px', width: '100%', margin: 'auto', display: 'flex', placeItems: 'center' }}>
          <img src={presentMapURL} style={{ height: "700px", marginLeft: "100px" }}></img>
          <div style={{ position: "relative", top: "15%", right: "-200px", width: "58px", height: "max" }}>
            <Tooltip content={presentLanguage.markbox.mark}><div style={canvasToolBtnStyle}><IconEdit size='extra-large' /></div></Tooltip>
            <Popover
              content={article}
              position={"left"}
            >
              <div style={canvasToolBtnStyle}><ColorBtn color={penColor} /></div>
            </Popover>
            <Tooltip content={presentLanguage.markbox.undo}><div style={canvasToolBtnStyle}><IconUndo size='extra-large' /></div></Tooltip>
            <Tooltip content={presentLanguage.markbox.clear}><Popconfirm
              visible={togglevisible}
              title={presentLanguage.markbox.clearwarning.title}
              content={presentLanguage.markbox.clearwarning.content}
              onConfirm={() => { setToggleVisible(!togglevisible) }}
              onCancel={() => { setToggleVisible(!togglevisible) }}
            >
              <div onClick={() => setToggleVisible(!togglevisible)} style={canvasToolBtnStyle}><IconDelete size='extra-large' /></div>
            </Popconfirm></Tooltip>
          </div>
        </Content>
      </Layout>
      <Footer style={commonStyle}>©番石榴网络科技工作室 2020-2024</Footer>
    </Layout >
  )
}

export default App

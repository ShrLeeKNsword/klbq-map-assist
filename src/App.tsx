import { useState } from 'react';
import {
  Layout,
  Collapse,
  Typography,
  Select,
  Tooltip,
  Popover,
  Col,
  Row,
  Popconfirm,
  Slider,
  ColorPicker
} from '@douyinfe/semi-ui';
import { IconEdit, IconDelete, IconUndo } from '@douyinfe/semi-icons';
import ColorBtn from './components/colorBtb.tsx';
import CharactorBtn from './components/charactorBtn.tsx';

import './App.css';
import DrawableMap, { canvasElement } from './components/drawableMap.tsx';

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
        color: "颜色",
        undo: "撤销",
        clear: "清空",
        clearwarning: {
          title: "确认清除所有笔迹？",
          content: "此操作不可撤销"
        }
      }
    }
  ];
  const { Header, Footer, Sider, Content } = Layout;
  const commonStyle = {
    height: 64,
    lineHeight: '64px',
    background: 'var(--semi-color-fill-0)',
  };
  const { Title } = Typography;
  const [presentMap, setPresentMap] = useState("风曳镇");
  const [presentLanguage, setPresentLanguage] = useState(i18nData[0]);
  const [penColor, setpenColor] = useState("red");
  const [penWidth, setpenWidth] = useState(5);
  const [presentMapURL, setPresentMapURL] = useState("https://patchwiki.biligame.com/images/klbq/c/c2/5dzy2fxrj3ihqq2n9gfmpe2g91ofc0p.png");
  const mapList = [
    {
      mapName: '风曳镇',
      imgLink:
        'https://patchwiki.biligame.com/images/klbq/c/c2/5dzy2fxrj3ihqq2n9gfmpe2g91ofc0p.png',
    },
    {
      mapName: '空间实验室',
      imgLink:
        'https://patchwiki.biligame.com/images/klbq/thumb/6/66/jth3bp2k8eopctdj42xo52fewsxci1s.png/800px-%E5%9C%B0%E5%9B%BE-%E7%A9%BA%E9%97%B4%E5%AE%9E%E9%AA%8C%E5%AE%A42.png',
    },
    {
      mapName: '科斯迷特',
      imgLink:
        'https://patchwiki.biligame.com/images/klbq/thumb/c/c4/6pqvpjg5zvg14xtsydzeb95ok2ysq17.png/600px-%E5%9C%B0%E5%9B%BE-%E7%A7%91%E6%96%AF%E8%BF%B7%E7%89%B92.png',
    },
    {
      mapName: '欧拉港口',
      imgLink:
        'https://patchwiki.biligame.com/images/klbq/thumb/2/29/cjlkwy6ikzo7pehy7xf7h5edfn8b5xt.png/600px-%E5%9C%B0%E5%9B%BE-oula-0.png',
    },
    {
      mapName: '柯西街区',
      imgLink:
        'https://patchwiki.biligame.com/images/klbq/f/f6/jxevkldn7u4bx678t7hwqdcvxw7ta9m.png',
    },
    {
      mapName: '88区',
      imgLink:
        'https://patchwiki.biligame.com/images/klbq/thumb/3/35/a1wr3rbkbabvf5ijojx4ow0nikeonhl.png/800px-%E5%9C%B0%E5%9B%BE-88area-0.png',
    },
    {
      mapName: '404基地',
      imgLink:
        'https://patchwiki.biligame.com/images/klbq/thumb/8/8e/p8mgyehvp4ah71xc5txnmhbuwgarxku.png/800px-%E5%9C%B0%E5%9B%BE-base404-0.png',
    },
  ];
  const [togglevisible, setToggleVisible] = useState(false);
  const [canvasElements, setCanvasElements] = useState<canvasElement[]>([]);

  const changePresentmap = (value: string) => {
    setPresentMap(value);
    for (const mapinfo of mapList) {
      if (mapinfo.mapName === value) {
        setPresentMapURL(mapinfo.imgLink);
      }
    }

  const changePresentlanguage = (value: any) => {
    for (const languageinfo of i18nData) {
      if (languageinfo.language === value) {
        setPresentLanguage(languageinfo);
      }
    }
  }

  const colorPlate = <div className="grid grid-flex">
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
      <Col span={4}>
        <ColorPicker alpha={true} onChange={(value: any) => { setpenColor(value.hex) }} usePopover={true}>
          <div className="col-content"><ColorBtn linercolor="70deg, red, blue" /></div>
        </ColorPicker>
      </Col>
    </Row>
  </div>;

  const markPlate = <div className="grid grid-flex" style={{ width: "280px", height: "50px", display: "flex", justifyContent: "space-around" }}>
    <Slider style={{ marginTop: "8px", marginLeft: "10px", width: "200px" }} min={1} max={20} defaultValue={5} onChange={(value: any) => { setpenWidth(value) }}></Slider>
    <div style={{ borderRadius: "100%", margin: "auto", width: penWidth, height: penWidth, display: 'flex', placeItems: 'center', placeContent: 'center', backgroundColor: penColor, overflow: "hidden" }}></div>
  </div>;

  const canvasToolBtnStyle = {
    borderRadius: '100%',
    margin: '5px',
    width: '50px',
    height: '50px',
    display: 'flex',
    placeItems: 'center',
    placeContent: 'center',
    backgroundColor: 'rgba(var(--semi-grey-0), 1)',
    boxShadow: '0 0 0 3px rgba(var(--semi-grey-1), 1)',
    marginTop: '35px',
  };

  return (
    <Layout className="components-layout-demo">
      <Header style={commonStyle}>

        <Title heading={3} style={{ margin: '14px 0' }} >{presentLanguage.title} - {presentMap}</Title>
        <div style={{ position: "relative", left: "1100px", top: "-60px", height: "100%", width: "200px", display: "flex" }}>
          <div style={{ marginTop: "8px", marginRight: "12px" }}><IconLanguage size='extra-large' /></div>
          <Select defaultValue="简体中文" style={{ width: 120, marginTop: "18px" }} onChange={changePresentlanguage}>
            <Select.Option value="简体中文">简体中文</Select.Option>
            <Select.Option disabled value="繁体中文">繁体中文</Select.Option>
            <Select.Option disabled value="日本語">日本語</Select.Option>
            <Select.Option disabled value="English">English</Select.Option>
          </Select></div>
      </Header>
      <Layout>
        <Sider style={{ width: '340px', background: 'var(--semi-color-fill-2)' }}>
          <Collapse accordion defaultActiveKey="1">
            <Collapse.Panel header={presentLanguage.sidebar.mapsetting} itemKey="1">
              <div>
                <Select defaultValue="风曳镇" style={{ width: 120 }} onChange={changePresentmap}>
                  <Select.Option value="风曳镇">风曳镇</Select.Option>
                  <Select.Option value="空间实验室">空间实验室</Select.Option>
                  <Select.Option value="科斯迷特">科斯迷特</Select.Option>
                  <Select.Option value="欧拉港口">欧拉港口</Select.Option>
                  <Select.Option value="柯西街区">柯西街区</Select.Option>
                  <Select.Option value="88区">88区</Select.Option>
                  <Select.Option value="404基地">404基地</Select.Option>
                </Select>
              </div>
            </Collapse.Panel>
            <Collapse.Panel header={presentLanguage.sidebar.charactor} itemKey="2">
              <div style={{ display: 'flex', placeItems: 'center', width: "100%", position: "relative", left: "-5px" }}>
                <div><img src='https://patchwiki.biligame.com/images/klbq/thumb/6/69/8juww513o4hde7c901l5h8g371u81zx.png/300px-%E9%98%B5%E8%90%A5-%E6%AC%A7%E6%B3%8A.png' style={{ height: "40px" }}></img></div>
                <Title heading={6}>欧泊 P.U.S.</Title>
              </div>
              <Row gutter={[24, 8]} type="flex" align="middle">
                <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/1/1b/tgwx7q9203dafj6rsypza3flbultqf7.png/120px-%E7%B1%B3%E9%9B%AA%E5%84%BF%C2%B7%E6%9D%8E%E5%A4%B4%E5%83%8F.png' /></Col>
                <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/e/e6/s4r4y425r5vn5fbq0sw4i1d7l8d6ft4.png/120px-%E4%BF%A1%E5%A4%B4%E5%83%8F.png' /></Col>
                <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/4/44/jvg14awbm8ip4fmf4nlkdr7f9nd88xs.png/120px-%E5%BF%83%E5%A4%8F%E5%A4%B4%E5%83%8F.png' /></Col>
                <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/4/42/j71nx9i25shxr65jnoxxh24x4y0t0b5.png/120px-%E4%BC%8A%E8%96%87%E7%89%B9%E5%A4%B4%E5%83%8F.png' /></Col>
                <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/c/c5/8bp7psa0s66d19ceyczzv78b26ydaqp.png/120px-%E8%8A%99%E6%8B%89%E8%96%87%E5%A8%85%E5%A4%B4%E5%83%8F.png' /></Col>
              </Row>
              <div style={{ display: 'flex', placeItems: 'center', width: "100%", position: "relative", left: "-5px", marginTop: "5px" }}>
                <div><img src='https://patchwiki.biligame.com/images/klbq/thumb/0/0e/qsqrhhnvg55mdct76xxy3mz4c0bbmfn.png/300px-%E9%98%B5%E8%90%A5-%E5%89%AA%E5%88%80%E6%89%8B.png' style={{ height: "40px" }}></img></div>
                <Title heading={6}>剪刀手 The Scissors</Title>
              </div>
              <Row gutter={[24, 8]} type="flex" align="middle">
                <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/1/11/rpa27v1teqx37xf0oq21kqhv7t5oxri.png/120px-%E6%98%8E%E5%A4%B4%E5%83%8F.png' /></Col>
                <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/f/f3/1zor7pqxy3rn3uggyenorigvf37q4hr.png/120px-%E6%8B%89%E8%96%87%E5%A4%B4%E5%83%8F.png' /></Col>
                <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/d/dd/20gac3391nb2prx6r69yrdkfatxapdu.png/120px-%E6%A2%85%E7%91%9E%E7%8B%84%E6%96%AF%E5%A4%B4%E5%83%8F.png' /></Col>
                <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/1/14/3ebagyf8bnsfhnvp5iuq8jlcv81q04g.png/120px-%E4%BB%A4%E5%A4%B4%E5%83%8F.png' /></Col>
                <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/1/1d/ffln5mqrwtvr0dj0wq54guvs10jsfdo.png/120px-%E9%A6%99%E5%A5%88%E7%BE%8E%E5%A4%B4%E5%83%8F.png' /></Col>
                <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/9/92/oai6e3g5fqekd9023ikl9kvdk0mguy6.png/120px-%E8%89%BE%E5%8D%A1%E5%A4%B4%E5%83%8F.png' /></Col>
                <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/2/2a/2cau3x7z99x3butkxp7wu3w78zjk3go.png/120px-%E7%8F%90%E6%A0%BC%E5%85%B0%E4%B8%9D%E5%A4%B4%E5%83%8F.png' /></Col>
              </Row>
              <div style={{ display: 'flex', placeItems: 'center', width: "100%", position: "relative", left: "-5px", marginTop: "5px" }}>
                <div><img src='https://patchwiki.biligame.com/images/klbq/thumb/d/d2/tcn2nz93o2q9gffys6i3f81kkpso51m.png/300px-%E9%98%B5%E8%90%A5-%E4%B9%8C%E5%B0%94%E6%AF%94%E8%AF%BA.png' style={{ height: "40px" }}></img></div>
                <Title heading={6}>乌尔比诺 Urbino</Title>
              </div>
              <Row gutter={[24, 8]} type="flex" align="middle">
                <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/2/2d/hmkcsrcvp79ctofkwv92iint9iupvnk.png/80px-%E5%A5%A5%E9%BB%9B%E4%B8%BD%C2%B7%E6%A0%BC%E7%BD%97%E5%A4%AB%E5%A4%B4%E5%83%8F.png' /></Col>
                <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/d/d6/tlbgspg4i0qevvf5vor83rxikrq4xy5.png/80px-%E7%8E%9B%E5%BE%B7%E8%95%BE%E5%A8%9C%C2%B7%E5%88%A9%E9%87%8C%E5%A4%B4%E5%83%8F.png' /></Col>
                <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/f/f4/rtraite3bno62mzfatae961ke36hc5b.png/80px-%E7%BB%AF%E8%8E%8E%E5%A4%B4%E5%83%8F.png' /></Col>
                <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/f/f2/9rwg399wannhzh80knjj5tmwffnjg0m.png/80px-%E6%98%9F%E7%BB%98%E5%A4%B4%E5%83%8F.png' /></Col>
                <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/d/d1/ipi8c39m3lzutqylw7fi7fgjyzp5d1b.png/80px-%E7%99%BD%E5%A2%A8%E5%A4%B4%E5%83%8F.png' /></Col>
                <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/8/8f/79h9y6t4xnboft6wx3bf08tlfacph7v.png/80px-%E5%8A%A0%E6%8B%89%E8%92%82%E4%BA%9A%C2%B7%E5%88%A9%E9%87%8C%E5%A4%B4%E5%83%8F.png' /></Col>
              </Row>
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
          <DrawableMap
            presentMapURL={presentMapURL}
            penColor={penColor}
            canvasElements={canvasElements}
            setCanvasElements={setCanvasElements}
          />
          <div style={{ position: "relative", top: "-180px", right: "-150px", width: "58px", height: "max" }}>
            <Popover
              content={markPlate}
              position={"left"}
            >
              <div style={canvasToolBtnStyle}><IconEdit size='extra-large' /></div>
            </Popover>
            <Popover
              content={colorPlate}
              position={"left"}
            >
              <div style={canvasToolBtnStyle}><ColorBtn color={penColor} /></div>
            </Popover>
            <Tooltip content={presentLanguage.markbox.undo}><div style={canvasToolBtnStyle}><IconUndo size='extra-large' /></div></Tooltip>
            <Popconfirm
              visible={togglevisible}
              title={presentLanguage.markbox.clearwarning.title}
              content={presentLanguage.markbox.clearwarning.content}
              onConfirm={() => { setToggleVisible(!togglevisible) }}
              onCancel={() => { setToggleVisible(!togglevisible) }}
            >
              <Tooltip content={presentLanguage.markbox.clear}>
                <div onClick={() => setToggleVisible(!togglevisible)} style={canvasToolBtnStyle}><IconDelete size='extra-large' /></div>
              </Tooltip>
            </Popconfirm>
          </div>
        </Content>
      </Layout>
      <Footer style={commonStyle}><div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="nofollow"><img decoding="async" loading="lazy" src="https://s2.loli.net/2024/09/16/TPdoKCrgVb4i37J.png" width="107" height="38" style={{ marginRight: "20px", marginTop: "12px" }} /></a><div style={{ marginBottom: "12px" }}>©番石榴网络科技工作室 2020-2024</div></div></Footer>
    </Layout >
  )
}

export default App;

import { useState } from 'react';
import { Layout, Collapse, Typography, Select, Tooltip, Popover, Col, Row, Popconfirm, ColorPicker } from '@douyinfe/semi-ui';
import { IconEdit, IconDelete, IconUndo, IconLanguage, IconMinus, IconGithubLogo, IconMaximize } from '@douyinfe/semi-icons';
import ColorBtn from './components/colorBtb.tsx';
import CharactorBtn from './components/charactorBtn.tsx';
import SkillBtn from './components/skillBtn.tsx';
import GrenadeBtn from './components/grenadeBtn.tsx';

import './App.css';
import DrawableMap from './components/drawableMap.tsx';
import StandardButton from './components/toolButtons/standardButton.tsx';
import { i18nData } from './data/i18n.ts';
import { mapList } from './data/maplist.ts';
import { canvasLineElement, mapTools } from './utils/canvasConstants.ts';
import ButtonNoPopover from './components/toolButtons/buttonNoPopover.tsx';

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

  const [presentMap, setPresentMap] = useState("风曳镇");
  const [presentLanguage, setPresentLanguage] = useState(i18nData[0]);

  const [canvasTool, setTool] = useState<mapTools>(mapTools.SELECT);
  const [penColor, setpenColor] = useState("red");
  const [penWidth, setpenWidth] = useState(5);
  const [canvasElements, setCanvasElements] = useState<canvasLineElement[]>([]);
  const [mapPrepareMode, setMapPrepareMode] = useState(true);
  const [mapMarkNameMode, setMarkNameMode] = useState(true);

  const [presentMapURL, setPresentMapURL] = useState({ imgPrepareLink: mapList[0].imgPrepareLink, imgBlankLink: mapList[0].imgBlankLink });
  const [togglevisible, setToggleVisible] = useState(false);

  const changePresentmap = (value: string) => {
    setPresentMap(value);
    for (const mapinfo of mapList) {
      if (mapinfo.mapName === value) {
        setPresentMapURL({ imgPrepareLink: mapinfo.imgPrepareLink, imgBlankLink: mapinfo.imgBlankLink });
      }
    }
  }

  const changePresentlanguage = (value: string) => {
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
        <ColorPicker alpha={true} onChange={(value) => { setpenColor(value.hex) }} usePopover={true}>
          <div className="col-content"><ColorBtn linercolor="70deg, red, blue" /></div>
        </ColorPicker>
      </Col>
    </Row>
  </div>;

  function selectButtonClicked(): void {
    setTool(mapTools.SELECT);
  }

  function editButtonClicked(): void {
    setTool(mapTools.PEN);
  }

  function lineButtonClicked(): void {
    setTool(mapTools.LINE);
  }

  const CharactorModuel = <>
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
  </>

  const SkillModuel = <>
    <div style={{ display: 'flex', placeItems: 'center', width: "100%", position: "relative", left: "-5px" }}>
      <div><img src='https://patchwiki.biligame.com/images/klbq/thumb/6/69/8juww513o4hde7c901l5h8g371u81zx.png/300px-%E9%98%B5%E8%90%A5-%E6%AC%A7%E6%B3%8A.png' style={{ height: "40px" }}></img></div>
      <Title heading={6}>欧泊 P.U.S.</Title>
    </div>
    <Row gutter={[24, 8]} type="flex" align="middle">
      <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/1/1b/tgwx7q9203dafj6rsypza3flbultqf7.png/120px-%E7%B1%B3%E9%9B%AA%E5%84%BF%C2%B7%E6%9D%8E%E5%A4%B4%E5%83%8F.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/2/21/h6zjxv864fzqsajudhqghj7xm2kh9p7.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/b/b4/syv94txki3utxcisi7slafk1wo7dzpj.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/a/a7/sm1z2dxmpoac2b2cu084qenogijwqgk.png' /></Col>
      <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/e/e6/s4r4y425r5vn5fbq0sw4i1d7l8d6ft4.png/120px-%E4%BF%A1%E5%A4%B4%E5%83%8F.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/0/08/69v9z3z6za54w4nngig4knvsa0sqdr7.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/d/d3/rr23s1oo8kzvs1vsmekkfezv7c5uwcc.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/f/f2/lxokffbo0us5p28ezgoeebvhvdcfvrz.png' /></Col>
      <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/4/44/jvg14awbm8ip4fmf4nlkdr7f9nd88xs.png/120px-%E5%BF%83%E5%A4%8F%E5%A4%B4%E5%83%8F.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/1/13/0yh81k46dkda72fb0ppe8gqipqercbj.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/8/87/t1r9hfz66uq9tdkrw71f6194p3r8e8x.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/7/76/goio95r9jjh0hjzbaze9x461719hjlo.png' /></Col>
      <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/4/42/j71nx9i25shxr65jnoxxh24x4y0t0b5.png/120px-%E4%BC%8A%E8%96%87%E7%89%B9%E5%A4%B4%E5%83%8F.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/9/9a/196s3zjjlaa5sathrf6emjrl4zce7u9.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/4/4e/fcwitibsl4n1ilarnot6qye372j2hog.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/b/b1/jzrs0txs2vaojzfahxtpxb3b921lc0q.png' /></Col>
      <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/c/c5/8bp7psa0s66d19ceyczzv78b26ydaqp.png/120px-%E8%8A%99%E6%8B%89%E8%96%87%E5%A8%85%E5%A4%B4%E5%83%8F.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/d/d7/fmpl8sibzprofday7ecrdu5546mr84f.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/0/0d/p7wv52md5c0mysj2fn3j31xnp5devop.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/7/79/eafqqzvgxt1xbvn3evttpx25rm2dx5v.png' /></Col>
    </Row>
    <div style={{ display: 'flex', placeItems: 'center', width: "100%", position: "relative", left: "-5px", marginTop: "5px" }}>
      <div><img src='https://patchwiki.biligame.com/images/klbq/thumb/0/0e/qsqrhhnvg55mdct76xxy3mz4c0bbmfn.png/300px-%E9%98%B5%E8%90%A5-%E5%89%AA%E5%88%80%E6%89%8B.png' style={{ height: "40px" }}></img></div>
      <Title heading={6}>剪刀手 The Scissors</Title>
    </div>
    <Row gutter={[24, 8]} type="flex" align="middle">
      <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/1/11/rpa27v1teqx37xf0oq21kqhv7t5oxri.png/120px-%E6%98%8E%E5%A4%B4%E5%83%8F.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/7/7b/5q4787xhxlmxq1przsao38a6ghnu49r.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/6/6b/lp887cj1afvvma2tc7mwzi43amzp984.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/2/20/3g7omn3caazgqw3rbxn2m9fb5nld3bo.png' /></Col>
      <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/f/f3/1zor7pqxy3rn3uggyenorigvf37q4hr.png/120px-%E6%8B%89%E8%96%87%E5%A4%B4%E5%83%8F.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/5/55/te42c1gezaqfecyscg5or1j1dch2hem.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/f/f0/7wgl6xlxxx1zgys5vn51zd4k14swyes.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/5/5c/lozkmt4hu3zdng2yadp0chxrknokra8.png' /></Col>
      <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/d/dd/20gac3391nb2prx6r69yrdkfatxapdu.png/120px-%E6%A2%85%E7%91%9E%E7%8B%84%E6%96%AF%E5%A4%B4%E5%83%8F.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/2/2d/j04665eo9dv2y59r6q4jof3zh9evaa5.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/e/ee/f21xu0t250jf8l8mblncb3ec12uqawh.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/8/87/l7m7m6j5yiqr46mlp4rcvosmjiviut7.png' /></Col>
      <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/1/14/3ebagyf8bnsfhnvp5iuq8jlcv81q04g.png/120px-%E4%BB%A4%E5%A4%B4%E5%83%8F.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/d/d2/m0r6y8gpy5na2q0w3xwxigbbs8ua5n1.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/5/52/cmyricvldnbwn2x2jcgsang6xwd3f63.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/2/20/4x6qt39wgfwvxxpbyxqtv1d6kuwdkpi.png' /></Col>
      <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/1/1d/ffln5mqrwtvr0dj0wq54guvs10jsfdo.png/120px-%E9%A6%99%E5%A5%88%E7%BE%8E%E5%A4%B4%E5%83%8F.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/5/55/b8gukdsv4zp92nz7i4e6bc8ws52vqf3.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/5/5d/iiw9rlqkmp4d4kqy3gro3gryajrj90p.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/b/bb/aqucc8zsob3plu38zj8r4b83k7kqmdq.png' /></Col>
      <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/9/92/oai6e3g5fqekd9023ikl9kvdk0mguy6.png/120px-%E8%89%BE%E5%8D%A1%E5%A4%B4%E5%83%8F.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/b/ba/4m2kbng1kxcd5hb43fxaacvys67s3gs.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/e/eb/c2b0zij3ug3pbmv086b232z6fpgsyi1.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/b/b6/grztntlykjozc4mks6dfssqr9emee51.png' /></Col>
      <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/2/2a/2cau3x7z99x3butkxp7wu3w78zjk3go.png/120px-%E7%8F%90%E6%A0%BC%E5%85%B0%E4%B8%9D%E5%A4%B4%E5%83%8F.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/4/4e/4v8h7b0se99huedmxu2y3g8ap3nexc3.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/e/e6/a6cssmam5j244izx801vxvt60gqlqt9.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/c/c4/fuy77op8q725f0u3n11ykmnjnwgxjvs.png' /></Col>
    </Row>
    <div style={{ display: 'flex', placeItems: 'center', width: "100%", position: "relative", left: "-5px", marginTop: "5px" }}>
      <div><img src='https://patchwiki.biligame.com/images/klbq/thumb/d/d2/tcn2nz93o2q9gffys6i3f81kkpso51m.png/300px-%E9%98%B5%E8%90%A5-%E4%B9%8C%E5%B0%94%E6%AF%94%E8%AF%BA.png' style={{ height: "40px" }}></img></div>
      <Title heading={6}>乌尔比诺 Urbino</Title>
    </div>
    <Row gutter={[24, 8]} type="flex" align="middle">
      <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/d/d6/tlbgspg4i0qevvf5vor83rxikrq4xy5.png/80px-%E7%8E%9B%E5%BE%B7%E8%95%BE%E5%A8%9C%C2%B7%E5%88%A9%E9%87%8C%E5%A4%B4%E5%83%8F.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/a/a8/g9426n2qj4jrjt8il2irw1x529nupuy.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/f/f2/q2782fg2ggtc2jczhoznm3g6lar8gd1.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/1/1b/deofr9plye7q3xaryttmuf5svrq21ix.png' /></Col>
      <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/f/f4/rtraite3bno62mzfatae961ke36hc5b.png/80px-%E7%BB%AF%E8%8E%8E%E5%A4%B4%E5%83%8F.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/c/c4/60e8n6rdjuuh90v9sjzfrnhky52l5mv.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/b/bb/8hnd8kzco5la96rbi22tu8n4z175oe3.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/b/bc/mkw4n4b9giymp2glsu6ln699epp55ov.png' /></Col>
      <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/f/f2/9rwg399wannhzh80knjj5tmwffnjg0m.png/80px-%E6%98%9F%E7%BB%98%E5%A4%B4%E5%83%8F.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/e/e9/gse1gendxxjp89p2of69t7sfote9gec.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/6/62/f3l2kdlfs4k0agqvd54xyh4mtfee0l1.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/0/05/7hsvqks0fen88umc9qil7krfzaumdll.png' /></Col>
      <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/d/d1/ipi8c39m3lzutqylw7fi7fgjyzp5d1b.png/80px-%E7%99%BD%E5%A2%A8%E5%A4%B4%E5%83%8F.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/c/c7/hwxi8k6qd7zlhn1jn2n54z8tf5pyliw.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/7/78/trkbrg8fydkw5s7lpwtqobrrynektpr.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/c/c8/t77eqoqldkys6w7n23kcsuq1su7qi3w.png' /></Col>
      <Col span={6}><CharactorBtn imglink='https://patchwiki.biligame.com/images/klbq/thumb/8/8f/79h9y6t4xnboft6wx3bf08tlfacph7v.png/80px-%E5%8A%A0%E6%8B%89%E8%92%82%E4%BA%9A%C2%B7%E5%88%A9%E9%87%8C%E5%A4%B4%E5%83%8F.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/0/08/t803rd16l0c33l02pj1js9lmxtfl1hq.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/7/76/0xnly1gdr8qr432xxxsd9q792ak1rkf.png' /></Col>
      <Col span={6}><SkillBtn imglink='https://patchwiki.biligame.com/images/klbq/d/d1/g3s9cxnj82ayakng4nzatvmdixtj6f3.png' /></Col>
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
      <Col span={6}><GrenadeBtn imglink='https://s2.loli.net/2024/09/24/y6xfMWzvi5GrE8Z.png' /></Col>
    </Row>
  </>

  return (
    <Layout className="components-layout-demo" style={{ height: 720, width: 1280, margin: "auto" }}>
      <Header style={styles.commonStyles}>
        <Title heading={3} style={{ margin: '14px 0' }} >{presentLanguage.title} - {presentMap} {mapPrepareMode ? "[准备阶段]" : "[空白]"} {mapMarkNameMode ? "[点位标注]" : ""}</Title>
        <div style={{ position: "relative", left: "1100px", top: "-60px", height: "100%", width: "200px", display: "flex" }}>
          <div style={{ marginTop: "8px", marginRight: "12px" }}><IconLanguage size='extra-large' /></div>
          <Select defaultValue="简体中文" style={{ width: 120, marginTop: "18px" }} onChange={value => changePresentlanguage(value as string)}>
            <Select.Option value="简体中文">简体中文</Select.Option>
            <Select.Option disabled value="繁体中文">繁体中文</Select.Option>
            <Select.Option disabled value="日本語">日本語</Select.Option>
            <Select.Option disabled value="English">English</Select.Option>
          </Select></div>
      </Header>
      <Layout>
        <Sider style={{ width: '340px', background: 'var(--semi-color-fill-2)' }}>
          <Collapse accordion defaultActiveKey="1" className='no-scroll-bar' style={{ overflowY: "scroll", height: "600px" }}>
            <Collapse.Panel header={presentLanguage.sidebar.mapsetting} itemKey="1">
              <div>
                <Row gutter={[16, 8]} type="flex" align="middle">
                  <Col span={9}>
                    {presentLanguage.mapsetting.choosemap}
                  </Col>
                  <Col span={7}>
                    <Select defaultValue="风曳镇" style={{ width: 120 }} onChange={value => changePresentmap(value as string)}>
                      <Select.Option value="风曳镇">{presentLanguage.mapsetting.maps.风曳镇}</Select.Option>
                      <Select.Option value="空间实验室">{presentLanguage.mapsetting.maps.空间实验室}</Select.Option>
                      <Select.Option value="科斯迷特">{presentLanguage.mapsetting.maps.科斯迷特}</Select.Option>
                      <Select.Option value="欧拉港口">{presentLanguage.mapsetting.maps.欧拉港口}</Select.Option>
                      <Select.Option value="柯西街区">{presentLanguage.mapsetting.maps.柯西街区}</Select.Option>
                      <Select.Option value="88区">{presentLanguage.mapsetting.maps['88区']}</Select.Option>
                      <Select.Option value="404基地">{presentLanguage.mapsetting.maps['404基地']}</Select.Option>
                    </Select>
                  </Col>
                  <Col span={9}>
                    {presentLanguage.mapsetting.maptype}
                  </Col>
                  <Col span={7}>
                    <Select defaultValue="准备阶段" style={{ width: 120 }} onChange={value => setMapPrepareMode(value as string === "准备阶段" ? true : false)}>
                      <Select.Option value="准备阶段">{presentLanguage.mapsetting.maptypes.prepare}</Select.Option>
                      <Select.Option value="空白">{presentLanguage.mapsetting.maptypes.blank}</Select.Option>
                    </Select>
                  </Col>
                  <Col span={9}>
                    {presentLanguage.mapsetting.spotmark}
                  </Col>
                  <Col span={7}>
                    <Select defaultValue="启用" style={{ width: 120 }} onChange={value => setMarkNameMode(value as string === "启用" ? true : false)}>
                      <Select.Option value="启用">{presentLanguage.mapsetting.spotmarks.enable}</Select.Option>
                      <Select.Option value="禁用">{presentLanguage.mapsetting.spotmarks.disable}</Select.Option>
                    </Select>
                  </Col>
                </Row>
              </div>
            </Collapse.Panel>
            <Collapse.Panel header={presentLanguage.sidebar.charactor} itemKey="2" >
              {CharactorModuel}
            </Collapse.Panel>
            <Collapse.Panel header={presentLanguage.sidebar.skill} itemKey="3">
              {SkillModuel}
            </Collapse.Panel>
            <Collapse.Panel header={presentLanguage.sidebar.grenade} itemKey="4">
              {GrenadeModuel}
            </Collapse.Panel>
            <Collapse.Panel header={presentLanguage.sidebar.lineup} itemKey="5">
              <p>Hi, bytedance dance dance. This is the docsite of Semi UI. </p>
            </Collapse.Panel>
          </Collapse>
        </Sider>
        <Content style={{ height: "100%", lineHeight: '100px', width: '100%', margin: 'auto', display: 'flex', placeItems: 'center' }}>
          <DrawableMap presentMapURL={mapPrepareMode ? presentMapURL.imgPrepareLink : presentMapURL.imgBlankLink} canvasTool={canvasTool} penColor={penColor} canvasElements={canvasElements} setCanvasElements={setCanvasElements} />
          <div style={{ position: "relative", top: "-20px", right: "40px", width: "58px", height: "max" }}>
            <ButtonNoPopover icon={IconMaximize} onClick={selectButtonClicked} isActiveTool={canvasTool === mapTools.SELECT} />
            <StandardButton icon={IconEdit} penWidth={penWidth} penColor={penColor} setpenWidth={setpenWidth} onClick={editButtonClicked} isActiveTool={canvasTool === mapTools.PEN} />
            <StandardButton icon={IconMinus} penWidth={penWidth} penColor={penColor} setpenWidth={setpenWidth} onClick={lineButtonClicked} isActiveTool={canvasTool === mapTools.LINE} />
            <Popover
              content={colorPlate}
              position={"left"}
            >
              <div style={styles.canvasToolButtonStyle}><ColorBtn color={penColor} /></div>
            </Popover>
            <Tooltip content={presentLanguage.markbox.undo}><div style={styles.canvasToolButtonStyle}><IconUndo size='extra-large' /></div></Tooltip>
            <Popconfirm
              visible={togglevisible}
              title={presentLanguage.markbox.clearwarning.title}
              content={presentLanguage.markbox.clearwarning.content}
              onConfirm={() => { setToggleVisible(!togglevisible) }}
              onCancel={() => { setToggleVisible(!togglevisible) }}
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

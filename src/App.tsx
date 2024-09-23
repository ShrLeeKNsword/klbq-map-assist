import { useState } from 'react';
import { Layout, Collapse, Typography, Select } from '@douyinfe/semi-ui';
import './App.css';

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  const commonStyle = {
    height: 64,
    lineHeight: '64px',
    background: 'var(--semi-color-fill-0)'
  };
  const { Title } = Typography;
  const [presentMap, setPresentMap] = useState("风曳镇");
  const mapList = [
    {
      mapName:"风曳镇",
      imgLink:"https://patchwiki.biligame.com/images/klbq/c/c2/5dzy2fxrj3ihqq2n9gfmpe2g91ofc0p.png"
    }
  ]

  const changePresentmap = (value: any) => {
    setPresentMap(value);
  }

  return (
    <Layout className="components-layout-demo" style={{ height: 720, width: 1280 }}>
      <Header style={commonStyle}>
        <Title heading={3} style={{ margin: '14px 0' }} >卡拉彼丘地图助手 - {presentMap}</Title>
      </Header>
      <Layout>
        <Sider style={{ width: '180px', background: 'var(--semi-color-fill-2)' }}>
          <Collapse accordion defaultActiveKey="1">
            <Collapse.Panel header="地图设置" itemKey="1">
              <p>
                <Select defaultValue="风曳镇" style={{ width: 120 }} onChange={changePresentmap}>
                  <Select.Option value="风曳镇">风曳镇</Select.Option>
                  <Select.Option value="空间实验室">空间实验室</Select.Option>
                  <Select.Option value="科斯迷特">科斯迷特</Select.Option>
                  <Select.Option value="欧拉港口">欧拉港口</Select.Option>
                  <Select.Option value="欧拉港口">柯西街区</Select.Option>
                  <Select.Option value="欧拉港口">88区</Select.Option>
                  <Select.Option value="欧拉港口">404基地</Select.Option>
                </Select>
              </p>
            </Collapse.Panel>
            <Collapse.Panel header="超弦体" itemKey="2">
              <p>Hi, bytedance dance dance. This is the docsite of Semi UI. </p>
            </Collapse.Panel>
            <Collapse.Panel header="技能" itemKey="3">
              <p>Hi, bytedance dance dance. This is the docsite of Semi UI. </p>
            </Collapse.Panel>
            <Collapse.Panel header="战术道具" itemKey="4">
              <p>Hi, bytedance dance dance. This is the docsite of Semi UI. </p>
            </Collapse.Panel>
          </Collapse>
        </Sider>
        <Content style={{ height: "100%", lineHeight: '100px' }}>
          <img src="https://patchwiki.biligame.com/images/klbq/c/c2/5dzy2fxrj3ihqq2n9gfmpe2g91ofc0p.png" style={{ width: "60%" }}></img>
        </Content>
      </Layout>
      <Footer style={commonStyle}>©番石榴网络科技工作室 2020-2024</Footer>
    </Layout>
  )
}

export default App

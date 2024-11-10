import { useContext } from 'react'
import { Button, Typography, Divider, Col, Row } from '@douyinfe/semi-ui';
import FooterModal from './FooterModal.tsx'
import { LanguageContext } from '../../../contexts/LanguageContext.ts'

const supportlistdata = [
  {
    name: "秋漫语（asl）",
    url: ""
  },
  {
    name: "废喵咸鱼TrashMeow",
    url: "https://space.bilibili.com/24437188"
  }
]

const { Title } = Typography;

const SupportUsList: React.FC = () => {
  const lang = useContext(LanguageContext)
  const langData = lang.supportusdata

  const children = (
    <>
      <div><Title heading={6}>感谢以下赞助者：</Title></div>
      <Divider margin='12px' />
      <Row gutter={[0, 12]} style={{ width: "100%", marginTop: "10px" }}>
        {supportlistdata.map((data) => (
          <Col span={6} style={{ width: "50%" }}>
            <Button
              type="tertiary"
              onClick={() => { if (data.url !== "") open(data.url, "_blank") }}
              style={{ width: "90%" }}
            >
              {data.name}
            </Button>
          </Col>
        ))}
      </Row>
    </>
  );

  return <FooterModal title={langData.list} children={children} />
};

export default SupportUsList;

import { Button, Typography, Divider, Col, Row } from '@douyinfe/semi-ui';
import { SiteListForm } from '../../../data/i18n.tsx'
import { useContext } from 'react'
import { LanguageContext } from '../../../contexts/LanguageContext.ts'
import { IoMdCloudOutline } from "react-icons/io";
import FooterModal from './FooterModal.tsx'

const { Title } = Typography;

interface SiteListSectionProps {
  title: string
  items: SiteListForm[]
}

const SiteListSection: React.FC<SiteListSectionProps> = ({ title, items }) => {
  return (
    <>
      <Title heading={5}>{title}</Title>
      <Divider margin='12px' />
      <Row gutter={[0, 12]} style={{ width: "100%", marginTop: "10px" }}>
        {items.map((site, i) => (
          <Col key={i} span={10} style={{ width: "50%" }}>
            <Button type="tertiary" onClick={() => { open(site.url, "_self") }} style={{ width: "90%" }}>
              {site.icon}{site.content}
            </Button>
          </Col>
        ))}
      </Row>
    </>
  )
}

const SiteList: React.FC = () => {
  const lang = useContext(LanguageContext)
  const langData = lang.sitelistdata

  const children = (
    <>
      {langData.content}
      <br />
      <SiteListSection title="Global" items={langData.Global} />
      <br />
      <SiteListSection title="中国节点" items={langData.CN} />
      <br />
    </>
  );

  return <FooterModal icon={<IoMdCloudOutline style={{ marginRight: "5px" }} />} title={lang.sitelist} children={children} />
};

export default SiteList;

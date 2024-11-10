import { useContext } from 'react'
import { Button, Typography, Divider, Row, Col } from '@douyinfe/semi-ui';
import { LanguageContext } from '../../../contexts/LanguageContext.ts'
import { FriendLinkForm } from '../../../data/i18n.tsx'
import { FaLink } from 'react-icons/fa6'
import FooterModal from './FooterModal.tsx'

interface FriendSectionProps {
  title: string
  items: FriendLinkForm[]
}

const { Title } = Typography;

const FriendSection: React.FC<FriendSectionProps> = ({ title, items }) => {
  return (
    <>
      <Title heading={6}>{title}</Title>
      <Divider margin='12px' />
      <Row gutter={[0, 10]} style={{ width: "100%", marginTop: "10px" }}>
        {items.map((site, i) => (
          <Col key={i} span={12} style={{}}>
            <Button size='large' type="tertiary" onClick={() => { open(site.url, "_blank") }} style={{ width: "90%" }}>
              {site.icon}{site.name}
            </Button>
          </Col>
        ))}
      </Row>
    </>
  )
}

const FriendLink: React.FC = () => {
  const lang = useContext(LanguageContext)
  const langData = lang.friendlinkdata

  const children = (
    <>
      <FriendSection title={langData.classify.official} items={langData.official} />
      <br />
      <FriendSection title={langData.classify.wiki} items={langData.wiki} />
      <br />
      <FriendSection title={langData.classify.others} items={langData.others} />
      <br />
      <Divider margin='12px' />
      {langData.contact.content}
    </>
  );

  return <FooterModal icon={<FaLink style={{ marginRight: "5px" }} />} title={lang.friendlink} children={children} />
};

export default FriendLink;

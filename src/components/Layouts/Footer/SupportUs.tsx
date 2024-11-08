import { useContext } from 'react'
import { Typography, Divider } from '@douyinfe/semi-ui';
import SupportUsList from './SupportUsList.tsx';
import { LanguageContext } from '../../../contexts/LanguageContext.ts'
import FooterModal from './FooterModal.tsx'

const { Title } = Typography;

const SupportUs: React.FC = () => {
  const lang = useContext(LanguageContext);
  const langData = lang.supportusdata

  const children =  (
    <>
      {langData.content}
      <SupportUsList name={langData.list} />
      <br />
      <Divider margin='12px' />
      <div><Title heading={6}>{langData.global}</Title></div>
      <div onClick={() => { open("https://ko-fi.com/MiekoHikari", "_blank") }}>
        <img src='https://s2.loli.net/2024/10/01/LpQN1lIvu97HdMy.webp' style={{ height: "50px", marginTop: "10px" }} />
      </div>
      <Divider margin='12px' />
      <div><Title heading={6}>{langData.CN}</Title></div>
      <div onClick={() => { open("https://afdian.com/a/fsltech", "_blank") }} style={{ display: "flex", height: "50px" }}>
        <img src='https://s2.loli.net/2024/10/01/Xw74impc6osJDCL.png' style={{ height: "50px", marginTop: "10px", marginLeft: "5px" }} />
        <div style={{ display: "flex", height: "100%", placeItems: "center", fontSize: "20px", marginLeft: "20px", marginTop: "10px", color: "rgba(var(--semi-grey-9), 1)" }}><strong>爱发电</strong></div>
      </div>
    </>
  );

  return <FooterModal title={lang.sidebar.supportus} children={children} />
};

export default SupportUs;

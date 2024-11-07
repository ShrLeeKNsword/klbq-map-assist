import { useState } from 'react';
import { Modal, Button, Typography, Divider } from '@douyinfe/semi-ui';
import { CiHeart } from "react-icons/ci";
import SupportUsList from './supportuslist';

interface SupportUsData {
    content: JSX.Element
    global: string
    CN: string
    list: string
}

interface SupportUsPops {
    name: string
    content: SupportUsData
}

const { Title } = Typography;

const SupportUs = (props: SupportUsPops) => {
    const [visible, setVisible] = useState(false);
    const showDialog = () => {
        setVisible(true);
    };
    const handleOk = () => {
        setVisible(false);
        console.log('Ok button clicked');
    };
    const handleCancel = () => {
        setVisible(false);
        console.log('Cancel button clicked');
    };
    const handleAfterClose = () => {
        console.log('After Close callback executed');
    };

    return (
        <>
            <Button onClick={showDialog} style={{ marginLeft: "10px" }}><CiHeart style={{ color: "red", fontSize: "20px", marginRight: "5px" }} />{props.name}</Button>
            <Modal
                title={props.name}
                visible={visible}
                onOk={handleOk}
                afterClose={handleAfterClose} //>=1.16.0
                onCancel={handleCancel}
                closeOnEsc={true}
            >
                <div>
                    {props.content.content}
                    <SupportUsList name={props.content.list} />
                    <br />
                    <Divider margin='12px' />
                    <div><Title heading={6}>{props.content.global}</Title></div>
                    <div onClick={() => { open("https://ko-fi.com/MiekoHikari", "_blank") }}>
                        <img src='https://s2.loli.net/2024/10/01/LpQN1lIvu97HdMy.webp' style={{ height: "50px", marginTop: "10px" }} />
                    </div>
                    <Divider margin='12px' />
                    <div><Title heading={6}>{props.content.CN}</Title></div>
                    <div onClick={() => { open("https://afdian.com/a/fsltech", "_blank") }} style={{ display: "flex", height: "50px" }}>
                        <img src='https://s2.loli.net/2024/10/01/Xw74impc6osJDCL.png' style={{ height: "50px", marginTop: "10px", marginLeft: "5px" }} />
                        <div style={{ display: "flex", height: "100%", placeItems: "center", fontSize: "20px", marginLeft: "20px", marginTop: "10px", color: "rgba(var(--semi-grey-9), 1)" }}><strong>爱发电</strong></div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default SupportUs;

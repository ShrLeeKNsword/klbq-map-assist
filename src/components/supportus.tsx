import { useState } from 'react';
import { Modal, Button, Typography, Divider } from '@douyinfe/semi-ui';
import { CiHeart } from "react-icons/ci";

interface SupportUsPops {
    name: string;
    Content?: JSX.Element;
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
                    <div><strong>卡拉彼丘地图助手</strong>是一款开源软件，</div>
                    <div>因此你可以免费在 GPL-3.0 开源协议的范畴下使用本软件。</div>
                    <div>美术资料与部分UI版权归原作者与官方所有，</div>
                    <div>请咨询对应作者与官方授权！</div>
                    <br />
                    <div>但即便如此，你的赞助也可以给予开发者前进的动力，让这个项目变得更好。</div>
                    <div>无论你使用何种形式赞助，你都可以在<strong>卡拉彼丘地图助手</strong>的 GitHub 项目主页和网站展示您的信息（个人主页、公司主页、GitHub 资料页等）。</div>
                    <div>如需展示，请在留言中留下需要展示的内容或将内容连同赞助收据发送至 <a href='mailto:fsltech@email.cn'>fsltech@email.cn</a></div>
                    <br />
                    <Divider margin='12px'/>
                    <div><Title heading={6}>International</Title></div>
                    <Divider margin='12px'/>
                    <div><Title heading={6}>中国境内</Title></div>
                </div>
            </Modal>
        </>
    );
};

export default SupportUs;

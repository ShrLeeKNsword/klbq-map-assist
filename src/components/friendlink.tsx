import { useState } from 'react';
import { Modal, Button, Typography, Divider, Row, Col } from '@douyinfe/semi-ui';
import { FaLink } from "react-icons/fa6";

interface FriendLinkPops {
    name: string;
    Content?: JSX.Element;
}

const friendlinkdata = {
    official:
        [{
            name: "",
            icon: <img style={{ height: "35px", filter: "brightness(1000%) drop-shadow(0 0 2px rgba(var(--semi-grey-7))" }} src='https://game.gtimg.cn/images/kq/m/web20230505/sec_ordlogo.png' />,
            url: "https://klbq.qq.com/",
        }, {
            name: "",
            icon: <img style={{ height: "22px", filter: "drop-shadow(0 0 2px rgba(var(--semi-grey-9))" }} src='https://klbq-web-cms.strinova.com/prod/strinova_static/home_v12/img/icon/logo-white.png' />,
            url: "https://www.strinova.com/",
        }],
    wiki:
        [{
            name: "",
            icon: <img style={{ height: "32px", filter: "drop-shadow(0 0 2px rgba(var(--semi-grey-9))" }} src='https://s2.loli.net/2024/10/01/NQTMvDZ5ah4omYR.png' />,
            url: "https://wiki.biligame.com/klbq/",
        }, {
            name: "",
            icon: <img style={{ height: "22px", filter: "drop-shadow(0 0 2px rgba(var(--semi-grey-1))" }} src='https://s2.loli.net/2024/10/01/R4UxmBPGd2f8kQ7.webp' />,
            url: "https://strinova.wiki.gg/wiki/Strinova_Wiki",
        }, {
            name: "Miraheze Meta",
            icon: <></>,
            url: "https://strinova.org/wiki/",
        }, {
            name: "日本語wiki",
            icon: <img style={{ height: "28px", filter: "drop-shadow(0 0 2px rgba(var(--semi-grey-1))", marginRight: "8px" }} src='https://w.atwiki.jp/common/_img/atwiki_logo_small.svg?t=741a51e81c8c8d5fe9627b874ecad193' />,
            url: "https://w.atwiki.jp/calabiyau_jp/",
        },],
    others:
        [{
            name: "自建房助手",
            icon: <img style={{ height: "35px", filter: "drop-shadow(0 0 2px rgba(var(--semi-grey-1))", marginRight: "8px" }} src='https://s2.loli.net/2024/10/01/pmYnw16rL2PQWBy.png' />,
            url: "https://klbq.fsltech.cn/",
        }],
    contact: {
        content: <div style={{ width: "100%", textAlign: "center" }}>
            添加友链请联系 <a href='mailto:fsltech@email.cn'>fsltech@email.cn</a>
        </div>
    }
}

const { Title } = Typography;

const FriendLink = (props: FriendLinkPops) => {
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
            <Button onClick={showDialog} style={{ marginLeft: "10px" }}><FaLink style={{ color: "rgba(var(--semi-grey-9), 1)", fontSize: "20px", marginRight: "5px" }} />{props.name}</Button>
            <Modal
                title={props.name}
                visible={visible}
                onOk={handleOk}
                afterClose={handleAfterClose} //>=1.16.0
                onCancel={handleCancel}
                closeOnEsc={true}
            >
                <div>
                    <Title heading={6}>官方</Title>
                    <Divider margin='12px' />
                    <Row gutter={[0, 10]} style={{ width: "100%", marginTop: "10px" }}>
                        {friendlinkdata.official.map((site) => {
                            return <Col span={12} style={{}}>
                                <Button size='large' type="tertiary" onClick={() => { open(site.url, "_blank") }} style={{ width: "90%" }}>
                                    {site.icon}{site.name}
                                </Button>
                            </Col>
                        })
                        }
                    </Row>
                    <br />
                    <Title heading={6}>Wiki</Title>
                    <Divider margin='12px' />
                    <Row gutter={[0, 10]} style={{ width: "100%", marginTop: "10px" }}>
                        {friendlinkdata.wiki.map((site) => {
                            return <Col span={12} style={{}}>
                                <Button size='large' type="tertiary" onClick={() => { open(site.url, "_blank") }} style={{ width: "90%" }}>
                                    {site.icon}{site.name}
                                </Button>
                            </Col>
                        })
                        }
                    </Row>
                    <br />
                    <Title heading={6}>其他</Title>
                    <Divider margin='12px' />
                    <Row gutter={[0, 10]} style={{ width: "100%", marginTop: "10px" }}>
                        {friendlinkdata.others.map((site) => {
                            return <Col span={12} style={{}}>
                                <Button size='large' type="tertiary" onClick={() => { open(site.url, "_blank") }} style={{ width: "90%" }}>
                                    {site.icon}{site.name}
                                </Button>
                            </Col>
                        })
                        }
                    </Row>
                    <br />
                    <Divider margin='12px' />
                    {friendlinkdata.contact.content}
                </div>
            </Modal>
        </>
    );
};

export default FriendLink;

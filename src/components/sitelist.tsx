import { useState } from 'react';
import { Modal, Button, Typography, Divider, Col, Row } from '@douyinfe/semi-ui';
import { CiCloudOn } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

interface SupportUsPops {
    name: string;
    Content?: JSX.Element;
}

const sitedata = {
    Global: [
        {
            icon: <><FaGithub style={{ color: "rgba(var(--semi-grey-9), 1)", fontSize: "20px", marginRight: "10px" }} /></>,
            content: "Github Page",
            url: "https://strinova.fsltech.cn/"
        }
    ],
    CN: [
        {
            icon: <></>,
            content: "腾讯云CDN -  上海 - 1",
            url: "https://sh-1.strinova.fsltech.cn/"
        },
        {
            icon: <></>,
            content: "腾讯云CDN - 香港 - 1",
            url: "https://hk-1.strinova.fsltech.cn/"
        }
    ],
}

const { Title } = Typography;

const SiteList = (props: SupportUsPops) => {
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
            <Button onClick={showDialog} style={{ marginLeft: "10px" }}><CiCloudOn style={{ color: "rgba(var(--semi-grey-9), 1)", fontSize: "20px", marginRight: "5px" }} />{props.name}</Button>
            <Modal
                title={props.name}
                visible={visible}
                onOk={handleOk}
                afterClose={handleAfterClose} //>=1.16.0
                onCancel={handleCancel}
                closeOnEsc={true}
            >
                <div>
                    <div>为了提供更快的访问速度以及减轻服务器压力，</div>
                    <div>我们开设了不同节点</div>
                    <br />
                    <Title heading={5}>Global</Title>
                    <Divider margin='12px' />
                    <Row style={{ width: "100%", marginTop: "10px" }}>
                        {sitedata.Global.map((site) => {
                            return <Col span={12} style={{}}>
                                <Button type="tertiary" onClick={() => { open(site.url, "_self") }} style={{ width: "90%" }}>
                                    {site.icon}{site.content}
                                </Button>
                            </Col>
                        })
                        }
                    </Row>
                    <br />
                    <Title heading={5}>中国节点</Title>
                    <Divider margin='12px' />
                    <Row style={{ width: "100%", marginTop: "10px" }}>
                        {sitedata.CN.map((site) => {
                            return <Col span={12} style={{}}>
                                <Button type="tertiary" onClick={() => { open(site.url, "_self") }} style={{ width: "90%" }}>
                                    {site.icon}{site.content}
                                </Button>
                            </Col>
                        })
                        }
                    </Row>
                    <br />
                </div>
            </Modal >
        </>
    );
};

export default SiteList;

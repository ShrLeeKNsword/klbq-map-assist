import { useState } from 'react';
import { Modal, Button, Typography, Divider, Col, Row } from '@douyinfe/semi-ui';
import { CiCloudOn } from "react-icons/ci";

interface SiteListForm {
    icon: JSX.Element | null | undefined
    content: string
    url: string
  }
  
  interface SiteListData {
    content: JSX.Element
    Global: Array<SiteListForm>
    CN: Array<SiteListForm>
  }
  

interface SiteListPops {
    name: string;
    content: SiteListData;
}

const { Title } = Typography;

const SiteList = (props: SiteListPops) => {
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
                    <Row gutter={[0, 12]} style={{ width: "100%", marginTop: "10px" }}>
                        {props.content.Global.map((site) => {
                            return <Col span={10} style={{ width: "50%" }}>
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
                    <Row gutter={[0, 12]} style={{ width: "100%", marginTop: "10px" }}>
                        {props.content.CN.map((site) => {
                            return <Col span={10} style={{ width: "50%" }}>
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

import { useState } from 'react';
import { Modal, Button, Typography, Divider, Row, Col } from '@douyinfe/semi-ui';
import { FaLink } from "react-icons/fa6";

interface FriendLinkForm {
    name: string
    icon: JSX.Element
    url: string
}

interface ClassifyForm {
    official: string
    wiki: string
    others: string
}

interface FriendLinkData {
    classify:ClassifyForm
    official: Array<FriendLinkForm>
    wiki: Array<FriendLinkForm>
    others: Array<FriendLinkForm>
    contact: {
        content: JSX.Element
    }
}


interface FriendLinkPops {
    name: string;
    content: FriendLinkData;
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
                    <Title heading={6}>{props.content.classify.official}</Title>
                    <Divider margin='12px' />
                    <Row gutter={[0, 10]} style={{ width: "100%", marginTop: "10px" }}>
                        {props.content.official.map((site) => {
                            return <Col span={12} style={{}}>
                                <Button size='large' type="tertiary" onClick={() => { open(site.url, "_blank") }} style={{ width: "90%" }}>
                                    {site.icon}{site.name}
                                </Button>
                            </Col>
                        })
                        }
                    </Row>
                    <br />
                    <Title heading={6}>{props.content.classify.wiki}</Title>
                    <Divider margin='12px' />
                    <Row gutter={[0, 10]} style={{ width: "100%", marginTop: "10px" }}>
                        {props.content.wiki.map((site) => {
                            return <Col span={12} style={{}}>
                                <Button size='large' type="tertiary" onClick={() => { open(site.url, "_blank") }} style={{ width: "90%" }}>
                                    {site.icon}{site.name}
                                </Button>
                            </Col>
                        })
                        }
                    </Row>
                    <br />
                    <Title heading={6}>{props.content.classify.others}</Title>
                    <Divider margin='12px' />
                    <Row gutter={[0, 10]} style={{ width: "100%", marginTop: "10px" }}>
                        {props.content.others.map((site) => {
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
                    {props.content.contact.content}
                </div>
            </Modal>
        </>
    );
};

export default FriendLink;

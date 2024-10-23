import { useState } from 'react';
import { Modal, Button, Typography, Divider, Col, Row } from '@douyinfe/semi-ui';

interface SupportUsListPops {
    name: string;
}

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

const SupportUsList = (props: SupportUsListPops) => {
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
            <Button onClick={showDialog} style={{ marginTop: "10px" }}>{props.name}</Button>
            <Modal
                title={props.name}
                visible={visible}
                onOk={handleOk}
                afterClose={handleAfterClose} //>=1.16.0
                onCancel={handleCancel}
                closeOnEsc={true}
            >
                <div>
                    <div><Title heading={6}>感谢以下赞助者：</Title></div>
                    <Divider margin='12px' />
                    <Row gutter={[0, 12]} style={{ width: "100%", marginTop: "10px" }}>
                        {supportlistdata.map((data) => {
                            return <Col span={6} style={{ width: "50%" }}>
                                <Button type="tertiary" onClick={() => { data.url ? open(data.url, "_blank") : "" }} style={{ width: "90%" }}>
                                    {data.name}
                                </Button>
                            </Col>
                        })
                        }
                    </Row>
                </div>
            </Modal>
        </>
    );
};

export default SupportUsList;

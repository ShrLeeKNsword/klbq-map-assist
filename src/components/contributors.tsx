import { Col, Row, Tag } from '@douyinfe/semi-ui';

const contributeList = [
    {
        job: ["code"],
        name: "ShrLeeKNsword",
        icon: "https://avatars.githubusercontent.com/u/83012768?v=4",
        github: "https://github.com/ShrLeeKNsword/",
        bili: "https://space.bilibili.com/403314450",
    },
    {
        job: ["code", "translation"],
        name: "MiekoHikari",
        icon: "https://avatars.githubusercontent.com/u/77004524?v=4",
        github: "https://github.com/MiekoHikari/",
        bili: "",
    },
]

const ContributeBox = () => {
    return <div style={{ maxHeight: "800px", width: "400px", paddingTop: "5px", paddingBottom: "5px" }}>
        <div style={{ height: "100%", width: "100%", overflowY: "scroll" }}>
            {contributeList.map((child) => {
                return <div style={{ height: "60px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", margin: "5px" }}>
                    <Row style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                        <Col span={6}><img src={child.icon} style={{ height: "50px", borderRadius: "50%", marginRight: "10px" }}></img></Col>
                        <Col span={8} style={{ textAlign: "left", fontSize: "15px", fontWeight: "bold" }}>
                            <div style={{ width: "100%" }}>{child.name}</div>
                            {child.job.map((childchild) => {
                                return <Tag size="small" color='light-blue' style={{ marginRight: "5px" }}>{childchild}</Tag>
                            }
                            )
                            }
                        </Col>
                        <Col span={10}>show social icon</Col>
                    </Row>
                </div>
            })}
        </div>
        <div style={{ fontSize: "15px", fontWeight: "bold", textAlign: 'center', display: "flex", alignItems: "center", justifyContent: "center", height: "30px", margin: "5px" }}>Learn More</div>
    </div>
}

export default ContributeBox;
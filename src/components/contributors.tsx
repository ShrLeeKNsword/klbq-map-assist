import { Col, Row, Tag } from '@douyinfe/semi-ui';
import { FaGithub, FaTwitch } from 'react-icons/fa';
import { FaBilibili, FaXTwitter } from "react-icons/fa6";

interface ContributeBoxPops {
    learnmore?: string;
}

const contributeList = [
    {
        job: ["sponser", "code"],
        name: "爱走位的KN",
        icon: "https://avatars.githubusercontent.com/u/83012768?v=4",
        github: "https://github.com/ShrLeeKNsword/",
        bili: "https://space.bilibili.com/403314450",
        X: "",
        twich: "",
    },
    {
        job: ["code", "translation"],
        name: "MiekoHikari",
        icon: "https://avatars.githubusercontent.com/u/77004524?v=4",
        github: "https://github.com/MiekoHikari/",
        bili: "",
        X: "",
        twich: "https://www.twitch.tv/miekohikari",
    },
    {
        job: ["translation"],
        name: "サルミナ(salutemenow)",
        icon: "https://s2.loli.net/2024/09/28/58XqieRV36aOCUx.webp",
        github: "",
        bili: "",
        X: "https://x.com/salutemenowjp",
        twich: "https://www.twitch.tv/salute_me_now_",
    },
]

const ContributeBox = (props: ContributeBoxPops) => {
    return <div style={{ maxHeight: "800px", width: "400px", paddingTop: "5px", paddingBottom: "5px" }}>
        <div style={{ height: "100%", width: "100%", overflowY: "scroll" }}>
            {contributeList.map((child) => {
                return <div style={{ height: "60px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", margin: "5px" }}>
                    <Row style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                        <Col span={1.5}></Col>
                        <Col span={4}><img src={child.icon} style={{ height: "50px", borderRadius: "50%", marginRight: "10px" }}></img></Col>
                        <Col span={10} style={{ textAlign: "left", fontSize: "15px", fontWeight: "bold" }}>
                            <div style={{ width: "100%", marginBottom: "3px", marginTop: "3px" }}>{child.name}</div>
                            {child.job.map((childchild) => {
                                return <Tag size="small" color='light-blue' style={{ marginRight: "5px", marginBottom: "2px", marginTop: "2px" }}>{childchild}</Tag>
                            })}
                        </Col>
                        <Col span={7} style={{ textAlign: "right", display: "flex", alignItems: "right", justifyContent: "right" }}>
                            {child.github != "" ? <a href={child.github} target='_blank' style={{ margin: "5px" }}><FaGithub /></a> : <div style={{ width: "25px", height: "100%", textAlign: "center", marginTop: "2px" }}>/</div>}
                            {child.bili != "" ? <a href={child.bili} target='_blank' style={{ margin: "5px" }}><FaBilibili /></a> : <div style={{ width: "25px", height: "100%", textAlign: "center", marginTop: "2px" }}>/</div>}
                            {child.X != "" ? <a href={child.X} target='_blank' style={{ margin: "5px" }}><FaXTwitter /></a> : <div style={{ width: "25px", height: "100%", textAlign: "center", marginTop: "2px" }}>/</div>}
                            {child.twich != "" ? <a href={child.twich} target='_blank' style={{ margin: "5px" }}><FaTwitch /></a> : <div style={{ width: "25px", height: "100%", textAlign: "center", marginTop: "2px" }}>/</div>}
                        </Col>
                        <Col span={1.5} style={{}}></Col>
                    </Row>
                </div>
            })}
        </div>
        {props.learnmore != "" || props.learnmore != undefined ? <div style={{ fontSize: "15px", fontWeight: "bold", textAlign: 'center', display: "flex", alignItems: "center", justifyContent: "center", height: "30px", margin: "5px" }}>{props.learnmore}</div> : <></>}
    </div>
}

export default ContributeBox;
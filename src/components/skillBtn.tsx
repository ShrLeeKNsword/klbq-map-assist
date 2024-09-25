import { Badge } from '@douyinfe/semi-ui';

interface SkillBtnPops {
    imglink?: string;
    badge?: string | null;
    top?: string;
    left?: string;
}

const draggableBtnStyle = {
    borderRadius: "100%",
    margin: "3px",
    width: "35px",
    height: "35px",
    display: 'flex',
    placeItems: 'center',
    placeContent: 'center',
    backgroundColor: "rgba(var(--semi-grey-0), 1)",
    boxShadow: "0 0 0 3px rgba(var(--semi-grey-1), 1)",
    overflow: "hidden",
}

const SkillBtn = (props: SkillBtnPops) => {
    return <>
        {props.badge != null ? <Badge count={props.badge} position='rightBottom' type={props.badge === '×' ? 'danger' : 'secondary'}><div style={draggableBtnStyle}><img src={props.imglink} style={{ width: '90%', height: '90%', marginTop: props.top, marginLeft: props.left }} /></div></Badge> : <div style={draggableBtnStyle}><img src={props.imglink} style={{ width: '90%', height: '90%', marginTop: props.top, marginLeft: props.left }} /></div>}
    </>
}

export default SkillBtn;
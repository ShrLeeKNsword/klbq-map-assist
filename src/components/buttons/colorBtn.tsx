interface ColorBtnPops {
    color?: string;
    linercolor?: string;
}

const ColorBtn = (props: ColorBtnPops) => {
    return <div style={{ backgroundColor: props.color,background:"linear-gradient(" + props.linercolor + ")", width: "24px", height: "24px", borderRadius: "100%", boxShadow: "0 0 0 3px rgba(var(--semi-grey-2), 1)", }}></div>
}

export default ColorBtn;
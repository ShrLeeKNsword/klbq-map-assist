import { IconEdit } from '@douyinfe/semi-icons';
import { Popover, Slider } from '@douyinfe/semi-ui';
import React from 'react';

interface StandardButtonProps {
	icon: typeof IconEdit;
	penWidth: number;
	setpenWidth: React.Dispatch<React.SetStateAction<number>>;
	penColor: string;
	isActiveTool: boolean;
	onClick: () => void;
}

const canvasToolButtonStyle = {
	borderRadius: "100%",
	margin: "5px",
	width: "50px",
	height: "50px",
	display: 'flex',
	placeItems: 'center',
	placeContent: 'center',
	backgroundColor: "rgba(var(--semi-grey-0), 1)",
	boxShadow: "0 0 0 3px rgba(var(--semi-grey-1), 1)",
	marginTop: "35px",
}

const activeCanvasToolButtonStyle = {
	borderRadius: "100%",
	margin: "5px",
	width: "50px",
	height: "50px",
	display: 'flex',
	placeItems: 'center',
	placeContent: 'center',
	backgroundColor: "rgba(var(--semi-green-0), 1)",
	boxShadow: "0 0 0 3px rgba(var(--semi-grey-1), 1)",
	marginTop: "35px",
}

const StandardButton: React.FC<StandardButtonProps> = (props) => {
	const markPlate = <div className="grid grid-flex" style={{ width: "280px", height: "50px", display: "flex", justifyContent: "space-around" }}>
		<Slider style={{ marginTop: "8px", marginLeft: "10px", width: "200px" }} min={1} max={5} defaultValue={props.penWidth} onChange={(value) => { props.setpenWidth(value as number) }}></Slider>
		<div style={{ borderRadius: "100%", margin: "auto", width: props.penWidth, height: props.penWidth, display: 'flex', placeItems: 'center', placeContent: 'center', backgroundColor: props.penColor, overflow: "hidden" }}></div>
	</div>;

	return (
		<Popover
			content={markPlate}
			position={"left"}
		>
			<div style={props.isActiveTool ? activeCanvasToolButtonStyle : canvasToolButtonStyle} onClick={props.onClick}>
				<props.icon size='extra-large' />
			</div>
		</Popover>
	);
};

export default StandardButton;
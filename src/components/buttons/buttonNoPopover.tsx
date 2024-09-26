import React from 'react';
import { GiArrowCursor } from 'react-icons/gi';

interface StandardButtonProps {
	icon: typeof GiArrowCursor;
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
	return (
		<div style={props.isActiveTool ? activeCanvasToolButtonStyle : canvasToolButtonStyle} onClick={props.onClick}>
			<props.icon size='2rem' />
		</div>
	);
};

export default StandardButton;
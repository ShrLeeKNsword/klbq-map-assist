import React from 'react';
import { Pikaso, type BaseShapes } from 'pikaso';

interface PikasoMapProps {
	pikasoRef: React.RefObject<HTMLDivElement>;
	pikasoEditor: Pikaso<BaseShapes> | null;
	currentMap: string;
}

const PikasoMap: React.FC<PikasoMapProps> = ({ pikasoRef, pikasoEditor, currentMap }) => {

	// ! 295 is a static offset tested by @MiekoHikari on a 1920 x 1080 screen
	pikasoEditor?.board.background.setImageFromUrl(currentMap, {
		size: 'contain',
		x: (pikasoEditor?.board.stage.width() / 2) - 295,
	});

	return (
		<div ref={pikasoRef} style={{ width: '100%', height: '600px' }} className='pikaso'>
		</div >
	);
};

export default PikasoMap;
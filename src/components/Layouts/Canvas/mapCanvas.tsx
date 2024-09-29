import React, { useLayoutEffect } from 'react'
import { Pikaso, type BaseShapes } from 'pikaso'

interface PikasoMapProps {
  pikasoRef: React.RefObject<HTMLDivElement>
  pikasoEditor: Pikaso<BaseShapes> | null
  currentMap: string
  style?: React.CSSProperties
}

const MapCanvas: React.FC<PikasoMapProps> = ({ pikasoRef, pikasoEditor, currentMap, style }) => {
  useLayoutEffect(() => {
    // ! 295 is a static offset tested by @MiekoHikari on a 1920 x 1080 screen
    pikasoEditor?.board.background.setImageFromUrl(currentMap, {
      size: 'contain',
      x: pikasoEditor?.board.stage.width() / 2 - 295
    })
  }, [currentMap, pikasoEditor?.board.background, pikasoEditor?.board.stage])

  return (
    <div
      ref={pikasoRef}
      style={{ ...style, width: '100%', height: '100%', minHeight: '600px' }}
      className='pikaso'></div>
  )
}

export default MapCanvas

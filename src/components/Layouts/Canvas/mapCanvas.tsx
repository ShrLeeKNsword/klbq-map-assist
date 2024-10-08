import React, { useLayoutEffect } from 'react'
import { Pikaso, type BaseShapes } from 'pikaso'
import { MapName } from '../../../data/maplist'

interface PikasoMapProps {
  pikasoRef: React.RefObject<HTMLDivElement>
  pikasoEditor: Pikaso<BaseShapes> | null
  setCurrentMap: React.Dispatch<React.SetStateAction<MapName>>
  currentMap: string
  style?: React.CSSProperties
}

const MapCanvas: React.FC<PikasoMapProps> = ({ pikasoRef, pikasoEditor, currentMap, style, setCurrentMap }) => {
  useLayoutEffect(() => {
    const image = new Image()
    image.src = currentMap

    image.onload = () => {
      const scale = image.height / pikasoEditor!.board.stage.height()
      pikasoEditor?.board.background.setImageFromUrl(currentMap, {
        size: 'contain',
        x: pikasoEditor.board.stage.width() / 2 - image.width / 2 / scale
      })
    }
  }, [currentMap, setCurrentMap, pikasoEditor, pikasoEditor?.board.background, pikasoEditor?.board.stage])

  return (
    <div
      ref={pikasoRef}
      style={{ ...style, width: '100%', height: '100%', minHeight: '600px' }}
      className='drawMap'></div>
  )
}

export default MapCanvas

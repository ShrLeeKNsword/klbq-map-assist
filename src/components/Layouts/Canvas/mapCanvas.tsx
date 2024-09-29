import React, { useLayoutEffect } from 'react'
import { Konva, Pikaso, type BaseShapes } from 'pikaso'
import { characterData } from '../../../data/characters'

interface PikasoMapProps {
  pikasoRef: React.RefObject<HTMLDivElement>
  pikasoEditor: Pikaso<BaseShapes> | null
  currentMap: string
  style?: React.CSSProperties
}

const MapCanvas: React.FC<PikasoMapProps> = ({ pikasoRef, pikasoEditor, currentMap, style }) => {
  useLayoutEffect(() => {
    const image = new Image()
    image.src = currentMap

    pikasoEditor?.shapes.image.insert(characterData['Celestia'].imageLink, {
      cornerRadius: 10,
      fill: 'red',
      width: 50,
      height: 50
    })
    image.onload = () => {
      const scale = image.height / pikasoEditor!.board.stage.height()
      pikasoEditor?.board.background.setImageFromUrl(currentMap, {
        size: 'contain',
        x: pikasoEditor.board.stage.width() / 2 - image.width / 2 / scale
      })
    }
  }, [currentMap, pikasoEditor, pikasoEditor?.board.background, pikasoEditor?.board.stage])

  return (
    <div
      ref={pikasoRef}
      style={{ ...style, width: '100%', height: '100%', minHeight: '600px' }}
      className='pikaso'></div>
  )
}

export default MapCanvas

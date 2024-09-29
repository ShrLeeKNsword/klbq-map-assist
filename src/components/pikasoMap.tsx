import React, { useLayoutEffect } from 'react'
import { DrawType, Pikaso, type BaseShapes } from 'pikaso'
import { mapTools } from '../utils/canvasConstants'

interface PikasoMapProps {
  pikasoRef: React.RefObject<HTMLDivElement>
  pikasoEditor: Pikaso<BaseShapes> | null
  currentMap: string
  penColor: string
  canvasTool: mapTools
  penWidth: number
  lineWidth: number
}

const PikasoMap: React.FC<PikasoMapProps> = ({
  pikasoRef,
  pikasoEditor,
  currentMap,
  penColor,
  canvasTool,
  penWidth,
  lineWidth
}) => {
  // ! 295 is a static offset tested by @MiekoHikari on a 1920 x 1080 screen

  useLayoutEffect(() => {
    pikasoEditor?.board.background.setImageFromUrl(currentMap, {
      size: 'contain',
      x: pikasoEditor?.board.stage.width() / 2 - 295
    })

    switch (canvasTool) {
      case DrawType.Line:
        pikasoEditor?.shapes.line.draw({
          stroke: penColor,
          strokeWidth: lineWidth
        })
        break
      case DrawType.Pencil:
        pikasoEditor?.shapes.pencil.draw({
          stroke: penColor,
          strokeWidth: penWidth
        })
        break
      case 'SELECT':
        pikasoEditor?.shapes.pencil.stopDrawing()

        break
    }
  })

  const handleCanvasMouseDown = () => {
    switch (canvasTool) {
      case DrawType.Line:
        pikasoEditor?.shapes.line.stopDrawing()
        pikasoEditor?.shapes.line.draw({
          stroke: penColor,
          strokeWidth: lineWidth
        })
        break
      case DrawType.Pencil:
        pikasoEditor?.shapes.pencil.stopDrawing()
        pikasoEditor?.shapes.pencil.draw({
          stroke: penColor,
          strokeWidth: penWidth
        })
        break
      case 'SELECT':
        pikasoEditor?.shapes.pencil.stopDrawing()
        break
    }
  }

  return (
    <div
      ref={pikasoRef}
      style={{ width: '100%', height: '100%', minHeight: '600px' }}
      className='pikaso'
      onClick={handleCanvasMouseDown}></div>
  )
}

export default PikasoMap

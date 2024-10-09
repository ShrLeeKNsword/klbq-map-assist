import React, { useLayoutEffect } from 'react'
import { DrawType, Pikaso, type BaseShapes } from 'pikaso'
import { mapTools } from '../../../utils/canvasConstants'
import { characterRegistry } from '../../../data/characters/characterRegistry'

interface PikasoMapProps {
  pikasoRef: React.RefObject<HTMLDivElement>
  pikasoEditor: Pikaso<BaseShapes> | null
  currentMap: string
  penColor: string
  canvasTool: mapTools
  penWidth: number
  lineWidth: number
  characterRegistry: characterRegistry | null
}

const DrawMap: React.FC<PikasoMapProps> = ({
  pikasoRef,
  pikasoEditor,
  currentMap,
  penColor,
  canvasTool,
  penWidth,
  lineWidth,
  characterRegistry
}) => {
  useLayoutEffect(() => {
    switch (canvasTool) {
      case DrawType.Arrow:
        pikasoEditor?.shapes.arrow.draw({
          stroke: penColor,
          strokeWidth: lineWidth
        })
        break
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
  }, [
    currentMap,
    penColor,
    canvasTool,
    penWidth,
    lineWidth,
    pikasoEditor?.board.background,
    pikasoEditor?.board.stage,
    pikasoEditor?.shapes.line,
    pikasoEditor?.shapes.pencil,
    pikasoEditor?.shapes.arrow
  ])

  const handleCanvasMouseDown = () => {
    switch (canvasTool) {
      case DrawType.Line:
        pikasoEditor?.shapes.line.stopDrawing()
        pikasoEditor?.shapes.line.draw({
          stroke: penColor,
          strokeWidth: lineWidth
        })
        break
      case DrawType.Arrow:
        pikasoEditor?.shapes.arrow.stopDrawing()
        pikasoEditor?.shapes.arrow.draw({
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

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const character = e.dataTransfer.getData('character')
    const side = e.dataTransfer.getData('side')

    const char = characterRegistry![character]
    const imgLink = side === 'attack' ? char.attack!.canvasImage : char.defense!.canvasImage

    const rect = pikasoRef.current?.getBoundingClientRect()

    const img = new Image()
    img.src = imgLink
    img.onload = () => {
      const size = 35
      const ratio = img.width / img.height

      pikasoEditor?.shapes.image.insert(imgLink, {
        x: e.clientX - rect!.left - size / 2,
        y: e.clientY - rect!.top - size / 2,
        width: size * ratio,
        height: size
      })
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <div
      ref={pikasoRef}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', minHeight: '600px' }}
      className='drawCanvas'
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
      onClick={handleCanvasMouseDown}></div>
  )
}

export default DrawMap

import React, { useLayoutEffect } from 'react'
import { DrawType, Pikaso, type BaseShapes } from 'pikaso'
import { mapTools } from '../../../utils/canvasConstants'

interface PikasoMapProps {
  pikasoRef: React.RefObject<HTMLDivElement>
  pikasoEditor: Pikaso<BaseShapes> | null
  currentMap: string
  penColor: string
  canvasTool: mapTools
  penWidth: number
  lineWidth: number
  load: React.Dispatch<React.SetStateAction<void>>
}

const DrawMap: React.FC<PikasoMapProps> = ({
  pikasoRef,
  pikasoEditor,
  currentMap,
  penColor,
  canvasTool,
  penWidth,
  lineWidth,
  load
}) => {
  const rescaleEditor = () => {
    if (!pikasoEditor) return
    const scaleSize = 1000
    pikasoEditor?.board.stage.setSize({width: scaleSize, height: scaleSize}) 
    pikasoEditor?.board.rescale()
  }

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
    rescaleEditor()
    window.addEventListener('resize', rescaleEditor)
    return () => {
      window.removeEventListener('resize', rescaleEditor)
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
    const imgLink = e.dataTransfer.getData("imageLink")
    const action = e.dataTransfer.getData("action")
    if(imgLink) {
      const img = new Image()
      img.src = imgLink
      img.onload = () => {
        const size = 35
        const ratio = img.width / img.height
  
        const rect = (e.target as HTMLCanvasElement)?.getBoundingClientRect()
        const pikasoSize = pikasoEditor?.board.stage.getSize()
        const scale = { x: pikasoSize!.width / rect!.width, y: pikasoSize!.height / rect!.height }
        const diff = { x: e.clientX - rect!.left, y: e.clientY - rect!.top }
        const imgPos = { x: diff.x * scale.x, y: diff.y * scale.y }
  
        pikasoEditor?.shapes.image.insert(imgLink, {
          x: imgPos.x - size / 2,
          y: imgPos.y - size / 2,
          width: size * ratio,
          height: size
        })
      }
    } else if (action == 'addText') {
      const rect = (e.target as HTMLCanvasElement)?.getBoundingClientRect()
      const pikasoSize = pikasoEditor?.board.stage.getSize()
      const scale = { x: pikasoSize!.width / rect!.width, y: pikasoSize!.height / rect!.height }
      const diff = { x: e.clientX - rect!.left, y: e.clientY - rect!.top }
      const textPos = { x: diff.x * scale.x, y: diff.y * scale.y }

      const label = pikasoEditor?.shapes.label.insert({
        container: {
          x: textPos.x,
          y: textPos.y
        },
        text: {
          text: 'Type here',
          fill: penColor,
          fontSize: lineWidth * 16
        }
      })
      label?.select()
    } else if(e.dataTransfer.files[0]?.type == 'application/json') {
      let reader = new FileReader();
      reader.onload = function(re) {
        const json = JSON.parse(re.target!.result as string);
        load(json)
      };
      reader.readAsText(e.dataTransfer.files[0]);
      e.preventDefault()
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <div
      ref={pikasoRef}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      className='drawCanvas'
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
      onClick={handleCanvasMouseDown}></div>
  )
}

export default DrawMap

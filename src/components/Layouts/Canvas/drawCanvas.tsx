import React, { useLayoutEffect } from 'react'
import { DrawType, Pikaso, type BaseShapes } from 'pikaso'
import { mapTools } from '../../../utils/canvasConstants'
import { getDragValue, setDragValue } from '../../../data/dragAndDrop.ts'

interface PikasoMapProps {
  pikasoRef: React.RefObject<HTMLDivElement>
  pikasoEditor: Pikaso<BaseShapes> | null
  currentMap: string
  penColor: string
  canvasTool: mapTools
  setTool: React.Dispatch<React.SetStateAction<mapTools>>
  penWidth: number
  lineWidth: number
  fontSize: number
  panelcollaps: boolean
  load: React.Dispatch<React.SetStateAction<void>>
}

const DrawMap: React.FC<PikasoMapProps> = ({
  pikasoRef,
  pikasoEditor,
  currentMap,
  penColor,
  canvasTool,
  setTool,
  penWidth,
  lineWidth,
  fontSize,
  panelcollaps,
  load
}) => {
  let rescaleTO: any
  const rescaleEditor = (timeout: number = 0) => {
    clearTimeout(rescaleTO)
    rescaleTO = setTimeout(() => {
      requestAnimationFrame(() => {
        if (!pikasoEditor) return
        const scaleSize = 1000
        pikasoEditor?.board.stage.setSize({width: scaleSize, height: scaleSize}) 
        pikasoEditor?.board.rescale()
      })
    },timeout)
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
      case 'TEXT':
        pikasoEditor?.shapes.pencil.stopDrawing()
        break
    }
    rescaleEditor()
    window.addEventListener('resize', ()=>rescaleEditor())
    return () => {
      window.removeEventListener('resize', ()=>rescaleEditor())
    }
  }, [
    currentMap,
    penColor,
    canvasTool,
    setTool,
    penWidth,
    lineWidth,
    fontSize,
    pikasoEditor?.board.background,
    pikasoEditor?.board.stage,
    pikasoEditor?.shapes.line,
    pikasoEditor?.shapes.pencil,
    pikasoEditor?.shapes.arrow,
  ])

  useLayoutEffect(() => {
    rescaleEditor(100)
  }, [panelcollaps])

  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
      case 'TEXT':
        pikasoEditor?.shapes.pencil.stopDrawing()
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
            fontSize: fontSize * 16
          }
        })
        label?.select()
        setTool('SELECT')
        break
    }
  }

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>| any) => {
    const dragValue = getDragValue()
    const imgLink = dragValue?.type == 'imageLink' ? dragValue.value : null
    if(imgLink) {
      const img = new Image()
      img.src = imgLink
      img.onload = () => {
        const size = 35
        const ratio = img.width / img.height

        const clientPos = e.clientX ? e : e.changedTouches[0]
        const rect = (e.target as HTMLCanvasElement)?.getBoundingClientRect()
        const pikasoSize = pikasoEditor?.board.stage.getSize()
        const scale = { x: pikasoSize!.width / rect!.width, y: pikasoSize!.height / rect!.height }
        const diff = { x: clientPos.clientX - rect!.left, y: clientPos.clientY - rect!.top }
        const imgPos = { x: diff.x * scale.x, y: diff.y * scale.y }
  
        pikasoEditor?.shapes.image.insert(imgLink, {
          x: imgPos.x - size / 2,
          y: imgPos.y - size / 2,
          width: size * ratio,
          height: size
        })
      }
    } else if(e.dataTransfer && e.dataTransfer.files[0]?.type == 'application/json') {
      let reader = new FileReader();
      reader.onload = function(re) {
        const json = JSON.parse(re.target!.result as string);
        load(json)
      };
      reader.readAsText(e.dataTransfer.files[0]);
      e.preventDefault()
    }
    setDragValue(null)
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
      onTouchEnd={handleOnDrop}
      onDragOver={handleDragOver}
      onClick={handleCanvasMouseDown}></div>
  )
}

export default DrawMap

import React, { useContext, useLayoutEffect } from 'react'
import { mapTools } from '../../utils/canvasConstants'
import Pikaso, { BaseShapes, DrawType } from 'pikaso'
import { MdDelete, MdDeleteForever, MdDraw, MdRedo, MdUndo } from 'react-icons/md'
import ToolPopoverButton from './Buttons/tool-popover-button'
import ToolTextPopoverButton from './Buttons/tool-popover-text-button'
import ColorPopover from './Popovers/ColorPopover'
import { FaMousePointer, FaUpload, FaDownload } from 'react-icons/fa'
import { RxText } from "react-icons/rx"
import ToolNormalButton from './Buttons/tool-normal-button'
import { PiArrowRightFill, PiLineSegmentFill } from 'react-icons/pi'
import ToolColorButton from './Buttons/tool-color-button'
import { Popconfirm, Toast } from '@douyinfe/semi-ui'
import { RiScreenshot2Fill } from "react-icons/ri";
import html2canvas from 'html2canvas'
import { LanguageContext } from '../../contexts/LanguageContext.ts'

interface SiderToolsProps {
  setTool: React.Dispatch<React.SetStateAction<mapTools>>
  canvasTool: mapTools
  setpenWidth: React.Dispatch<React.SetStateAction<number>>
  penWidth: number
  lineWidth: number
  setLineWidth: React.Dispatch<React.SetStateAction<number>>
  fontSize: number
  setFontSize: React.Dispatch<React.SetStateAction<number>>
  penColor: string
  editor: Pikaso<BaseShapes> | null
  setPenColor: React.Dispatch<React.SetStateAction<string>>
  colors: Array<string>
  setColors: React.Dispatch<React.SetStateAction<Array<string>>>
  selectedColor: number
  setSelectedColor: React.Dispatch<React.SetStateAction<number>>
  save: React.Dispatch<React.SetStateAction<void>>
  load: React.Dispatch<React.SetStateAction<void>>
}

const SiderTools: React.FC<SiderToolsProps> = ({
  canvasTool,
  setTool,
  setpenWidth,
  penWidth,
  penColor,
  lineWidth,
  setLineWidth,
  fontSize,
  setFontSize,
  editor,
  setPenColor,
  colors,
  setColors,
  selectedColor,
  setSelectedColor,
  save,
  load,
}) => {
  const [togglevisible, setToggleVisible] = React.useState(false)
  const [selection, setSelection] = React.useState(false)

  const currentLanguage = useContext(LanguageContext)

  editor?.on('selection:change', (selection) => {
    if (selection.shapes!.length > 0) {
      setSelection(true)
    } else {
      setSelection(false)
    }
  })

  const refSelect = React.useRef<HTMLSpanElement>(null)
  const refDraw = React.useRef<HTMLSpanElement>(null)
  const refEdge = React.useRef<HTMLSpanElement>(null)
  const refArrow = React.useRef<HTMLSpanElement>(null)
  const refText = React.useRef<HTMLSpanElement>(null)
  const refImageSave = React.useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const bindGlobalHotKeys = (e: KeyboardEvent) => {
      if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && e.code === 'KeyS') { (refSelect.current?.firstChild as HTMLElement).click() }
      else if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && e.code === 'KeyD') { (refDraw.current?.firstChild as HTMLElement).click() }
      else if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && e.code === 'KeyE') { (refEdge.current?.firstChild as HTMLElement).click() }
      else if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && e.code === 'KeyA') { (refArrow.current?.firstChild as HTMLElement).click() }
      else if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && e.code === 'KeyT') { (refText.current?.firstChild as HTMLElement).click() }
      else if ((e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey && e.code === 'KeyI') { e.preventDefault(); (refImageSave.current?.firstChild as HTMLElement).click() }
      else if ((e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey && e.code === 'KeyS') { e.preventDefault(); save() }
      else if ((e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey && e.code === 'KeyO') { e.preventDefault(); load() }
    }
    document.body.addEventListener('keydown', bindGlobalHotKeys)
    return () => {
      document.body.removeEventListener('keydown', bindGlobalHotKeys)
    }
  }, [])

  return (
    <div>
      <span ref={refSelect}>
        <ToolNormalButton
          Icon={FaMousePointer}
          isActiveTool={canvasTool === 'SELECT'}
          onClick={() => setTool('SELECT')}
        />
      </span>
      <span ref={refDraw}>
        <ToolPopoverButton
          icon={MdDraw}
          isActiveTool={canvasTool === DrawType.Pencil}
          onClick={() => setTool(DrawType.Pencil)}
          penWidth={penWidth}
          setpenWidth={setpenWidth}
          penColor={penColor}
        />
      </span>
      <span ref={refEdge}>
        <ToolPopoverButton
          icon={PiLineSegmentFill}
          isActiveTool={canvasTool === DrawType.Line}
          onClick={() => setTool(DrawType.Line)}
          penWidth={lineWidth}
          setpenWidth={setLineWidth}
          penColor={penColor}
        />
      </span>
      <span ref={refArrow}>
        <ToolPopoverButton
          icon={PiArrowRightFill}
          isActiveTool={canvasTool === DrawType.Arrow}
          onClick={() => setTool(DrawType.Arrow)}
          penWidth={lineWidth}
          setpenWidth={setLineWidth}
          penColor={penColor}
        />
      </span>
      <span ref={refText}>
        <ToolTextPopoverButton
          icon={RxText}
          isActiveTool={canvasTool === 'TEXT'}
          onClick={() => setTool('TEXT')}
          penWidth={fontSize}
          setpenWidth={setFontSize}
          penColor={penColor}
        />
      </span>
      <ColorPopover 
        setPenColor={setPenColor}
        colors={colors}
        setColors={setColors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        >
        <div
          style={{
            width: '4rem',
            height: '4rem',
            backgroundColor: 'var(--semi-color-tertiary-light-hover)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}>
          <ToolColorButton color={penColor} onClick={() => undefined} text={penColor} />
        </div>
      </ColorPopover>
      <ToolNormalButton Icon={MdUndo} isActiveTool={false} onClick={() => editor?.undo()} />
      <ToolNormalButton Icon={MdRedo} isActiveTool={false} onClick={() => editor?.redo()} />
      <Popconfirm
        visible={togglevisible}
        title={currentLanguage.markbox.clearwarning.title}
        content={currentLanguage.markbox.clearwarning.content}
        okText={currentLanguage.markbox.clearwarning.ok}
        cancelText={currentLanguage.markbox.clearwarning.cancel}
        onConfirm={() => {
          editor?.reset()
          setToggleVisible(!togglevisible)
          Toast.success(currentLanguage.markbox.clearwarning.success)
        }}
        onCancel={() => {
          setToggleVisible(!togglevisible)
        }}
        position='left'>
        <ToolNormalButton
          Icon={selection ? MdDelete : MdDeleteForever}
          typeOverride={selection ? 'secondary' : 'danger'}
          isActiveTool={false}
          onClick={() => (selection ? editor?.selection.delete() : setToggleVisible(!togglevisible))}
        />
      </Popconfirm>
      <span ref={refImageSave}>
        <ToolNormalButton Icon={RiScreenshot2Fill} isActiveTool={false} onClick={() => {
          const MarkingCanvas = document.querySelector("#capture") as HTMLElement
          /*
          let Ink = document.createElement("span")
          Ink.appendChild(document.createTextNode("Strinova Map Assist"))
          Ink.style.position = "absolute"
          Ink.style.bottom = "0"
          Ink.style.fontSize = "50px"
          Ink.style.opacity = "0.5"
          Ink.style.margin = "10px"
          MarkingCanvas.appendChild(Ink)
          */
          html2canvas(MarkingCanvas).then(canvas => {
            const Presentdate = new Date()
            const imgData = canvas
            const link = document.createElement('a')
            link.href = imgData.toDataURL()
            const presenttime = Presentdate.getFullYear().toString() + (Presentdate.getMonth() + 1 < 10 ? "0" : "") + (Presentdate.getMonth() + 1).toString() + (Presentdate.getDate() < 10 ? "0" : "") + Presentdate.getDate().toString() + Presentdate.getHours().toString() + Presentdate.getMinutes().toString() + Presentdate.getSeconds().toString()
            link.download = 'SMA_' + presenttime + '.png'
            link.click()
          })
        }} />
      </span>
      <ToolNormalButton Icon={FaUpload} isActiveTool={false} onClick={() => { load() }} />
      <ToolNormalButton Icon={FaDownload} isActiveTool={false} onClick={() => { save() }} />
    </div>
  )
}

export default SiderTools

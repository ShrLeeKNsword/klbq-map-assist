import React from 'react'
import { mapTools } from '../../utils/canvasConstants'
import Pikaso, { BaseShapes, DrawType } from 'pikaso'
import { MdDelete, MdDeleteForever, MdDraw, MdUndo } from 'react-icons/md'
import ToolPopoverButton from './Buttons/tool-popover-button'
import ColorPopover from './Popovers/ColorPopover'
import { FaMousePointer } from 'react-icons/fa'
import ToolNormalButton from './Buttons/tool-normal-button'
import { PiArrowRightFill, PiLineSegmentFill } from 'react-icons/pi'
import ToolColorButton from './Buttons/tool-color-button'
import { Popconfirm, Toast } from '@douyinfe/semi-ui'
import { I18nData } from '../../data/i18n'

interface SiderToolsProps {
  currentLanguage: I18nData
  setTool: React.Dispatch<React.SetStateAction<mapTools>>
  canvasTool: mapTools
  setpenWidth: React.Dispatch<React.SetStateAction<number>>
  penWidth: number
  lineWidth: number
  setLineWidth: React.Dispatch<React.SetStateAction<number>>
  penColor: string
  editor: Pikaso<BaseShapes> | null
  setPenColor: React.Dispatch<React.SetStateAction<string>>
}

const SiderTools: React.FC<SiderToolsProps> = ({
  canvasTool,
  setTool,
  setpenWidth,
  penWidth,
  penColor,
  lineWidth,
  setLineWidth,
  editor,
  setPenColor,
  currentLanguage
}) => {
  const [togglevisible, setToggleVisible] = React.useState(false)
  const [selection, setSelection] = React.useState(false)

  editor?.on('selection:change', (selection) => {
    if (selection.shapes!.length > 0) {
      setSelection(true)
    } else {
      setSelection(false)
    }
  })

  return (
    <div>
      <ToolNormalButton
        Icon={FaMousePointer}
        isActiveTool={canvasTool === 'SELECT'}
        onClick={() => setTool('SELECT')}
      />
      <ToolPopoverButton
        icon={MdDraw}
        isActiveTool={canvasTool === DrawType.Pencil}
        onClick={() => setTool(DrawType.Pencil)}
        penWidth={penWidth}
        setpenWidth={setpenWidth}
        penColor={penColor}
      />
      <ToolPopoverButton
        icon={PiLineSegmentFill}
        isActiveTool={canvasTool === DrawType.Line}
        onClick={() => setTool(DrawType.Line)}
        penWidth={lineWidth}
        setpenWidth={setLineWidth}
        penColor={penColor}
      />
      <ToolPopoverButton
        icon={PiArrowRightFill}
        isActiveTool={canvasTool === DrawType.Arrow}
        onClick={() => setTool(DrawType.Arrow)}
        penWidth={lineWidth}
        setpenWidth={setLineWidth}
        penColor={penColor}
      />
      <ColorPopover setPenColor={setPenColor}>
        <div
          style={{
            width: '4rem',
            height: '4rem',
            backgroundColor: 'var(--semi-color-bg-3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}>
          <ToolColorButton color={penColor} onClick={() => undefined} key={penColor} />
        </div>
      </ColorPopover>
      <ToolNormalButton Icon={MdUndo} isActiveTool={false} onClick={() => editor?.undo()} />
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
    </div>
  )
}

export default SiderTools

import React from 'react'
import { mapTools } from '../../utils/canvasConstants'
import Pikaso, { BaseShapes, DrawType } from 'pikaso'
import { MdDraw, MdUndo } from 'react-icons/md'
import ToolPopoverButton from './Buttons/tool-popover-button'
import ColorPopover from './Popovers/ColorPopover'
import { FaMousePointer } from 'react-icons/fa'
import ToolNormalButton from './Buttons/tool-normal-button'
import { PiLineSegmentFill } from 'react-icons/pi'
import ToolColorButton from './Buttons/tool-color-button'

interface SiderToolsProps {
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
  setPenColor
}) => {
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
      <ToolNormalButton
        Icon={MdUndo}
        isActiveTool={false}
        onClick={() => (editor!.history.getStep() > 1 ? editor?.undo() : undefined)}
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
    </div>
  )
}

export default SiderTools

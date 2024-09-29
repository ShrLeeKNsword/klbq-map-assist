import React from 'react'
import { mapTools } from '../../utils/canvasConstants'
import { DrawType } from 'pikaso'
import { MdDraw } from 'react-icons/md'
import ToolPopoverButton from './Buttons/tool-popover-button'
import ColorPopover from './Popovers/ColorPopover'
import { FaMousePointer } from 'react-icons/fa'
import ToolNormalButton from './Buttons/tool-normal-button'

interface SiderToolsProps {
  setTool: React.Dispatch<React.SetStateAction<mapTools>>
  canvasTool: mapTools
  setpenWidth: React.Dispatch<React.SetStateAction<number>>
  penWidth: number
  penColor: string
}

const SiderTools: React.FC<SiderToolsProps> = ({ canvasTool, setTool, setpenWidth, penWidth, penColor }) => {
  return (
    <div>
      <ColorPopover>
        <ToolNormalButton
          Icon={FaMousePointer}
          isActiveTool={canvasTool === 'SELECT'}
          onClick={() => setTool('SELECT')}
        />
      </ColorPopover>
      <ToolPopoverButton
        icon={MdDraw}
        isActiveTool={canvasTool === DrawType.Pencil}
        onClick={() => setTool(DrawType.Pencil)}
        penWidth={penWidth}
        setpenWidth={setpenWidth}
        penColor={penColor}
      />
    </div>
  )
}

export default SiderTools

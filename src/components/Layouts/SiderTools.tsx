import React from 'react'
import { FaMousePointer } from 'react-icons/fa'
import { mapTools } from '../../utils/canvasConstants'
import StandardButton from '../buttons/buttonNoPopover'
import { DrawType } from 'pikaso'
import { MdDraw } from 'react-icons/md'

interface SiderToolsProps {
  setTool: React.Dispatch<React.SetStateAction<mapTools>>
  canvasTool: mapTools
}

const SiderTools: React.FC<SiderToolsProps> = ({ canvasTool, setTool }) => {
  return (
    <div>
      <StandardButton icon={FaMousePointer} isActiveTool={canvasTool === 'SELECT'} onClick={() => setTool('SELECT')} />
      <StandardButton
        icon={MdDraw}
        isActiveTool={canvasTool === DrawType.Pencil}
        onClick={() => setTool(DrawType.Pencil)}
      />
    </div>
  )
}

export default SiderTools

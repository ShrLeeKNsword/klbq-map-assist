import { Popover } from '@douyinfe/semi-ui'
import React from 'react'
import { colorPalette } from '../../../utils/canvasConstants'
import ToolColorButton from '../Buttons/tool-color-button'

interface ColorPopoverProps {
  children: React.ReactNode
  setPenColor: React.Dispatch<React.SetStateAction<string>>
}

const ColorPopover: React.FC<ColorPopoverProps> = ({ children, setPenColor }) => {
  const popOverContent = (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {colorPalette.map((color) => (
        <ToolColorButton color={color} key={color} onClick={(value: string) => setPenColor(value)} />
      ))}
    </div>
  )

  return (
    <Popover content={popOverContent} position='left' clickToHide={true}>
      <div>{children}</div>
    </Popover>
  )
}

export default ColorPopover

import { ColorPicker, Popover } from '@douyinfe/semi-ui'
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
      {colorPalette.map((color, i) => (
        <ToolColorButton key={i} color={color} text={color} onClick={(value: string) => setPenColor(value)} />
      ))}
      <ColorPicker
        onChange={(value) => setPenColor(value.hex)}
        alpha={false}
        usePopover={true}
        popoverProps={{ position: 'left' }}>
        <div>
          <ToolColorButton text={'custom'} color='linear-gradient(70deg, red, blue)' onClick={() => 0} />
        </div>
      </ColorPicker>
    </div>
  )

  return (
    <Popover content={popOverContent} position='left'>
      <div>{children}</div>
    </Popover>
  )
}

export default ColorPopover

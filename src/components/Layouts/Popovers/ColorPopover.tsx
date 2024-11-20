import { ColorPicker, Popover } from '@douyinfe/semi-ui'
import React from 'react'
import { saveColors } from '../../../utils/canvasConstants'
import ToolColorButton from '../Buttons/tool-color-button'

interface ColorPopoverProps {
  children: React.ReactNode
  setPenColor: React.Dispatch<React.SetStateAction<string>>
  colors: Array<string>
  setColors: React.Dispatch<React.SetStateAction<Array<string>>>
  selectedColor: number
  setSelectedColor: React.Dispatch<React.SetStateAction<number>>
}

const ColorPopover: React.FC<ColorPopoverProps> = ({ children, setPenColor, colors, setColors, selectedColor, setSelectedColor }) => {
  const popOverContent = (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {colors.map((color, i) => (
        <span style={selectedColor === i ? { border: '1px solid #fff' } : { border: '1px solid transparent' }} key={i}>
          <ToolColorButton key={i} color={color} text={color} onClick={(value: string) => {
            setPenColor(value)
            setSelectedColor(selectedColor === i ? -1 : i)
          }}/>
        </span>
      ))}
      <ColorPicker
        onChange={(value) => {
          setPenColor(value.hex)
          if(selectedColor != -1) {
            const newColors = [...colors]
            newColors[selectedColor] = value.hex
            setColors(newColors)
            requestAnimationFrame(()=>{saveColors(colors)})
          }
        }}
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

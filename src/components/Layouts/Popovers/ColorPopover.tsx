import { Popover } from '@douyinfe/semi-ui'
import React from 'react'
import { colorPalette } from '../../../utils/canvasConstants'

interface ColorPopoverProps {
  children: React.ReactNode
}

const ColorPopover: React.FC<ColorPopoverProps> = ({ children }) => {
  const popOverContent = (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {colorPalette.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            width: '1rem',
            height: '1rem',
            margin: '0.2rem',
            borderRadius: '0.2rem'
          }}
        />
      ))}
    </div>
  )

  return (
    <Popover content={popOverContent} position='bottomLeft'>
      {children}
    </Popover>
  )
}

export default ColorPopover

import { Button } from '@douyinfe/semi-ui'
import { forwardRef } from 'react'

interface ToolColorButtonProps {
  color: string
  onClick: (value: string) => void
  key: string
}

const ToolColorButton = forwardRef<Button, ToolColorButtonProps>(({ color, onClick, key }, ref) => {
  return (
    <Button
      key={key}
      ref={ref}
      color={color}
      theme={'solid'}
      size='small'
      style={{ width: '3rem', height: '3rem', background: color }}
      onClick={() => onClick(color)}></Button>
  )
})

export default ToolColorButton

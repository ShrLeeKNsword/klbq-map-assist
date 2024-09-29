import { Button } from '@douyinfe/semi-ui'
import React, { forwardRef } from 'react'
import { IconType } from 'react-icons'

interface StandardButtonProps {
  Icon: IconType
  isActiveTool: boolean
  onClick: () => void
}

const toolNormalButton: React.FC<StandardButtonProps> = forwardRef<Button, StandardButtonProps>(
  ({ Icon, isActiveTool, onClick }, ref) => {
    return (
      <Button
        ref={ref}
        icon={<Icon size={'2rem'} />}
        size='large'
        style={{ width: '100%', height: '4rem' }}
        type={isActiveTool ? 'secondary' : 'tertiary'}
        onClick={onClick}
      />
    )
  }
)

export default toolNormalButton

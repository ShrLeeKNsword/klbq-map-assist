import { Button } from '@douyinfe/semi-ui'
import { Type } from '@douyinfe/semi-ui/lib/es/button'
import React, { forwardRef } from 'react'
import { IconType } from 'react-icons'

interface StandardButtonProps {
  Icon: IconType
  isActiveTool: boolean
  onClick: () => void
  typeOverride?: Type;
}

const toolNormalButton: React.FC<StandardButtonProps> = forwardRef<Button, StandardButtonProps>(
  ({ Icon, isActiveTool, onClick, typeOverride }, ref) => {
    return (
      <Button
        ref={ref}
        icon={<Icon size={'2rem'} />}
        size='large'
        style={{ width: '100%', height: '4rem' }}
        type={typeOverride ? typeOverride : isActiveTool ? 'secondary' : 'tertiary'}
        onClick={onClick}
      />
    )
  }
)

export default toolNormalButton

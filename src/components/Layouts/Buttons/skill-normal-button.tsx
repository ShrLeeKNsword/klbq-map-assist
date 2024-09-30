import { Button } from '@douyinfe/semi-ui'
import React, { forwardRef } from 'react'

interface StandardButtonProps {
  skillName: string
  skillImage: string
  onClick: () => void
}

const SkillNormalButton: React.FC<StandardButtonProps> = forwardRef<Button, StandardButtonProps>(
  ({ onClick }, ref) => {
    return (
      
    )
  }
)

export default SkillNormalButton

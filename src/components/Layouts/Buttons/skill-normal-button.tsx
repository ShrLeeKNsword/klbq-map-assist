import { Button } from '@douyinfe/semi-ui'
import React, { forwardRef } from 'react'
import type { sideData } from '../../../data/characters/characterRegistry'
interface StandardButtonProps {
  sideData: sideData
  onClick: () => void
}

const SkillNormalButton: React.FC<StandardButtonProps> = forwardRef<Button, StandardButtonProps>(
  ({ onClick, sideData }, ref) => {

    const buttons = Object.keys(sideData!.skills).map((key) => {
      return (
        <Button
          ref={ref}
          key={key}
          style={{
            width: '4rem',
            height: '4rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onClick={() => onClick()}>
          <img width={'100%'} height={'100%'} src={sideData.skills[key as keyof typeof sideData.skills].skillIcon} alt={key} />
        </Button>
      )
    })
    return (
      <div>
        {buttons}
      </div>
    )
  }
)

export default SkillNormalButton

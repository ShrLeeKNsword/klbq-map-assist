import { Button } from '@douyinfe/semi-ui'
import React, { forwardRef } from 'react'
import { abilityData } from '../../../data/characters/characters'
interface StandardButtonProps {
  abilityData: abilityData
  onClick: () => void
}

const SkillNormalButton: React.FC<StandardButtonProps> = forwardRef<Button, StandardButtonProps>(
  ({ onClick, abilityData }, ref) => {

    const buttons = Object.keys(abilityData).map((key) => {
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
          <img width={'100%'} height={'100%'} src={abilityData[key as keyof typeof abilityData].canvasImage} alt={key} />
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

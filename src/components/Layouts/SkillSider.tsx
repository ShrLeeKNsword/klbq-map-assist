import React from 'react'
import { CharacterData } from '../../data/characters'
import Text from '@douyinfe/semi-ui/lib/es/typography/text'
import SkillNormalButton from './Buttons/skill-normal-button'

interface SkillSiderProps {
  selectedCharacter: CharacterData | null
  setSelectedCharacter: React.Dispatch<React.SetStateAction<CharacterData | null>>
}

const SkillSider: React.FC<SkillSiderProps> = ({ selectedCharacter, setSelectedCharacter }) => {
  const noCharacterSelected = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        transform: 'rotate(180deg)',
        writingMode: 'vertical-rl'
      }}>
      <Text weight={100} style={{ color: 'var(--semi-color-disabled-text)' }}>
        Drag a character from the sidebar to get started!
      </Text>
    </div>
  )

  const characterSelected = (
    <div>
      <SkillNormalButton />
    </div>
  )

  return <div>{selectedCharacter ? characterSelected : noCharacterSelected}</div>
}

export default SkillSider

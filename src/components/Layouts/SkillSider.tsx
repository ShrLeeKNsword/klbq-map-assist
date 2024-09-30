import React from 'react'
import { CharacterData } from '../../data/characters'

interface SkillSiderProps {
  selectedCharacter: CharacterData | null
  setSelectedCharacter: React.Dispatch<React.SetStateAction<CharacterData | null>>
}

const SkillSider: React.FC<SkillSiderProps> = ({ selectedCharacter, setSelectedCharacter }) => {
  return <div></div>
}

export default SkillSider

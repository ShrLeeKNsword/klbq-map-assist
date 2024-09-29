import React from 'react'
import { I18nData } from '../../data/i18n'
import { Avatar, Divider, TabPane, Tabs } from '@douyinfe/semi-ui'
import { GiBroadsword, GiShield } from 'react-icons/gi'
import { characterData, isStandardCharacterData, PUS, TheScissors, Urbino } from '../../data/characters'

interface SiderContentProps {
  currentLanguage: I18nData
}

const SiderContent: React.FC<SiderContentProps> = ({ currentLanguage: currentLanguageMode }) => {
  const fetchCharLink = (key: unknown, side: 'attack' | 'defense') => {
    const char = characterData[key as TheScissors]
    if (isStandardCharacterData(char)) {
      return char.imageLink
    } else {
      if (side === 'defense') {
        return char.imageLink.defense
      } else {
        return char.imageLink.attack
      }
    }
  }
  return (
    <div>
      <Tabs style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TabPane
          tab={
            <span>
              <GiBroadsword />
              Attack
            </span>
          }
          itemKey='1'>
          {Object.keys(TheScissors).map((key: unknown) => {
            return <Avatar src={fetchCharLink(key, 'attack')} style={{ padding: '0.25rem' }} />
          })}
          <Divider dashed={true} margin={'1rem'} />
          {Object.keys(Urbino).map((key: unknown) => {
            return <Avatar src={fetchCharLink(key, 'attack')} style={{ padding: '0.25rem' }} />
          })}
        </TabPane>
        <TabPane
          tab={
            <span>
              <GiShield />
              Defense
            </span>
          }
          itemKey='2'>
          {Object.keys(PUS).map((key: unknown) => {
            return <Avatar src={fetchCharLink(key, 'defense')} style={{ padding: '0.25rem' }} />
          })}
          <Divider dashed={true} margin={'1rem'} />
          {Object.keys(Urbino).map((key: unknown) => {
            return <Avatar src={fetchCharLink(key, 'defense')} style={{ padding: '0.25rem' }} />
          })}
        </TabPane>
      </Tabs>
    </div>
  )
}

export default SiderContent

import React, { useContext } from 'react'
import { Divider, TabPane, Tabs } from '@douyinfe/semi-ui'
import { GiBroadsword, GiShield, GiStunGrenade } from 'react-icons/gi'
import { characterData, characterRegistry } from '../../../data/characters/characterRegistry.ts'
import { GrenadeRow, PUSRow, TheScissorsRow, UrbinoRow } from './SiderContentRow.tsx'
import { LanguageContext } from '../../../contexts/LanguageContext.ts'

interface SiderContentProps {
  characterRegistry: characterRegistry | null;
  setSelectedCharacter: React.Dispatch<React.SetStateAction<characterData | null>>
  setSiderSide: React.Dispatch<React.SetStateAction<'attack' | 'defense'>>
}

const SiderContent: React.FC<SiderContentProps> = ({ setSelectedCharacter, setSiderSide, characterRegistry }) => {
  const currentLanguage = useContext(LanguageContext)

  if (characterRegistry === null)
    return <div></div>;

  return (
    <div>
      <Tabs onChange={(activeKey) => { setSiderSide(activeKey as 'attack' | 'defense'); setSelectedCharacter(null) }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TabPane
          tab={
            <span>
              <GiBroadsword style={{ margin: "0 auto" }} />
              {currentLanguage.sidebar.attact}
            </span>
          }
          itemKey='attack'>
          <TheScissorsRow characterRegistry={characterRegistry} />
          <Divider dashed margin={'1rem'} />
          <UrbinoRow characterRegistry={characterRegistry} side="attack" />
        </TabPane>
        <TabPane
          tab={
            <span>
              <GiShield style={{ margin: "0 auto" }} />
              {currentLanguage.sidebar.defense}
            </span>
          }
          itemKey='defense'>
          <PUSRow characterRegistry={characterRegistry} />
          <Divider dashed margin={'1rem'} />
          <UrbinoRow characterRegistry={characterRegistry} side="defense" />
        </TabPane>
        <TabPane
          tab={
            <span>
              <GiStunGrenade style={{ margin: "0 auto" }} />
              {currentLanguage.sidebar.grenade}
            </span>
          }
          itemKey='grenade'>
          <GrenadeRow />
        </TabPane>
      </Tabs>
      <Divider margin={'1rem'} />
    </div>
  )
}

export default SiderContent

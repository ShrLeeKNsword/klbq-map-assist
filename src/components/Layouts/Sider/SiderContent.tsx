import React, { useContext } from 'react'
import { Avatar, Divider, TabPane, Tabs, Col, Row, Tooltip } from '@douyinfe/semi-ui'
import { GiBroadsword, GiShield, GiStunGrenade } from 'react-icons/gi'
import { characterData, characterRegistry } from '../../../data/characters/characterRegistry.ts'
import { grenadeData } from '../../../data/grenades.ts'
import { PUSRow, TheScissorsRow, UrbinoRow } from './SiderContentRow.tsx'
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
          <Row gutter={[16, 6]} style={{ width: '100%', margin: "0 auto" }}>
            {grenadeData.map((grenade) => {
              return (
                <Col span={6} style={{ display: 'flex', placeItems: 'center', placeContent: 'center' }}>
                  <Tooltip position='topLeft' content={currentLanguage.grenades[grenade.grenade]}>
                    <Avatar
                      src={grenade.imageLink}
                      style={{ margin: '0.25rem', backgroundColor: "grey", height: "48px", width: "48px" }}
                    />
                  </Tooltip>
                </Col>
              )
            })}
          </Row>
        </TabPane>
      </Tabs>
      <Divider margin={'1rem'} />
    </div>
  )
}

export default SiderContent

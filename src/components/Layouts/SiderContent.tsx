import React from 'react'
import { I18nData } from '../../data/i18n'
import { Avatar, Divider, TabPane, Tabs, Col, Row, Tooltip, Card } from '@douyinfe/semi-ui'
import { GiBroadsword, GiShield, GiStunGrenade } from 'react-icons/gi'
import { PUS, TheScissors, Urbino } from '../../data/characters/factions'
import { characterData, characterRegistry } from '../../data/characters/characterRegistry'
import { grenadeData } from '../../data/grenades'

interface SiderContentProps {
  currentLanguage: I18nData
  characterRegistry: characterRegistry | null;
  setSelectedCharacter: React.Dispatch<React.SetStateAction<characterData | null>>
  setSiderSide: React.Dispatch<React.SetStateAction<'attack' | 'defense'>>
}

const SiderContent: React.FC<SiderContentProps> = ({ currentLanguage: currentLanguageMode, setSelectedCharacter, setSiderSide, characterRegistry }) => {
  const onDragStart = (event: React.DragEvent<HTMLSpanElement>, character: string, side: 'attack' | 'defense') => {
    event.dataTransfer.setData('character', character)
    event.dataTransfer.setData('side', side)

    if (characterRegistry) {
      const char = characterRegistry[character]
      setSelectedCharacter(char)
    }
  }

  return (
    <div>
      <Tabs onChange={(activeKey) => { setSiderSide(activeKey as 'attack' | 'defense'); setSelectedCharacter(null) }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TabPane
          tab={
            <span>
              <GiBroadsword style={{ margin: "0 auto" }} />
              {currentLanguageMode.sidebar.attact}
            </span>
          }
          itemKey='attack'>
          <Row gutter={[16, 6]} style={{ width: '100%', margin: "0 auto" }}>
            {Object.keys(TheScissors).map((key: unknown) => {
              return (
                <Col span={6} style={{ display: 'flex', placeItems: 'center', placeContent: 'center' }}>
                  <Tooltip position='topLeft' content={key as string}>
                    <span draggable onDragStart={(e) => onDragStart(e, key as string, 'attack')}>
                      <Avatar
                        src={characterRegistry![key as string].attack?.canvasImage}
                        style={{ padding: '0.25rem' }}
                      />
                    </span>
                  </Tooltip>
                </Col>
              )
            })}
          </Row>
          <Divider dashed margin={'1rem'} />
          <Row gutter={[16, 6]} style={{ width: '100%', margin: "0 auto" }}>
            {Object.keys(Urbino).map((key: unknown) => {
              return (
                <Col span={6} style={{ display: 'flex', placeItems: 'center', placeContent: 'center' }}>
                  <Tooltip position='topLeft' content={key as string}>
                    <span draggable onDragStart={(e) => onDragStart(e, key as string, 'attack')}>
                      <Avatar
                        src={characterRegistry![key as string].attack?.canvasImage}
                        style={{ padding: '0.25rem' }}
                      />
                    </span>
                  </Tooltip>
                </Col>
              )
            })}
          </Row>
        </TabPane>
        <TabPane
          tab={
            <span>
              <GiShield style={{ margin: "0 auto" }} />
              {currentLanguageMode.sidebar.defense}
            </span>
          }
          itemKey='defense'>
          <Row gutter={[16, 6]} style={{ width: '100%', margin: "0 auto" }}>
            {Object.keys(PUS).map((key: unknown) => {
              return (
                <Col span={6} style={{ display: 'flex', placeItems: 'center', placeContent: 'center' }}>
                  <Tooltip position='topLeft' content={key as string}>
                    <span draggable onDragStart={(e) => onDragStart(e, key as string, 'defense')}>
                      <Avatar
                        className='none-drag'
                        src={characterRegistry![key as string].defense?.canvasImage}
                        style={{ padding: '0.25rem' }}
                      />
                    </span>
                  </Tooltip>
                </Col>
              )
            })}
          </Row>
          <Divider dashed margin={'1rem'} />
          <Row gutter={[16, 6]} style={{ width: '100%', margin: "0 auto" }}>
            {Object.keys(Urbino).map((key: unknown) => {
              return (
                <Col span={6} style={{ display: 'flex', placeItems: 'center', placeContent: 'center' }}>
                  <Tooltip position='topLeft' content={key as string}>
                    <span draggable onDragStart={(e) => onDragStart(e, key as string, 'defense')}>
                      <Avatar
                        src={characterRegistry![key as string].defense?.canvasImage}
                        style={{ padding: '0.25rem' }}
                      />
                    </span>
                  </Tooltip>
                </Col>
              )
            })}
          </Row>
        </TabPane>
        <TabPane
          tab={
            <span>
              <GiStunGrenade style={{ margin: "0 auto" }} />
              {currentLanguageMode.sidebar.grenade}
            </span>
          }
          itemKey='grenade'>
          <Row gutter={[16, 6]} style={{ width: '100%', margin: "0 auto" }}>
            {grenadeData.map((grenade) => {
              return (
                <Col span={6} style={{ display: 'flex', placeItems: 'center', placeContent: 'center' }}>
                  <Tooltip position='topLeft' content={currentLanguageMode.grenades[grenade.grenade]}>
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
      <Card style={{ width: '100%', height: "100%", margin: "0 auto", overflow: "hidden" }}>
        <div style={{ display: "flex" }}>
          <div><img src="https://s2.loli.net/2024/10/26/iD1g23pnC9d6hVM.png" style={{ height: "200px" }}></img></div>
          <div style={{ width: "100%" ,marginTop:"5px",fontSize:"10px"}}>
            <Tabs type="button">
              <TabPane
                tab={
                  <Avatar
                    src={characterRegistry!["Ming"].attack?.skills.active.skillIcon}
                    style={{ margin: '0 auto', height: "22px", width: "22px" }}
                  />
                }
                itemKey="1"
              >
                明发射一个电球，其达到最大距离、碰到敌方超弦体时会自动引爆，也可通过手动再次按下技能键后主动引爆。电球会破坏范围内所有敌方单位（包含召唤物）的护甲并造成减速。明进入电场将提升移动速度。
              </TabPane>
              <TabPane
                tab={
                  <Avatar
                    src={characterRegistry!["Ming"].attack?.skills.passive.skillIcon}
                    style={{ margin: '0 auto', height: "22px", width: "22px" }}
                  />
                }
                itemKey="2"
              >
                明使用枪械和主动技能对敌方护甲或护盾造成伤害时，自己的护甲将得到基于该伤害量的回复。绝招持续时间内，被动会回复临时护甲并增加回复量。
              </TabPane>
              <TabPane
                tab={
                  <Avatar
                    src={characterRegistry!["Ming"].attack?.skills.ultimate.skillIcon}
                    style={{ margin: '0 auto', height: "22px", width: "22px" }}
                  />
                }
                itemKey="3"
              >
                明获得临时护甲并使自己的射击附带可叠加的减速效果。明使用枪械和主动技能对敌人的护甲造成伤害时，可延长该技能持续时间并回复临时护甲。
              </TabPane>
            </Tabs>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default SiderContent

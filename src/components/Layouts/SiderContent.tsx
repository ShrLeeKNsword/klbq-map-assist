import React from 'react'
import { Avatar, Divider, TabPane, Tabs, Col, Row, Tooltip, Card, Popover, Descriptions } from '@douyinfe/semi-ui'
import { GiBroadsword, GiShield, GiStunGrenade } from 'react-icons/gi'
import { PUS, TheScissors, Urbino } from '../../data/characters/factions'
import { characterData, characterRegistry } from '../../data/characters/characterRegistry'
import { grenadeData } from '../../data/grenades'
import { I18nData } from '../../types/interface'

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
                  <Popover
                    position='rightTop'
                    content={<Card style={{ width: '500px', height: "100%", margin: "0 auto", overflow: "hidden" }}>
                      <div style={{ display: "flex", height: "100%" }}>
                        <div style={{ height: "360px", width: "200px", margin: "0 auto", display: "relative" }}>
                          <img draggable="false" src="https://s2.loli.net/2024/10/26/iD1g23pnC9d6hVM.png" style={{ height: "360px", filter: "drop-shadow(0 0 5px rgba(var(--semi-grey-7))" }} />
                          <div style={{ position: "absolute", left: "40px", bottom: "60px", height: "25px", display: "flex", alignContent: "center", filter: "drop-shadow(0 0 5px rgba(var(--semi-grey-7))" }}>
                            <img draggable="false" src="https://s2.loli.net/2024/10/27/c7QDINMXFyuav6b.png" style={{ filter: "invert(100%)", height: "25px" }} />
                            <span style={{ fontSize: "18px", margin: "1.5px", marginLeft: "5px", color: "white" }}><strong>决斗</strong></span>
                          </div>
                          <div style={{ position: "absolute", left: "40px", bottom: "80px", height: "25px", display: "flex", alignContent: "center", filter: "drop-shadow(0 0 5px rgba(var(--semi-grey-7))" }}>
                            <span style={{ fontSize: "18px", margin: "1.5px", marginLeft: "5px", color: "white" }}><strong>明</strong></span>
                          </div>
                        </div>
                        <div style={{ width: "100%", fontSize: "10px", marginRight: "15px", marginTop: "3px" }}>
                          <Tabs type="button">
                            <TabPane
                              tab={
                                <Avatar
                                  src={characterRegistry!["Ming"].attack?.skills.active.skillIcon}
                                  style={{ margin: '0 auto', height: "40px", width: "40px" }}
                                />
                              }
                              itemKey="1"
                            >
                              <div className='none-scrollbar' style={{ margin: "2px", height: "70px", overflowY: "scroll" }}>
                                明发射一个电球，其达到最大距离、碰到敌方超弦体时会自动引爆，也可通过手动再次按下技能键后主动引爆。电球会破坏范围内所有敌方单位（包含召唤物）的护甲并造成减速。明进入电场将提升移动速度。
                              </div>
                              <Descriptions
                                className='none-scrollbar'
                                style={{ marginTop: "10px", maxHeight: "190px", overflowY: "scroll" }}
                                align='left'
                                data={[
                                  { key: "冷却", value: "25秒" },
                                  { key: "最远距离", value: "60米" },
                                  { key: "最短起爆", value: "8米" },
                                  { key: "作用范围", value: "半径5米" },
                                  { key: "移速提升", value: "20%" },
                                  { key: "移速提升", value: "20%" },
                                  { key: "移速提升", value: "20%" },
                                  { key: "移速提升", value: "20%" },
                                ]}
                              />
                            </TabPane>
                            <TabPane
                              tab={
                                <Avatar
                                  src={characterRegistry!["Ming"].attack?.skills.passive.skillIcon}
                                  style={{ margin: '0 auto', height: "40px", width: "40px" }}
                                />
                              }
                              itemKey="2"
                            >
                              <div style={{ margin: "3px" }}>
                                明使用枪械和主动技能对敌方护甲或护盾造成伤害时，自己的护甲将得到基于该伤害量的回复。绝招持续时间内，被动会回复临时护甲并增加回复量。
                              </div>
                            </TabPane>
                            <TabPane
                              tab={
                                <Avatar
                                  src={characterRegistry!["Ming"].attack?.skills.ultimate.skillIcon}
                                  style={{ margin: '0 auto', height: "40px", width: "40px" }}
                                />
                              }
                              itemKey="3"
                            >
                              <div style={{ margin: "3px" }}>
                                明获得临时护甲并使自己的射击附带可叠加的减速效果。明使用枪械和主动技能对敌人的护甲造成伤害时，可延长该技能持续时间并回复临时护甲。
                              </div>
                            </TabPane>
                          </Tabs>
                        </div>
                      </div>
                    </Card>}
                  >
                    <span draggable onDragStart={(e) => onDragStart(e, key as string, 'attack')}>
                      <Avatar
                        src={characterRegistry![key as string].attack?.canvasImage}
                        style={{ padding: '0.25rem' }}
                      />
                    </span>
                  </Popover>
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
    </div>
  )
}

export default SiderContent

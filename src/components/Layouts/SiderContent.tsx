import React from 'react'
import { I18nData } from '../../data/i18n'
import { Avatar, Divider, TabPane, Tabs, Col, Row, Tooltip } from '@douyinfe/semi-ui'
import { GiBroadsword, GiShield } from 'react-icons/gi'
import { PUS, TheScissors, Urbino } from '../../data/characters/factions'
import { characterData } from '../../data/characters/characters'

interface SiderContentProps {
  currentLanguage: I18nData
  setSelectedCharacter: React.Dispatch<React.SetStateAction<characterData | null>>
  setSiderSide: React.Dispatch<React.SetStateAction<'attack' | 'defense'>>
}

const SiderContent: React.FC<SiderContentProps> = ({ currentLanguage: currentLanguageMode, setSelectedCharacter, setSiderSide }) => {
  const onDragStart = (event: React.DragEvent<HTMLSpanElement>, character: string, side: 'attack' | 'defense') => {
    event.dataTransfer.setData('character', character)
    event.dataTransfer.setData('side', side)

    const char = characterData[character as keyof typeof characterData]
    setSelectedCharacter(char)
  }

  return (
    <div>
      <Tabs onChange={(activeKey) => { setSiderSide(activeKey as 'attack' | 'defense'); setSelectedCharacter(null) }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TabPane
          tab={
            <span>
              <GiBroadsword style={{ marginRight: '5px', marginLeft: '5px' }} />
              {currentLanguageMode.sidebar.attact}
            </span>
          }
          itemKey='attack'>
          <Row style={{ width: '100%' }}>
            {Object.keys(TheScissors).map((key: unknown) => {
              return (
                <Col span={6} style={{ display: 'flex', placeItems: 'center', placeContent: 'center' }}>
                  <Tooltip position='topLeft' content={key as string}>
                    <span draggable onDragStart={(e) => onDragStart(e, key as string, 'attack')}>
                      <Avatar
                        src={characterData[key as keyof typeof characterData].attack?.canvasImage}
                        style={{ padding: '0.25rem' }}
                      />
                    </span>
                  </Tooltip>
                </Col>
              )
            })}
          </Row>
          <Divider dashed={true} margin={'1rem'} />
          <Row style={{ width: '100%' }}>
            {Object.keys(Urbino).map((key: unknown) => {
              return (
                <Col span={6} style={{ display: 'flex', placeItems: 'center', placeContent: 'center' }}>
                  <Tooltip position='topLeft' content={key as string}>
                    <span draggable onDragStart={(e) => onDragStart(e, key as string, 'attack')}>
                      <Avatar
                        src={characterData[key as keyof typeof characterData].attack?.canvasImage}
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
              <GiShield style={{ marginRight: '5px' }} />
              {currentLanguageMode.sidebar.defense}
            </span>
          }
          itemKey='defense'>
          <Row style={{ width: '100%' }}>
            {Object.keys(PUS).map((key: unknown) => {
              return (
                <Col span={6} style={{ display: 'flex', placeItems: 'center', placeContent: 'center' }}>
                  <Tooltip position='topLeft' content={key as string}>
                    <span draggable onDragStart={(e) => onDragStart(e, key as string, 'defense')}>
                      <Avatar
                        className='none-drag'
                        src={characterData[key as keyof typeof characterData].defense?.canvasImage}
                        style={{ padding: '0.25rem' }}
                      />
                    </span>
                  </Tooltip>
                </Col>
              )
            })}
          </Row>
          <Divider dashed={true} margin={'1rem'} />
          <Row style={{ width: '100%' }}>
            {Object.keys(Urbino).map((key: unknown) => {
              return (
                <Col span={6} style={{ display: 'flex', placeItems: 'center', placeContent: 'center' }}>
                  <Tooltip position='topLeft' content={key as string}>
                    <span draggable onDragStart={(e) => onDragStart(e, key as string, 'defense')}>
                      <Avatar
                        src={characterData[key as keyof typeof characterData].defense?.canvasImage}
                        style={{ padding: '0.25rem' }}
                      />
                    </span>
                  </Tooltip>
                </Col>
              )
            })}
          </Row>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default SiderContent

import React from 'react'
import { I18nData } from '../../data/i18n'
import { Avatar, Divider, TabPane, Tabs } from '@douyinfe/semi-ui'
import { GiBroadsword, GiShield } from 'react-icons/gi'
import { fetchCharLink, PUS, TheScissors, Urbino } from '../../data/characters'

interface SiderContentProps {
  currentLanguage: I18nData
}

const SiderContent: React.FC<SiderContentProps> = ({ currentLanguage: currentLanguageMode }) => {
  const onDragStart = (event: React.DragEvent<HTMLDivElement>, character: string, side: 'attack' | 'defense') => {
    event.dataTransfer.setData('character', character)
    event.dataTransfer.setData('side', side)
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
            return (
              <span draggable onDragStart={(e) => onDragStart(e, key as string, 'attack')}>
                <Avatar src={fetchCharLink(key, 'attack')} style={{ padding: '0.25rem' }} />
              </span>
            )
          })}
          <Divider dashed={true} margin={'1rem'} />
          {Object.keys(Urbino).map((key: unknown) => {
            return (
              <span draggable onDragStart={(e) => onDragStart(e, key as string, 'attack')}>
                <Avatar src={fetchCharLink(key, 'attack')} style={{ padding: '0.25rem' }} />
              </span>
            )
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
            return (
              <span draggable onDragStart={(e) => onDragStart(e, key as string, 'defense')}>
                <Avatar src={fetchCharLink(key, 'defense')} style={{ padding: '0.25rem' }} />
              </span>
            )
          })}
          <Divider dashed={true} margin={'1rem'} />
          {Object.keys(Urbino).map((key: unknown) => {
            return (
              <span draggable onDragStart={(e) => onDragStart(e, key as string, 'defense')}>
                <Avatar src={fetchCharLink(key, 'defense')} style={{ padding: '0.25rem' }} />
              </span>
            )
          })}
        </TabPane>
      </Tabs>
    </div>
  )
}

export default SiderContent

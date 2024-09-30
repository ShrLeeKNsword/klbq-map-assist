import React from 'react'
import { I18nData } from '../../data/i18n'
import { Avatar, Divider, TabPane, Tabs, Popover } from '@douyinfe/semi-ui'
import { GiBroadsword, GiShield } from 'react-icons/gi'
import { characterData, fetchCharLink, PUS, TheScissors, Urbino } from '../../data/characters'

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
              <GiBroadsword style={{ marginRight: "5px" }} />
              {currentLanguageMode.sidebar.attact}
            </span>
          }
          itemKey='1'>
          {Object.keys(TheScissors).map((key: unknown) => {
            return (
              <Popover
                position='right'
                content={
                  <div style={{ width: "max", margin: '0 auto', display: 'flex', padding: 10 }}>
                    <Avatar src={characterData[key].skills.Active} style={{ padding: '0.5rem' }} />
                    <Avatar src={characterData[key].skills.Passive} style={{ padding: '0.5rem' }} />
                    <Avatar src={characterData[key].skills.Ultimate} style={{ padding: '0.5rem' }} />
                  </div>
                }>
                <span draggable onDragStart={(e) => onDragStart(e, key as string, 'attack')}>
                  <Avatar src={fetchCharLink(key, 'attack')} style={{ padding: '0.25rem' }} />
                </span>
              </Popover>

            )
          })}
          <Divider dashed={true} margin={'1rem'} />
          {Object.keys(Urbino).map((key: unknown) => {
            return (
              <Popover
                position='right'
                content={
                  <div style={{ width: "max", margin: '0 auto', display: 'flex', padding: 10 }}>
                    <Avatar src={characterData[key].skills.Active} style={{ padding: '0.5rem' }} />
                    <Avatar src={characterData[key].skills.Passive} style={{ padding: '0.5rem' }} />
                    <Avatar src={characterData[key].skills.Ultimate} style={{ padding: '0.5rem' }} />
                  </div>
                }>
                <span draggable onDragStart={(e) => onDragStart(e, key as string, 'attack')}>
                  <Avatar src={fetchCharLink(key, 'attack')} style={{ padding: '0.25rem' }} />
                </span>
              </Popover>
            )
          })}
        </TabPane>
        <TabPane
          tab={
            <span>
              <GiShield style={{ marginRight: "5px" }} />
              {currentLanguageMode.sidebar.defense}
            </span>
          }
          itemKey='2'>
          {Object.keys(PUS).map((key: unknown) => {
            return (
              <Popover
                position='right'
                content={
                  <div style={{ width: "max", margin: '0 auto', display: 'flex', padding: 10 }}>
                    <Avatar src={characterData[key].skills.Active} style={{ padding: '0.5rem' }} />
                    <Avatar src={characterData[key].skills.Passive} style={{ padding: '0.5rem' }} />
                    <Avatar src={characterData[key].skills.Ultimate} style={{ padding: '0.5rem' }} />
                  </div>
                }>
                <span draggable onDragStart={(e) => onDragStart(e, key as string, 'defense')}>
                  <Avatar src={fetchCharLink(key, 'defense')} style={{ padding: '0.25rem' }} />
                </span>
              </Popover>
            )
          })}
          <Divider dashed={true} margin={'1rem'} />
          {Object.keys(Urbino).map((key: unknown) => {
            return (
              <Popover
                position='right'
                content={
                  <div style={{ width: "max", margin: '0 auto', display: 'flex', padding: 10 }}>
                    <Avatar src={characterData[key].skills.Active} style={{ padding: '0.5rem' }} />
                    <Avatar src={characterData[key].skills.Passive} style={{ padding: '0.5rem' }} />
                    <Avatar src={characterData[key].skills.Ultimate} style={{ padding: '0.5rem' }} />
                  </div>
                }>
                <span draggable onDragStart={(e) => onDragStart(e, key as string, 'defense')}>
                  <Avatar src={fetchCharLink(key, 'defense')} style={{ padding: '0.25rem' }} />
                </span>
              </Popover>
            )
          })}
        </TabPane>
      </Tabs>
    </div>
  )
}

export default SiderContent

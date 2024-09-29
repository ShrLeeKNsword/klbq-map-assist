import React from 'react'
import { I18nData } from '../../data/i18n'
import { Avatar, Divider, TabPane, Tabs } from '@douyinfe/semi-ui'
import { GiBroadsword, GiShield } from 'react-icons/gi'
import { characterData, PUS, TheScissors, Urbino } from '../../data/characters'

interface SiderContentProps {
  currentLanguage: I18nData
}

const SiderContent: React.FC<SiderContentProps> = ({ currentLanguage: currentLanguageMode }) => {
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
            return <Avatar src={characterData[key as TheScissors].imageLink} style={{ padding: '0.25rem' }} />
          })}
          <Divider dashed={true} margin={'1rem'} />
          {Object.keys(Urbino).map((key: unknown) => {
            return <Avatar src={characterData[key as Urbino].imageLink} style={{ padding: '0.25rem' }} />
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
            return <Avatar src={characterData[key as PUS].imageLink} style={{ padding: '0.25rem' }} />
          })}
          <Divider dashed={true} margin={'1rem'} />
          {Object.keys(Urbino).map((key: unknown) => {
            return <Avatar src={characterData[key as Urbino].imageLink} style={{ padding: '0.25rem' }} />
          })}
        </TabPane>
      </Tabs>
    </div>
  )
}

export default SiderContent

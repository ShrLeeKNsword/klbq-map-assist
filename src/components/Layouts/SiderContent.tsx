import React from 'react'
import { I18nData } from '../../data/i18n'
import { Nav, TabPane, Tabs } from '@douyinfe/semi-ui'
import { GiBroadsword, GiShield } from 'react-icons/gi'

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
          Attack
        </TabPane>
        <TabPane
          tab={
            <span>
              <GiShield />
              Defense
            </span>
          }
          itemKey='2'>
          Defense
        </TabPane>
      </Tabs>
    </div>
  )
}

export default SiderContent

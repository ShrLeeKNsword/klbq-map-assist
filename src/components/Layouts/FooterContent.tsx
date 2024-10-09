import { Popover, Tooltip } from '@douyinfe/semi-ui'
import React from 'react'
import { FaGithub, FaDiscord, FaQq } from 'react-icons/fa'
import ContributeBox from '../contributors'
import { I18nData, Languages } from '../../data/i18n'
import SupportUs from '../supportus'
import SiteList from '../sitelist'
import FriendLink from '../friendlink'

interface FooterContentProps {
  currentLanguage: I18nData
}

const FooterContent: React.FC<FooterContentProps> = ({ currentLanguage }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '80px', color: "rgba(var(--semi-grey-9), 1)" }}>
      <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/' target='_blank' rel='nofollow'>
        <img
          decoding='async'
          loading='lazy'
          src='https://s2.loli.net/2024/09/16/TPdoKCrgVb4i37J.png'
          width='107'
          height='38'
          style={{ marginRight: '20px', marginTop: '5px' }}
        />
      </a>
      <div style={{ marginBottom: '0px' }}>
        {'© 番石榴网络科技工作室 & '}
        <Popover content={<ContributeBox learnmore={currentLanguage.sidebar.learnmore} />} position={'top'}>
          <a>Contributors</a>
        </Popover>
      </div>
      <div style={{ height: 'max', display: 'flex', alignItems: 'center', marginLeft: '10px', marginTop: '6px' }}>
        <Tooltip content='Github repository'>
          <a href='https://github.com/ShrLeeKNsword/klbq-map-assist' target='_blank' style={{}}>
            <FaGithub />
          </a>
        </Tooltip>
        <Tooltip content='Discord channel'>
          <a href='https://discord.gg/Zn6fWgT4Sb' target='_blank' style={{ marginLeft: '5px' }}>
            <FaDiscord />
          </a>
        </Tooltip>
        <Tooltip content='QQ群'>
          <a href='https://qm.qq.com/q/E96Z4s8eze' target='_blank' style={{ marginLeft: '5px' }}>
            <FaQq />
          </a>
        </Tooltip>
      </div>
      <div style={{ marginBottom: '0px' }}>
        <FriendLink name={currentLanguage.friendlink} content={currentLanguage.friendlinkdata} />
        <SiteList name={currentLanguage.sitelist} content={currentLanguage.sitelistdata} />
        <SupportUs name={currentLanguage.sidebar.supportus} content={currentLanguage.supportusdata} />
      </div>
    </div>
  )
}

export default FooterContent

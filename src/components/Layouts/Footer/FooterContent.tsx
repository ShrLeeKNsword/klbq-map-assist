import { Popover, Tooltip } from '@douyinfe/semi-ui'
import React, { useContext } from 'react'
import { FaGithub, FaDiscord, FaQq } from 'react-icons/fa'
import ContributeBox from '../../contributors.tsx'
import SupportUs from './SupportUs.tsx'
import SiteList from './SiteList.tsx'
import FriendLink from './FriendLink.tsx'
import { LanguageContext } from '../../../contexts/LanguageContext.ts'

const FooterContent: React.FC = () => {
  const currentLanguage = useContext(LanguageContext)

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '80px', color: "rgba(var(--semi-grey-9), 1)", overflow: 'auto hidden', maxWidth: '100svw', height: '4rem' }}>
        <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/' target='_blank' rel='nofollow' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img
            decoding='async'
            loading='lazy'
            src='https://s2.loli.net/2024/09/16/TPdoKCrgVb4i37J.png'
            width='107'
            height='38'
            style={{ marginRight: '20px', marginTop: '5px' }}
          />
        </a>
        <div style={{ marginBottom: '0px', display: 'flex', flexDirection: 'row', gap: '0.3rem', whiteSpace: 'nowrap' }}>
          {'© 番石榴网络科技工作室 & '}
          <Popover content={<ContributeBox learnmore={currentLanguage.sidebar.learnmore} />} position={'top'}>
            <a>Contributors</a>
          </Popover>
        </div>
        <div style={{ height: 'max', display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '10px', marginTop: '6px' }}>
          <Tooltip content='Github repository'>
            <a href='https://github.com/fsltech-team/Strinova-Map-Assistant' target='_blank' style={{}}>
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
        <div style={{ marginBottom: '0px', display: 'flex', flexDirection: 'row' }}>
          <FriendLink />
          <SiteList />
          <SupportUs />
        </div>
      </div>
    </div>
  )
}

export default FooterContent

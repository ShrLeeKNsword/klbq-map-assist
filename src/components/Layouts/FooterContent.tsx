import { Popover, Tooltip, Button } from '@douyinfe/semi-ui'
import React from 'react'
import { FaGithub, FaDiscord } from 'react-icons/fa'
import ContributeBox from '../contributors'
import { I18nData, Languages } from '../../data/i18n'
import SupportUs from '../supportus'

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
        {' & '}
        <a href='https://wiki.biligame.com/klbq/%E9%A6%96%E9%A1%B5' target='_blank'>
          卡拉彼丘Wiki
        </a>
        {' | '}
      </div>
      <div style={{ height: 'max', display: 'flex', alignItems: 'center', marginLeft: '10px', marginTop: '6px' }}>
        <Tooltip content='Github repository'>
          <a href='https://github.com/ShrLeeKNsword/klbq-map-assist' target='_blank' style={{}}>
            <FaGithub />
          </a>
        </Tooltip>
        <Tooltip content='Discord channel'>
          <a href='https://discord.com/invite/C6AYFvgR' target='_blank' style={{ marginLeft: '5px' }}>
            <FaDiscord />
          </a>
        </Tooltip>
      </div>
      <div style={{ marginBottom: '0px', marginLeft: '10px', marginRight: '10px' }}>{' | '}</div>
      <div style={{ marginBottom: '0px' }}>
        {currentLanguage.language === 0 ?
          <Button type="primary" onClick={() => open("https://strinova.fsltech.cn/", "_blank")}>International Site</Button> :
          <Button type='primary' onClick={() => open('https://klbq.fsltech.cn/mapassist.html', '_blank')}>中国境内站点</Button>}
        <SupportUs name={currentLanguage.sidebar.supportus} />
      </div>
    </div>
  )
}

export default FooterContent

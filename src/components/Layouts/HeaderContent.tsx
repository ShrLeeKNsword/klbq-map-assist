import React from 'react'
import { i18nData, Languages } from '../../data/i18n'
import { Button, Nav, Select } from '@douyinfe/semi-ui'
import Title from '@douyinfe/semi-ui/lib/es/typography/title'
import { MapName } from '../../data/maplist'
import { MdOutlineTranslate } from 'react-icons/md'
import { CgDarkMode } from 'react-icons/cg'
import { FaMap } from 'react-icons/fa'

// Extend the Window interface to include setMode
declare global {
  interface Window {
    setMode: (mode: string) => void
  }
}

// props
interface HeaderContentProps {
  currentLanguageMode: Languages
  changeLanguage: React.Dispatch<React.SetStateAction<Languages>>
  currentMap: MapName
}

const HeaderContent: React.FC<HeaderContentProps> = ({ changeLanguage, currentLanguageMode, currentMap }) => {
  const currentLanguage = i18nData[currentLanguageMode]

  console.log(i18nData[currentLanguageMode])

  const themeMode = () => {
    if (document.body.hasAttribute('theme-mode')) {
      document.body.removeAttribute('theme-mode')
      window.setMode('light')
    } else {
      document.body.setAttribute('theme-mode', 'dark')
      window.setMode('dark')
    }
  }

  return (
    <div style={{ width: '100%' }}>
      <Nav mode='horizontal'>
        <Nav.Header>
          <Title>{currentLanguage.title}</Title>
        </Nav.Header>
        <Nav.Item style={{ flexDirection: 'column', justifyContent: 'center' }}>
          <Button icon={<FaMap />} theme='light'>
            {currentLanguage.mapsetting.maps[currentMap]}
          </Button>
        </Nav.Item>
        <Nav.Footer>
          <Button
            icon={<CgDarkMode size='1.5rem' style={{ padding: '0 1rem' }} color='rgba(var(--semi-grey-9), 1)' />}
            onClick={themeMode}
          />
          <MdOutlineTranslate size='1.5rem' style={{ padding: '0 1rem' }} color='rgba(var(--semi-grey-9), 1)' />
          <Select
            defaultValue={Languages[currentLanguage.language]}
            onChange={(value) => changeLanguage(value as Languages)}>
            {Object.keys(i18nData).map((key) => (
              <Select.Option key={key} value={key}>
                {Languages[key as unknown as Languages]}
              </Select.Option>
            ))}
          </Select>
        </Nav.Footer>
      </Nav>
    </div>
  )
}

export default HeaderContent

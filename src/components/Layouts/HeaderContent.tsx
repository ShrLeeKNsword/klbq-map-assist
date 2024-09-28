import React from 'react'
import { i18nData, Languages } from '../../data/i18n'
import { Button, Nav, Select } from '@douyinfe/semi-ui'
import Title from '@douyinfe/semi-ui/lib/es/typography/title'
import { MapName } from '../../data/maplist'
import { MdOutlineTranslate } from 'react-icons/md'
import ChangeMapButton from '../buttons/changeMapButton'
import ChangeHighlightButton from '../buttons/changeHighlightButton'
import { FaBrush } from 'react-icons/fa'

interface HeaderContentProps {
  currentLanguageMode: Languages
  changeLanguage: React.Dispatch<React.SetStateAction<Languages>>
  currentMap: MapName
  mapPrepareMode: boolean
  setPresentMap: React.Dispatch<React.SetStateAction<MapName>>
  setPresentMapURL: React.Dispatch<React.SetStateAction<{ imgPrepareLink: string; imgBlankLink: string }>>
  setMapPrepareMode: React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderContent: React.FC<HeaderContentProps> = ({
  changeLanguage,
  currentLanguageMode,
  currentMap,
  mapPrepareMode,
  setPresentMap,
  setPresentMapURL,
  setMapPrepareMode
}) => {
  const currentLanguage = i18nData[currentLanguageMode]

  console.log(i18nData[currentLanguageMode])

  const themeMode = () => {
    if (document.body.hasAttribute('theme-mode')) {
      document.body.removeAttribute('theme-mode')
    } else {
      document.body.setAttribute('theme-mode', 'dark')
    }
  }

  return (
    <div style={{ width: '100%' }}>
      <Nav mode='horizontal'>
        <Nav.Header>
          <Title>{currentLanguage.title}</Title>
        </Nav.Header>
        <Nav.Item style={{ flexDirection: 'column', justifyContent: 'center' }}>
          <ChangeMapButton
            currentLanguage={currentLanguage}
            currentMap={currentMap}
            setPresentMap={setPresentMap}
            setPresentMapURL={setPresentMapURL}
          />
        </Nav.Item>
        <Nav.Item style={{ flexDirection: 'column', justifyContent: 'center' }}>
          <ChangeHighlightButton mapPrepareMode={mapPrepareMode} setMapPrepareMode={setMapPrepareMode} />
        </Nav.Item>
        <Nav.Footer>
          <Button
            icon={<FaBrush size='1rem' style={{ padding: '0 1rem' }} color='rgba(var(--semi-grey-9), 1)' />}
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

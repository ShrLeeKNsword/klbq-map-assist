import React from 'react'
import { I18nData } from '../../data/i18n'
import { Button, Dropdown } from '@douyinfe/semi-ui'
import { FaMap } from 'react-icons/fa'
import { mapList, MapName } from '../../data/maplist'
import Pikaso, { BaseShapes } from 'pikaso'

interface ChangeMapButtonProps {
  currentLanguage: I18nData
  currentMap: MapName
  setPresentMap: React.Dispatch<React.SetStateAction<MapName>>
  setPresentMapURL: React.Dispatch<React.SetStateAction<{ imgPrepareLink: string; imgBlankLink: string }>>
  editor: Pikaso<BaseShapes> | null
}

const ChangeMapButton: React.FC<ChangeMapButtonProps> = ({
  currentLanguage,
  currentMap,
  setPresentMap,
  setPresentMapURL,
  editor
}) => {
  const changePresentmap = (value: string) => {
    setPresentMap(MapName[value as keyof typeof MapName])
    for (const mapinfo of mapList) {
      if (mapinfo.map === value) {
        editor?.reset()
        setPresentMapURL({ imgPrepareLink: mapinfo.imgPrepareLink, imgBlankLink: mapinfo.imgBlankLink })
      }
    }
  }

  return (
    <div>
      <Dropdown
        trigger='click'
        position='bottom'
        clickToHide={true}
        render={
          <Dropdown.Menu>
            {Object.keys(MapName).map((key: unknown) => (
              <Dropdown.Item key={key as MapName} onClick={() => changePresentmap(key as MapName)}>
                {currentLanguage.mapsetting.maps[key as MapName]}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        }>
        <Button icon={<FaMap />} theme='light'>
          {currentLanguage.mapsetting.maps[currentMap]}
        </Button>
      </Dropdown>
    </div>
  )
}

export default ChangeMapButton

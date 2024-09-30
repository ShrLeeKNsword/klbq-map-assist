import React, { useState } from 'react'
import { Layout } from '@douyinfe/semi-ui'
import './index.css'
import './App.css'
import HeaderContent from './components/Layouts/HeaderContent'
import { i18nData, Languages } from './data/i18n'
import { mapList, MapName } from './data/maplist'
import SiderContent from './components/Layouts/SiderContent'
import DrawMap from './components/Layouts/Canvas/drawCanvas'
import usePikaso from 'pikaso-react-hook'
import FooterContent from './components/Layouts/FooterContent'
import { colorPalette, mapTools } from './utils/canvasConstants'
import SiderTools from './components/Layouts/SiderTools'
import MapCanvas from './components/Layouts/Canvas/mapCanvas'

const App: React.FC = () => {
  const [presentLanguage, setPresentLanguage] = useState<Languages>(Languages.English)
  const [presentMap, setPresentMap] = useState(MapName.WindyTown)

  const [drawCanvasRef, drawCanvasEditor] = usePikaso({
    selection: {
      transformer: {
        borderStroke: 'rgba(77, 238, 234, 1)',
        anchorStroke: 'rgba(77, 238, 234, 1)',
        anchorFill: 'rgba(77, 238, 234, 1)'
      },
      zone: {
        fill: 'rgba(77, 238, 234, 0.1)',
        stroke: 'rgba(77, 238, 234, 1)'
      }
    }
  })
  const [drawMapRef, drawMapEditor] = usePikaso({
    selection: {
      interactive: false,
      keyboard: {
        enabled: false
      }
    },
    disableCanvasContextMenu: true,
    history: {
      keyboard: {
        enabled: false
      }
    }
  })

  const [canvasTool, setTool] = useState<mapTools>('SELECT')
  const [penColor, setpenColor] = useState(colorPalette[2])

  const [penWidth, setpenWidth] = useState(2)
  const [lineWidth, setLineWidth] = useState(2)

  const [mapPrepareMode, setMapPrepareMode] = useState(true)
  const [presentMapURL, setPresentMapURL] = useState({
    imgPrepareLink: mapList[0].imgPrepareLink,
    imgBlankLink: mapList[0].imgBlankLink
  })

  const { Header, Footer, Sider, Content } = Layout
  const currentLanguage = i18nData[presentLanguage]

  return (
    <Layout
      style={{
        border: '1px solid var(--semi-color-border)',
        height: '100%',
        width: '100%',
        minHeight: '720px',
        minWidth: '1280px'
      }}>
      <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
        {/* This takes language mode because of the language switcher */}
        <HeaderContent
          editor={drawCanvasEditor}
          currentLanguageMode={presentLanguage}
          currentMap={presentMap}
          changeLanguage={setPresentLanguage}
          setPresentMap={setPresentMap}
          setPresentMapURL={setPresentMapURL}
          mapPrepareMode={mapPrepareMode}
          setMapPrepareMode={setMapPrepareMode}
        />
      </Header>
      <Layout>
        <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)', width: '260px' }}>
          <SiderContent currentLanguage={currentLanguage} />
        </Sider>
        <Content
          style={{
            backgroundColor: 'var(--semi-color-bg-2)',
            height: '100%',
            display: 'flex',
            placeItems: 'center',
            padding: '0 auto'
          }}>
          <div style={{ overflow: 'hidden', position: 'relative', top: 0, left: 0, width: '100%', height: '100%' }}>
            <MapCanvas
              currentMap={mapPrepareMode ? presentMapURL.imgPrepareLink : presentMapURL.imgBlankLink}
              pikasoEditor={drawMapEditor}
              pikasoRef={drawMapRef}
              style={{ position: 'absolute', top: '0', left: '0' }}
            />
            <DrawMap
              pikasoRef={drawCanvasRef}
              pikasoEditor={drawCanvasEditor}
              currentMap={mapPrepareMode ? presentMapURL.imgPrepareLink : presentMapURL.imgBlankLink}
              canvasTool={canvasTool}
              lineWidth={lineWidth}
              penColor={penColor}
              penWidth={penWidth}
            />
          </div>
        </Content>
        <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)', width: '4rem' }}>
          <SiderTools
            currentLanguage={currentLanguage}
            canvasTool={canvasTool}
            setTool={setTool}
            penColor={penColor}
            penWidth={penWidth}
            setpenWidth={setpenWidth}
            setLineWidth={setLineWidth}
            lineWidth={lineWidth}
            editor={drawCanvasEditor}
            setPenColor={setpenColor}
          />
        </Sider>
      </Layout>
      <Footer style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
        <FooterContent currentLanguage={currentLanguage} />
      </Footer>
    </Layout>
  )
}

export default App

import React, { useLayoutEffect, useState } from 'react'
import { Spin } from '@douyinfe/semi-ui'
import './index.css'
import './App.css'
import { characterRegistry, loadAllCharacters } from './data/characters/characterRegistry'
import AppShell from './components/appShell'

const App: React.FC = () => {
  const [characterData, setCharacterData] = useState<characterRegistry | null>(null)
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    if (!characterData) {
      loadAllCharacters().then(data => {
        setCharacterData(data)
        console.log(characterData)
        setLoading(false);
      });
    }
  }, [setCharacterData, characterData])

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100svh', width: '100%' }}>
        <Spin size='large' />
      </div>
    )
  }

  return (
    <AppShell characterData={characterData!} />
  )
}

export default App

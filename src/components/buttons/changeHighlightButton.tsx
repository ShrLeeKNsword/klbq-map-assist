import { Button } from '@douyinfe/semi-ui'
import React from 'react'

interface ChangeHighlightButtonProps {
  mapPrepareMode: boolean
  setMapPrepareMode: React.Dispatch<React.SetStateAction<boolean>>
}

const ChangeHighlightButton: React.FC<ChangeHighlightButtonProps> = ({ mapPrepareMode, setMapPrepareMode }) => {
  const onClick = () => {
    setMapPrepareMode(!mapPrepareMode)
  }

  return (
    <Button theme={mapPrepareMode ? 'solid' : 'outline'} type='primary' onClick={onClick}>
      Team Highlight
    </Button>
  )
}

export default ChangeHighlightButton

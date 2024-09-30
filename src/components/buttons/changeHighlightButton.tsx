import { Button } from '@douyinfe/semi-ui'
import React from 'react'

interface ChangeHighlightButtonProps {
  content: string
  mapPrepareMode: boolean
  setMapPrepareMode: React.Dispatch<React.SetStateAction<boolean>>
}

const ChangeHighlightButton: React.FC<ChangeHighlightButtonProps> = ({ mapPrepareMode, setMapPrepareMode, content }) => {
  return (
    <Button
      theme={mapPrepareMode ? 'solid' : 'outline'}
      type='primary'
      onClick={() => setMapPrepareMode(!mapPrepareMode)}>
      {content}
    </Button>
  )
}

export default ChangeHighlightButton

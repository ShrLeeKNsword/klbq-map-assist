import { Button } from '@douyinfe/semi-ui'
import React from 'react'
import { FaMousePointer } from 'react-icons/fa'
import { GiArrowCursor } from 'react-icons/gi'

interface StandardButtonProps {
  icon: typeof GiArrowCursor
  isActiveTool: boolean
  onClick: () => void
}

const canvasToolButtonStyle = {
  borderRadius: '100%',
  margin: '5px',
  width: '50px',
  height: '50px',
  display: 'flex',
  placeItems: 'center',
  placeContent: 'center',
  backgroundColor: 'rgba(var(--semi-grey-0), 1)',
  boxShadow: '0 0 0 3px rgba(var(--semi-grey-1), 1)',
  marginTop: '35px'
}

const activeCanvasToolButtonStyle = {
  borderRadius: '100%',
  margin: '5px',
  width: '50px',
  height: '50px',
  display: 'flex',
  placeItems: 'center',
  placeContent: 'center',
  backgroundColor: 'rgba(var(--semi-green-0), 1)',
  boxShadow: '0 0 0 3px rgba(var(--semi-grey-1), 1)',
  marginTop: '35px'
}

const StandardButton: React.FC<StandardButtonProps> = (props) => {
  return (
    <Button
      icon={<props.icon size={'2rem'} />}
      size='large'
      style={{ width: '100%', height: '4rem' }}
      type={props.isActiveTool ? 'secondary' : 'tertiary'}
      onClick={props.onClick}
    />
  )
}

export default StandardButton

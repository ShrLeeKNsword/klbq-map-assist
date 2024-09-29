import { Button, Popover, Slider } from '@douyinfe/semi-ui'
import React from 'react'
import { MdCreate } from 'react-icons/md'

interface StandardButtonProps {
  icon: typeof MdCreate
  penWidth: number
  setpenWidth: React.Dispatch<React.SetStateAction<number>>
  penColor: string
  isActiveTool: boolean
  onClick: () => void
}

const toolPopoverButton: React.FC<StandardButtonProps> = (props) => {
  const markPlate = (
    <div
      className='grid grid-flex'
      style={{ width: '280px', height: '50px', display: 'flex', justifyContent: 'space-around' }}>
      <Slider
        style={{ marginTop: '8px', marginLeft: '10px', width: '200px' }}
        min={1}
        max={5}
        defaultValue={props.penWidth}
        onChange={(value) => {
          props.setpenWidth(value as number)
        }}></Slider>
      <div
        style={{
          borderRadius: '100%',
          margin: 'auto',
          width: props.penWidth * 3,
          height: props.penWidth * 3,
          display: 'flex',
          placeItems: 'center',
          placeContent: 'center',
          backgroundColor: props.penColor,
          overflow: 'hidden'
        }}></div>
    </div>
  )

  return (
    <Popover content={markPlate} position={'left'}>
      <Button
        icon={<props.icon size={'2rem'} />}
        size='large'
        style={{ width: '100%', height: '4rem' }}
        type={props.isActiveTool ? 'secondary' : 'tertiary'}
        onClick={props.onClick}
      />
    </Popover>
  )
}

export default toolPopoverButton

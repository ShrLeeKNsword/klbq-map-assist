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

const toolTextPopoverButton: React.FC<StandardButtonProps> = (props) => {
  const markPlate = (
    <div
      className='grid grid-flex'
      style={{ width: '300px', height: '70px', display: 'flex', justifyContent: 'space-around' }}>
      <Slider
        style={{ marginLeft: '8px', marginTop: "20px", width: '200px' }}
        min={1}
        max={5}
        defaultValue={props.penWidth}
        onChange={(value) => {
          props.setpenWidth(value as number)
        }}></Slider>
      <div
        style={{
          margin: 'auto',
          height: '40px',
          fontSize: props.penWidth * 10,
          display: 'flex',
          placeItems: 'center',
          placeContent: 'center',
          color: props.penColor,
          overflow: 'hidden'
        }}>A</div>
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

export default toolTextPopoverButton

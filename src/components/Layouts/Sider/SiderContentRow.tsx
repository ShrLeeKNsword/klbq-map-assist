import { PUS, TheScissors, Urbino } from '../../../data/characters/factions.ts'
import { CharacterSiderItem, GrenadeSiderItem } from './SiderItem.tsx'
import React from 'react'
import { Col, Row } from '@douyinfe/semi-ui'
import { characterData, characterRegistry } from '../../../data/characters/characterRegistry.ts'
import { grenadeData } from '../../../data/grenades.ts'

interface SiderContentRowProps {
  data: characterData[]
  side: "attack" | "defense"
}

const SiderContentRow: React.FC<SiderContentRowProps> = ({ data, side }) => {
  return (
    <Row gutter={[16, 6]} style={{ width: '100%', margin: "0 auto" }}>
      {data.map((itemData, i) => (
        <Col key={i} span={6} style={{ display: 'flex', placeItems: 'center', placeContent: 'center' }}>
          <CharacterSiderItem data={itemData} side={side} />
        </Col>
      ))}
    </Row>
  )
}

interface RowProps {
  characterRegistry: characterRegistry;
}

interface ExtendedRowProps extends RowProps {
  side: "attack" | "defense";
}

export const TheScissorsRow: React.FC<RowProps> = ({ characterRegistry }) => {
  return <SiderContentRow data={Object.values(TheScissors).map((k: string) => characterRegistry[k])} side="attack" />
}

export const UrbinoRow: React.FC<ExtendedRowProps> = ({ characterRegistry, side }) => {
  return <SiderContentRow data={Object.values(Urbino).map((k: string) => characterRegistry[k])} side={side} />
}

export const PUSRow: React.FC<RowProps> = ({ characterRegistry }) => {
  return <SiderContentRow data={Object.values(PUS).map((k: string) => characterRegistry[k])} side="defense" />
}

export const GrenadeRow: React.FC = () => {
  return (
    <Row gutter={[16, 6]} style={{ width: '100%', margin: "0 auto" }}>
      {grenadeData.map((itemData, i) => (
        <Col key={i} span={6} style={{ display: 'flex', placeItems: 'center', placeContent: 'center' }}>
          <GrenadeSiderItem data={itemData} />
        </Col>
      ))}
    </Row>
  )
}

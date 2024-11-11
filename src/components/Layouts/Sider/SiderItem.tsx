import React, { useContext } from 'react'
import { Avatar, Card, Popover, TabPane, Tabs, Tooltip } from '@douyinfe/semi-ui'
import { characterData } from '../../../data/characters/characterRegistry.ts'
import { grenadeData } from '../../../data/grenades.ts'
import { LanguageContext } from '../../../contexts/LanguageContext.ts'
import { GrDrag } from "react-icons/gr";

interface CharacterSiderItemProps {
  data: characterData
  side: "attack" | "defense"
}

const hoverStyle = {
  backgroundColor: 'var(--semi-color-overlay-bg)',
  height: '100%',
  width: '100%',
  display: 'flex',
  alianItems: 'center',
  justifyContent: 'center'
};
const HoverMask = () => <div style={hoverStyle}><GrDrag style={{ margin: "auto", color: "rgba(var(--semi-light-blue-5), 1)" }} /></div>;

export const CharacterSiderItem: React.FC<CharacterSiderItemProps> = ({ data, side }) => {
  const currentLanguage = useContext(LanguageContext)

  const sideData = data[side]!;

  const onDragStart = (e: React.DragEvent<HTMLSpanElement>) => {
    e.dataTransfer.setData('imageLink', sideData.canvasImage);
    // setSelectedCharacter(data)
  }

  const onDragStartImage = (e: React.DragEvent<HTMLSpanElement>, imageLink: string) => {
    e.dataTransfer.setData('imageLink', imageLink);
  }

  return (
    <Popover
      position='rightTop' trigger='click'
      content={<Card style={{ width: '500px', height: "100%", margin: "0 auto", overflow: "hidden" }}>
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ height: "360px", width: "200px", margin: "0 auto" }}>
            <img draggable="false" src={sideData.bodyImage} style={{ height: "360px", filter: "drop-shadow(0 0 5px rgba(var(--semi-grey-7))" }} />
            {/* <img draggable="false" src="https://s2.loli.net/2024/10/26/iD1g23pnC9d6hVM.png" style={{ height: "360px", filter: "drop-shadow(0 0 5px rgba(var(--semi-grey-7))" }} /> */}
            <div style={{ position: "absolute", left: "40px", bottom: "60px", height: "25px", display: "flex", alignContent: "center", filter: "drop-shadow(0 0 5px rgba(var(--semi-grey-7))" }}>
              {currentLanguage.characterInfo[data.id].Type == currentLanguage.characterTypes.Duellist ? <img draggable="false" src="https://s2.loli.net/2024/10/27/c7QDINMXFyuav6b.png" style={{ filter: "invert(100%)", height: "25px" }} /> : <></>}
              {currentLanguage.characterInfo[data.id].Type == currentLanguage.characterTypes.Support ? <img draggable="false" src="https://s2.loli.net/2024/11/11/seAIvkZLtWGrlwd.png" style={{ filter: "invert(100%)", height: "25px" }} /> : <></>}
              {currentLanguage.characterInfo[data.id].Type == currentLanguage.characterTypes.Controller ? <img draggable="false" src="https://s2.loli.net/2024/11/11/oLVSxJBTrynRv7F.png" style={{ filter: "invert(100%)", height: "25px" }} /> : <></>}
              {currentLanguage.characterInfo[data.id].Type == currentLanguage.characterTypes.Sentinel ? <img draggable="false" src="https://s2.loli.net/2024/11/11/jEuQg1bt2veBrTP.png" style={{ filter: "invert(100%)", height: "25px" }} /> : <></>}
              {currentLanguage.characterInfo[data.id].Type == currentLanguage.characterTypes.Vanguard ? <img draggable="false" src="https://s2.loli.net/2024/11/11/OfZRtlo2ICDKNHG.png" style={{ filter: "invert(100%)", height: "25px" }} /> : <></>}
              <span style={{ fontSize: "18px", margin: "1.5px", marginLeft: "5px", color: "white" }}><strong>{currentLanguage.characterInfo[data.id].Type}</strong></span>
            </div>
            <div style={{ position: "absolute", left: "35px", bottom: "90px", height: "25px", display: "flex", alignContent: "center", filter: "drop-shadow(0 0 5px rgba(var(--semi-grey-7))" }}>
              <span style={{ fontSize: "18px", margin: "1.5px", marginLeft: "5px", color: "white" }}><strong>{currentLanguage.characterInfo[data.id].Name}</strong></span>
            </div>
          </div>
          <div style={{ width: "100%", fontSize: "14px", marginRight: "15px", marginTop: "3px" }}>
            <Tabs type="button">
              <TabPane
                tab={
                  <span draggable onDragStart={(e) => { onDragStartImage(e, sideData.skills.active.skillIcon) }}>
                    <Avatar
                      src={sideData.skills.active.skillIcon}
                      style={{ margin: '0 auto', height: "40px", width: "40px" }}
                      hoverMask={<HoverMask />}
                    />
                  </span>
                }
                itemKey="1"
              >
                <div style={{ fontWeight: "bold" }}>{currentLanguage.characterInfo[data.id].skillActiveName}</div>
                <div style={{ margin: "2px", maxHeight: "100%", overflowY: "scroll", filter: "drop-shadow(0 0 5px rgba(var(--semi-grey-2))" }} className='none-scrollbar'>
                  {currentLanguage.characterInfo[data.id].skillActiveDescription}
                </div>
                {/* <div className='none-scrollbar' style={{ margin: "2px", height: "70px", overflowY: "scroll" }}>
                  明发射一个电球，其达到最大距离、碰到敌方超弦体时会自动引爆，也可通过手动再次按下技能键后主动引爆。电球会破坏范围内所有敌方单位（包含召唤物）的护甲并造成减速。明进入电场将提升移动速度。
                </div>
                <Descriptions
                  className='none-scrollbar'
                  style={{ marginTop: "10px", maxHeight: "190px", overflowY: "scroll" }}
                  align='left'
                  data={[
                    { key: "冷却", value: "25秒" },
                    { key: "最远距离", value: "60米" },
                    { key: "最短起爆", value: "8米" },
                    { key: "作用范围", value: "半径5米" },
                    { key: "移速提升", value: "20%" },
                    { key: "移速提升", value: "20%" },
                    { key: "移速提升", value: "20%" },
                    { key: "移速提升", value: "20%" },
                  ]}
                /> */}
              </TabPane>
              <TabPane
                tab={
                  <span draggable onDragStart={(e) => { onDragStartImage(e, sideData.skills.passive.skillIcon) }}>
                    <Avatar
                      src={sideData.skills.passive.skillIcon}
                      style={{ margin: '0 auto', height: "40px", width: "40px" }}
                      hoverMask={<HoverMask />}
                    />
                  </span>
                }
                itemKey="2"
              >
                <div style={{ fontWeight: "bold" }}>{currentLanguage.characterInfo[data.id].skillPassiveName}</div>
                <div style={{ margin: "2px", maxHeight: "100%", overflowY: "scroll", filter: "drop-shadow(0 0 5px rgba(var(--semi-grey-2))" }} className='none-scrollbar'>
                  {currentLanguage.characterInfo[data.id].skillPassiveDescription}
                </div>
                {/* <div style={{ margin: "3px" }}>
                  明使用枪械和主动技能对敌方护甲或护盾造成伤害时，自己的护甲将得到基于该伤害量的回复。绝招持续时间内，被动会回复临时护甲并增加回复量。
                </div> */}
              </TabPane>
              <TabPane
                tab={
                  <span draggable onDragStart={(e) => { onDragStartImage(e, sideData.skills.ultimate.skillIcon) }}>
                    <Avatar
                      src={sideData.skills.ultimate.skillIcon}
                      style={{ margin: '0 auto', height: "40px", width: "40px" }}
                      hoverMask={<HoverMask />}
                    />
                  </span>
                }
                itemKey="3"
              >
                <div style={{ fontWeight: "bold" }}>{currentLanguage.characterInfo[data.id].skillUltimateName}</div>
                <div style={{ margin: "2px", maxHeight: "100%", overflowY: "scroll", filter: "drop-shadow(0 0 5px rgba(var(--semi-grey-2))" }} className='none-scrollbar'>
                  {currentLanguage.characterInfo[data.id].skillUltimateDescription}
                </div>
                {/* <div style={{ margin: "3px" }}>
                  明获得临时护甲并使自己的射击附带可叠加的减速效果。明使用枪械和主动技能对敌人的护甲造成伤害时，可延长该技能持续时间并回复临时护甲。  
                </div> */}
              </TabPane>
            </Tabs>
          </div>
        </div>
      </Card>}
    >
      <span draggable onDragStart={onDragStart}>
        <Avatar
          src={sideData.canvasImage}
          style={{ padding: '0.25rem' }}
          hoverMask={<HoverMask />}
        />
      </span>
    </Popover>
  )
}

interface GrenadeSiderItemProps {
  data: grenadeData
}

export const GrenadeSiderItem: React.FC<GrenadeSiderItemProps> = ({ data }) => {
  const currentLanguage = useContext(LanguageContext)

  const onDragStart = (e: React.DragEvent<HTMLSpanElement>, data: grenadeData) => {
    e.dataTransfer.setData('imageLink', data.imageLink);
  }

  return (
    <Tooltip position='topLeft' content={currentLanguage.grenades[data.grenade]}>
      <span draggable onDragStart={(e) => { onDragStart(e, data) }}>
        <Avatar
          src={data.imageLink}
          style={{ margin: '0.25rem', backgroundColor: "grey", height: "48px", width: "48px" }}
          hoverMask={<HoverMask />}
        />
      </span>
    </Tooltip>
  )
}

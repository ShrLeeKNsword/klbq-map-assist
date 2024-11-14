//@ts-ignore
import { Peer } from "peerjs/dist/bundler.mjs";

import { getCurrentAppState, loadCurrentAppState } from './stateManagement';

export enum ConnectionState {
  "DISCONNECTED" = "DISCONNECTED",
  "CONNECTING" = "CONNECTING",
  "CONNECTED" = "CONNECTED",
  "DISCONNECTING" = "DISCONNECTING",
}

let lastAppState: any = null
let drawInteraction = true
let drawInteractionTO: any = null
export class Lobby {
  connectionState: ConnectionState = ConnectionState.DISCONNECTED
  peer: any
  conn: any
  connections: any[] = []
  id?: string
  peerIds: string[] = ['', '', '', '', '', '', '', '', '', '']
  args: any
  constructor(args: any) {
    this.connections = []
    this.args = args
  }
  listen() {
    const s = this
    const { presentMap, setPresentMap, setPresentMapURL, drawCanvasEditor } = s.args
    if (s.peer) return
    s.peer = new Peer()
    s.connectionState = ConnectionState.CONNECTING
    s.peer.on("open", (id: string) => {
      s.id = id
      s.connectionState = ConnectionState.CONNECTED
      if (location.hash == '') {
        location.hash = id
      } else {
        s.connect({ id: location.hash.replace('#', '') })
        setTimeout(() => {
          if(location.hash) {
            let hash = location.hash.replace('#', '')
            let found = s.id === hash
            for (let i = 0; i < s.connections.length; i++) {
              if (s.connections[i].peer === hash) {
                found = true
                break
              }
            }
            if(!found) {
              location.hash = s.id as string
            }
          }
        }, 1000);
      }
      s.heartbeat()
      rebindShare()
    })

    s.peer.on("connection", (connection: any) => {
      s.connections.push(connection)
      let disconnectConnectionTO = setTimeout(() => { s.disconnectConnection(connection)}, 10000)
      connection.on("data", (data: any) => {
        clearTimeout(disconnectConnectionTO)
        disconnectConnectionTO = setTimeout(() => { s.disconnectConnection(connection)}, 10000)
        if (data.type === 'joinRequest') {
          if (s.peerIds.indexOf((s.id as string)) === -1 && s.peerIds.indexOf('') !== -1) {
            s.peerIds[s.peerIds.indexOf('')] = s.id as string
          }
          const joinPeerIdIndex = s.peerIds.indexOf('')
          if (joinPeerIdIndex !== -1) {
            s.peerIds[joinPeerIdIndex] = connection.peer
            const currentAppState = getCurrentAppState({ presentMap, drawCanvasEditor })
            const sendJoinResponse = { type: "joinResponse", peerIds: s.peerIds, state: currentAppState }
            connection.send(sendJoinResponse)
            for (let i = 0; i < s.peerIds.length; i++) {
              const peerId = s.peerIds[i];
              if (peerId != s.id && peerId != connection.peer) {
                const peerIdConnection = s.connections.find(c => c.peer === peerId)
                peerIdConnection?.send(sendJoinResponse)
              }
            }
          }
          const peerIdConnection = s.connections.find(c => s.peerIds.indexOf(c.peer) !== -1)
          if (!peerIdConnection) {
            connection.close()
            let i = s.connections.length
            while (i--) {
              if (s.connections[i].peer === connection.peer) {
                s.connections.splice(i, 1)
              }
            }
          }
        } else if (data.type === 'state') {
          lastAppState = data.state
          drawInteraction = false
          clearTimeout(drawInteractionTO)
          drawInteractionTO =setTimeout(() => { drawInteraction = true }, 2000)
          loadCurrentAppState({ json: data.state, setPresentMap, setPresentMapURL, drawCanvasEditor })
        }
      })
    })
  }
  reconnect() {
    const s = this
    s.peer.reconnect()
  }
  heartbeat() {
    let s = this
    if (s.connectionState !== ConnectionState.DISCONNECTED || !s.connectionState) {
      setTimeout(() => { s.heartbeat() }, 5000)
    }
    for (let i = 0; i < s.connections?.length; i++) {
      const c = s.connections[i]
      if(c.open) {
        c.send({type:'heartbeat' })
      }
    }
  }
  connect({ id }: { id: string }) {
    const s = this
    const { setPresentMap, setPresentMapURL, drawCanvasEditor } = s.args
    const connection = s.peer.connect(id, { reliable: true, ebug: 3 })
    connection.on("open", () => {
      s.connections.push(connection)
      let disconnectConnectionTO = setTimeout(() => { s.disconnectConnection(connection)}, 10000)
      connection.send({ type: 'joinRequest' })
      connection.on('data', function (data: any) {
        clearTimeout(disconnectConnectionTO)
        disconnectConnectionTO = setTimeout(() => { s.disconnectConnection(connection)}, 10000)
        if (data.type === 'joinResponse') {
          s.peerIds = data.peerIds
          for (let i = 0; i < s.peerIds.length; i++) {
            const peerId = s.peerIds[i]
            if (peerId != s.id) {
              const peerIdConnection = s.connections.find(c => c.peer === peerId)
              if (!peerIdConnection) {
                s.connect({ id: peerId })
              }
            }
          }
          lastAppState = data.state
          drawInteraction = false
          clearTimeout(drawInteractionTO)
          drawInteractionTO =setTimeout(() => { drawInteraction = true }, 2000)
          loadCurrentAppState({ json: data.state, setPresentMap, setPresentMapURL, drawCanvasEditor })
        } else if (data.type === 'state') {
          lastAppState = data.state
          drawInteraction = false
          clearTimeout(drawInteractionTO)
          drawInteractionTO =setTimeout(() => { drawInteraction = true }, 2000)
          loadCurrentAppState({ json: data.state, setPresentMap, setPresentMapURL, drawCanvasEditor })
        }
      })
    })
    connection.on("close", () => {
      console.log('connect close', connection.peer)
    })
    connection.on("error", (err: any) => {
      console.log('connect error', connection.peer, err)
    })
    connection.on("disconnected", (err: any) => {
      console.log('connect disconnected', connection.peer, err)
    })
  }
  disconnectConnection(connection: any) {
    const s = this
    let i = s.connections.length
    while (i--) {
      if (s.connections[i].peer === connection.peer) {
        s.connections.splice(i, 1)
      }
    }
    const peerIdIndex = s.peerIds.indexOf(connection.peer)
    if (peerIdIndex !== -1) {
      s.peerIds[peerIdIndex] = ''
    }
    if(location.hash) {
      let hash = location.hash.replace('#', '')
      let found = s.id === hash
      for (let i = 0; i < s.connections.length; i++) {
        if (s.connections[i].peer === hash) {
          found = true
          break
        }
      }
      if(!found) {
        location.hash = s.id as string
      }
    }
  }
  destroy() {
    location.hash = ''
    this.peer && this.peer.disconnect()
    this.connectionState = ConnectionState.DISCONNECTED
    this.connections = []
    this.peerIds = ['', '', '', '', '', '', '', '', '', '']
    this.id = this.peer = this.conn = undefined
  }
}

export const initShare = ({ presentMap, setPresentMap, setPresentMapURL, drawCanvasEditor }: any) => {
  if (!lobby) {
    lobby = new Lobby({ presentMap, setPresentMap, setPresentMapURL, drawCanvasEditor })
  }
}

export const cleanUpShare = () => {
  if (lobby) {
    lobby.destroy()
  }
}

let drawTO: any = null
export const rebindShare = () => {
  if (lobby && lobby.connectionState === ConnectionState.CONNECTED) {
    const { drawCanvasEditor } = lobby.args
    const delayUpdateLiveMap = () => {
      clearTimeout(drawTO)
      drawTO = setTimeout(updateLiveMap, 1000)
    }
    // const drawEvents = ['*']
    const drawEvents = ['shape:create', 'shape:delete', 'selection:dragend', 'board:change-active-drawing', 'history:undo', 'history:redo', 'selection:transformend']
    drawCanvasEditor.off(drawEvents, delayUpdateLiveMap)
    drawCanvasEditor.on(drawEvents, delayUpdateLiveMap)
  }
}

export const updateLiveMap = () => {
  if (lobby && lobby.connectionState === ConnectionState.CONNECTED) {
    const { presentMap, drawCanvasEditor } = lobby.args
    const currentAppState = getCurrentAppState({ presentMap, drawCanvasEditor })
    if (drawInteraction && JSON.stringify(lastAppState) != JSON.stringify(currentAppState)) {
      for (let i = 0; i < lobby.connections.length; i++) {
        const c = lobby.connections[i]
        if (lobby.id != c.peer && c.open) {
          c.send({ type: 'state', state: currentAppState })
        }
      }
      lastAppState = currentAppState
    }
  }
}

let lobby: Lobby
let shareTO: any
export const share = ({ ui }: any = {}) => {
  clearTimeout(shareTO)
  shareTO = setTimeout(() => {
    if (((!location.hash && ui) || (!ui && location.hash)) && lobby.connectionState === ConnectionState.DISCONNECTED) {
      if (lobby && !lobby.peer) {
        lobby.listen()
      } else if (lobby && !lobby.peer) {
        lobby.reconnect()
      }
    } else if (location.hash && ui) {
      lobby.destroy()
    }
  }, 1000)
}

export const updateLobbyRefs = ({ presentMap }: any) => {
  if(lobby) {
    lobby.args.presentMap = presentMap
  }
  return lobby
}

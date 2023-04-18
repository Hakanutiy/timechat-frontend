import { io, Socket, SocketOptions } from 'socket.io-client'

type SocketEventFunc = (_?) => void

export interface SocketServiceOptions {
  onOpen?: SocketEventFunc
  onClose?: SocketEventFunc
  socketUrl: string
  onConnectError?: SocketEventFunc
}

class SocketService {
  socket: Socket | null = null
  socketUrl: string

  onOpen = (): void => {
    throw new Error('onOpen method of socketService should be overriden')
  }
  onClose = (_): void => {
    throw new Error('onClose method of socketService should be overriden')
  }
  onMessage = (ev: string, cb: (e) => void): void => {
    if (this.socket.connected) {
      this.socket.on(ev, cb)
    }
  }
  emit = function emit<T>(ev: string, ...payload: unknown[]): T {
    if (this.socket.connected) {
      return this.socket.emit(ev, ...payload)
    }
  }
  onError = (_: Error): void => {
    throw new Error('onError method of socketService should be overriden')
  }

  destroy = (): void => {
    if (this.socket.connected) {
      this.socket.off('connect_error', async (e) => {
        this.onError(e)
      })
      this.socket.off('message', this.onMessage)
      this.socket.off('disconnect', (e) => {
        this.onClose(e)
      })
      this.socket.off('connect', () => {
        this.onOpen()
      })

      // https://github.com/socketio/socket.io-client/issues/1496
      this.socket.removeAllListeners()

      this.socket.close()
      this.socket = null
    }
  }

  create = (options: Partial<SocketOptions>): void => {
    if (this.socket) return
    this.socket = io(this.socketUrl, {
      transports: ['websocket'],
      ...options,
    })
    this.socket.on('connect_error', async (e: Error) => {
      this.onError(e)
    })
    this.socket.on('disconnect', (e) => {
      this.onClose(e)
    })
    this.socket.on('connect', () => {
      this.onOpen()
    })
  }
  constructor({ onOpen, onClose, socketUrl, onConnectError }: SocketServiceOptions) {
    this.onOpen = onOpen
    this.onClose = onClose
    this.onError = onConnectError
    this.socketUrl = socketUrl
  }
}

export { SocketService }

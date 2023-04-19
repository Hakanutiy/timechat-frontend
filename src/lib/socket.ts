import { useEffect, useState } from 'react'

import { API_URL } from '@/config'
import { queryClient } from '@/lib/react-query'
import { SocketService, SocketServiceOptions } from '@/lib/socket-service'
import storage from '@/utils/storage'

const createSocket = (options?: Partial<SocketServiceOptions>) => {
  const socket = new SocketService({
    onOpen(e) {
      console.log(e, '||| onOpen - createSocket')
    },
    onClose(e) {
      console.error(e, '||| onClose - createSocket')
    },
    onConnectError(e) {
      console.error(e, '||| onConnectError - createSocket')
    },
    ...options,
    socketUrl: API_URL,
  })
  socket.create({
    auth: { token: storage.getTokens().accessToken },
  })
  return socket
}

const useConnectSocket = () => {
  const [socket, setSocket] = useState<SocketService>()
  const [isSocketConnected, setIsSocketConnected] = useState(false)
  useEffect(() => {
    const _socket = createSocket({
      onOpen() {
        setIsSocketConnected(true)
      },
    })
    setSocket(_socket)
    return () => {
      _socket.destroy()
    }
  }, [])
  return { socket, isSocketConnected }
}

export interface UseSocketSubscriptionOptions<TData, QueryData = TData> {
  queryKey?: string
  updater?: (data: TData, prevQueryData: QueryData) => unknown
  onMessage?: (data: TData) => void
}

export function useSocketSubscription<TData, QueryData = TData>(
  event: string,
  options: UseSocketSubscriptionOptions<TData, QueryData>,
) {
  const { isSocketConnected, socket } = useConnectSocket()

  useEffect(() => {
    if (!isSocketConnected) return
    socket?.onMessage(event, async (data: TData) => {
      const prevQueryData = queryClient
        ?.getQueriesData(options?.queryKey)[0]
        ?.at(1) as QueryData
      let _updater: unknown = data
      if (options?.updater) {
        _updater = options.updater(data, prevQueryData)
      }
      queryClient.setQueriesData(options.queryKey, _updater)
    })
  }, [isSocketConnected])
}
export function useSocketEmit<R = unknown>(event: string) {
  const { socket } = useConnectSocket()
  return (...args: R[]) => socket?.emit(event, ...args)
}

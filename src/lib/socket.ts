import { useEffect, useState } from 'react'

import { API_URL } from '@/config'
import { queryClient } from '@/lib/react-query'
import { SocketService, SocketServiceOptions } from '@/lib/socket-service'
import storage from '@/utils/storage'

const createSocket = (options?: SocketServiceOptions) => {
  const socket = new SocketService({
    socketUrl: API_URL,
    ...options,
  })
  socket.create({
    auth: { token: storage.getTokens().accessToken },
  })
  return socket
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
  useEffect(() => {
    const socket = createSocket()
    socket.onMessage(event, (data: TData) => {
      const prevQueryData = queryClient
        .getQueriesData(options?.queryKey)
        .at(1) as QueryData
      let _updater: unknown = data
      options?.onMessage && options.onMessage(data)
      if (options?.updater) {
        _updater = options.updater(data, prevQueryData)
      }
      queryClient.setQueriesData(options.queryKey, _updater)
    })
    return () => {
      socket.destroy()
    }
  }, [queryClient])
}

export const useSocketEmit = (event: string) => {
  const [socket, setSocket] = useState<SocketService>()
  const emit = (...args: unknown[]) => socket?.emit(event, ...args)
  useEffect(() => {
    const _socket = createSocket()
    setSocket(_socket)
    return () => {
      _socket.destroy()
    }
  }, [])
  return emit
}

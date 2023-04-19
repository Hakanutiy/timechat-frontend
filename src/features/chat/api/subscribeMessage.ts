import { useSocketSubscription } from '@/lib/socket'

import { Chat, Message } from '../types'

export const useSubscribeMessage = (chatId) => {
  return useSocketSubscription<{ chatId: string } & Message, Chat>('chat_message', {
    queryKey: 'chat',
    updater: (data, prevQueryData) => {
      if (data.chatId !== chatId) return prevQueryData
      return { ...prevQueryData, messages: [...prevQueryData.messages, data] }
    },
  })
}

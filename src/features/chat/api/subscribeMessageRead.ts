import { getChatQueryKey } from '@/features/chat/api/getChat'
import { getChatsQueryKey } from '@/features/chat/api/getChats'
import { getUserMeQueryKey } from '@/features/chat/api/getMe'
import { queryClient } from '@/lib/react-query'
import { useSocketSubscription } from '@/lib/socket'

import { Chat, Message, User } from '../types'

export const useSubscribeMessageRead = (chatId) => {
  const chat = queryClient.getQueryData<Chat>([getChatQueryKey, chatId])
  return useSocketSubscription<{ chatId: string; messageId: string }>('message_read', {
    onMessage: async (data) => {
      if (data.chatId === chatId) {
        await queryClient.refetchQueries(getChatsQueryKey)
      }
    },
  })
}

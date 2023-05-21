import { getChatQueryKey } from '@/features/chat/api/getChat'
import { getChatsQueryKey } from '@/features/chat/api/getChats'
import { queryClient } from '@/lib/react-query'
import { useSocketSubscription } from '@/lib/socket'

import { Chat, Message } from '../types'

export const useSubscribeMessage = (chatId) => {
  console.log(chatId)
  return useSocketSubscription<{ chatId: string } & Message>('chat_message', {
    deps: [chatId],
    onMessage: async (data) => {
      await queryClient.refetchQueries(getChatsQueryKey)
      const prevQueryData = queryClient.getQueryData<Chat>([getChatQueryKey, chatId])
      queryClient.setQueriesData([getChatQueryKey, chatId], {
        ...prevQueryData,
        messages: [...(prevQueryData?.messages ?? []), data],
      })
    },
  })
}

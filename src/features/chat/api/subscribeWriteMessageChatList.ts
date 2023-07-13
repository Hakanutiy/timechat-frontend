import { Chat, ChatEntity, User } from '@/features/chat'
import { getChatQueryKey } from '@/features/chat/api/getChat'
import { DTOResponseGetChats, getChatsQueryKey } from '@/features/chat/api/getChats'
import { getUserMeQueryKey } from '@/features/chat/api/getMe'
import { queryClient } from '@/lib/react-query'
import { useSocketSubscription } from '@/lib/socket'

export const useSubscribeWriteMessageChatList = (chatId) => {
  return useSocketSubscription<{ chatId: string; userId: string; isTyping: boolean }>(
    'writes_message',
    {
      onMessage: async (data) => {
        const me = queryClient.getQueryData<User>([getUserMeQueryKey])
        if (me._id === data.userId) return

        const { 1: chats } = queryClient
          .getQueriesData<DTOResponseGetChats>(getChatsQueryKey)
          .at(-1)

        const chatsLoop = chats.data?.map((chat) => ({
          ...chat,
          isTyping: data.chatId === chat._id && data.isTyping,
        }))

        queryClient.setQueriesData(getChatsQueryKey, { ...chats, data: chatsLoop })
      },
    },
  )
}

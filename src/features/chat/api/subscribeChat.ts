import { useNavigate } from 'react-router-dom'

import { getChatsQueryKey } from '@/features/chat/api/getChats'
import { getUserMeQueryKey, useGetMe } from '@/features/chat/api/getMe'
import { queryClient } from '@/lib/react-query'
import { useSocketSubscription } from '@/lib/socket'

import { Chat, User } from '../types'

export const useSubscribeChat = () => {
  const data = queryClient.getQueryData<User>(getUserMeQueryKey)
  const navigate = useNavigate()
  return useSocketSubscription<Chat>('new_chat', {
    onMessage: async (chat) => {
      const myId = chat.senders.find((item) => item._id === data._id)
      if (myId) {
        navigate(`/chat/${chat._id}`)
      }
      await queryClient.refetchQueries(getChatsQueryKey)
    },
  })
}

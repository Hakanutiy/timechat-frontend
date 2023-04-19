import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { Chat } from '@/features/chat'
import { fetcher } from '@/lib/api'
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query'

const getChat = (chatId): Promise<Chat> => {
  return fetcher(`/chats/${chatId}`, { method: 'GET' })
}

interface UseGetUsersOptions {
  config: QueryConfig<QueryFnType>
  chatId: string
}
type QueryFnType = typeof getChat

export const useGetChat = ({ config, chatId }: UseGetUsersOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['chat', chatId],
    queryFn: () => getChat(chatId),
  })
}

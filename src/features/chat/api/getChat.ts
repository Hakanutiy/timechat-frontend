import { useQuery } from 'react-query'

import { Chat } from '@/features/chat'
import { fetcher } from '@/lib/api'
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query'

const getUsers = (): Promise<Chat> => {
  return fetcher('/chats', { method: 'GET' })
}

interface UseGetUsersOptions {
  config: QueryConfig<QueryFnType>
}
type QueryFnType = typeof getUsers

export const useGetChat = ({ config }: UseGetUsersOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['chat'],
  })
}

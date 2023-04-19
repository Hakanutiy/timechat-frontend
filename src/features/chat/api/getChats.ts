import { useQuery } from 'react-query'

import { ChatEntity } from '@/features/chat'
import { fetcher } from '@/lib/api'
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query'

interface DTOResponseGetChats {
  data: ChatEntity[]
  count: number
}

interface GetChatsFilters {
  page?: number
  limit?: number
  search?: string
}
const getUsers = (filters: GetChatsFilters): Promise<DTOResponseGetChats> => {
  return fetcher('/chats', { params: filters, method: 'GET' })
}

interface UseGetUsersOptions {
  config: QueryConfig<QueryFnType>
  filters: GetChatsFilters
}
type QueryFnType = typeof getUsers

export const useGetChats = ({ config, filters }: UseGetUsersOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['chats', filters],
    queryFn: () => getUsers(filters),
  })
}

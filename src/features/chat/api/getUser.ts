import { useQuery } from 'react-query'

import { User } from '@/features/chat'
import { fetcher } from '@/lib/api'
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query'

interface DTOResponseGetUsers {
  data: User[]
  count: number
}

interface GetUsersFilters {
  page?: number
  limit?: number
  search?: string
}
const getUsers = (filters: GetUsersFilters): Promise<DTOResponseGetUsers> => {
  return fetcher('/users', { params: filters, method: 'GET' })
}

interface UseGetUsersOptions {
  config: QueryConfig<QueryFnType>
  filters: GetUsersFilters
}
type QueryFnType = typeof getUsers

export const useGetUsers = ({ config, filters }: UseGetUsersOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['users', filters],
    queryFn: () => getUsers(filters),
  })
}

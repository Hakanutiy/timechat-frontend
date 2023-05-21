import { useQuery } from 'react-query'

import { User } from '@/features/chat'
import { fetcher } from '@/lib/api'
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query'

const getMe = (): Promise<User> => {
  return fetcher('/auth/me', { method: 'GET' })
}

interface UseGetUsersOptions {
  config: QueryConfig<QueryFnType>
}
type QueryFnType = typeof getMe

export const useGetMe = ({ config }: UseGetUsersOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['userMe'],
    queryFn: () => getMe(),
  })
}

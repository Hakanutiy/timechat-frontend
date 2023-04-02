import { useMutation } from 'react-query'

import { UserResponse } from '@/features/auth/types'
import { fetcher } from '@/lib/api'
import { MutationConfig } from '@/lib/react-query'

export type LoginDTO = {
  username: string
  password: string
}
export const login = (data: LoginDTO) => {
  return fetcher<UserResponse>('/auth/signin', { data, method: 'POST' })
}

interface UseLoginOptions {
  config: MutationConfig<typeof login>
}

export const useLogin = ({ config }: UseLoginOptions) => {
  return useMutation({
    ...config,
    mutationFn: login,
  })
}

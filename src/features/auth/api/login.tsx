import { useMutation } from 'react-query'

import { UserResponse } from '@/features/auth/types'
import { mutation } from '@/lib/api'
import { MutationConfig } from '@/lib/react-query'

export type LoginDTO = {
  username: string
  password: string
}

export const login = (data: LoginDTO) => {
  return mutation<UserResponse>('/auth/signin', data)
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

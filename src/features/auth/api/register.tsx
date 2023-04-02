import { useMutation } from 'react-query'

import { fetcher } from '@/lib/api'

export type RegisterDTO = {
  username: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
}
export const register = (data: RegisterDTO) => {
  return fetcher('/auth/signup', { data, method: 'POST' })
}

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
  })
}

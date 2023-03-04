import { useMutation } from 'react-query'

import { mutation } from '@/lib/api'

export type RegisterDTO = {
  username: string
  password: string
  confirmPassword: string
}
export const register = (data: RegisterDTO) => {
  return mutation('/user/signup', data)
}

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
  })
}

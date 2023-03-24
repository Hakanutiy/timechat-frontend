import { useMutation } from 'react-query'

import { mutation } from '@/lib/api'

export type RegisterDTO = {
  username: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
}
export const register = (data: RegisterDTO) => {
  return mutation('/auth/signup', data)
}

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
  })
}

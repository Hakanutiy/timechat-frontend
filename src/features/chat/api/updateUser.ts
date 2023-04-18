import { useMutation } from 'react-query'

import { User } from '@/features/chat'
import { fetcher } from '@/lib/api'
import { MutationConfig } from '@/lib/react-query'
import { toFormData } from '@/utils/toFormData'

export interface UpdateUserDTO extends Omit<User, '_id' | 'createdAt' | 'updatedAt'> {
  userId: string
}
const updateUser = ({ userId, ...data }: UpdateUserDTO) => {
  const formData = toFormData(data)
  const isFormData = formData instanceof FormData
  console.log(isFormData, 'asdasdasd')
  return fetcher(`/users/${userId}`, {
    data: formData,
    method: 'PATCH',
  })
}

interface UseLoginOptions {
  config: MutationConfig<typeof updateUser>
}

export const useUpdateUser = ({ config }: UseLoginOptions) => {
  return useMutation({
    ...config,
    mutationFn: updateUser,
  })
}

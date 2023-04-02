import { UserResponse } from '@/features/auth/types'
import { fetcher } from '@/lib/api'

export const refresh = (refreshToken: string) => {
  return fetcher<UserResponse>(`/auth/refresh/${refreshToken}`, {
    method: 'GET',
  })
}

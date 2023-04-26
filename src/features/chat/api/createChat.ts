import { useSocketEmit } from '@/lib/socket'

export const useCreateChat = () => {
  return useSocketEmit<{
    name?: string
    preview?: string[]
    senders: string[]
  }>('create_chat')
}

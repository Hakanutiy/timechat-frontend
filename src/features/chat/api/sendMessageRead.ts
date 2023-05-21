import { useSocketEmit } from '@/lib/socket'

export const useSendReadMessage = () => {
  return useSocketEmit<{
    messageId: string
    chatId: string
  }>('messageRead')
}

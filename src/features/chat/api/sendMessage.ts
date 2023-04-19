import { useSocketEmit } from '@/lib/socket'

export const useSendMessage = () => {
  return useSocketEmit<{
    text: string
    chatId: string
  }>('send_message')
}

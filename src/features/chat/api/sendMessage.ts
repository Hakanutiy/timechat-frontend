import { useSocketEmit } from '@/lib/socket'

export interface SendMessageOptions {
  text?: string
  chatId?: string
  imageIds?: string[]
}
export const useSendMessage = () => {
  return useSocketEmit<SendMessageOptions>('send_message')
}

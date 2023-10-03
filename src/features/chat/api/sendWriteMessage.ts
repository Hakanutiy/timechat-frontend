import { useSocketEmit } from '@/lib/socket'

export interface SendWriteMessageOptions {
  chatId: string
  isTyping: boolean
}

export const useSendWriteMessage = () => {
  return useSocketEmit<SendWriteMessageOptions>('write_message')
}

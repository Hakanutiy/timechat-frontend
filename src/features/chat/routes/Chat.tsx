import { useParams } from 'react-router-dom'

import { MainLayout } from '@/components/Layout'
import { useSubscribeChat } from '@/features/chat/api/subscribeChat'

import { ConversationArea, Dialog, Head, Setting } from '../components'

export const Chat = () => {
  const { chatId } = useParams()
  useSubscribeChat()
  return (
    <MainLayout head={Head}>
      <ConversationArea />
      {!!chatId && <Dialog chatId={chatId} />}
      <Setting />
    </MainLayout>
  )
}

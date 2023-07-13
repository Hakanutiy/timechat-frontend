import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { MainLayout } from '@/components/Layout'
import { useSubscribeChat } from '@/features/chat/api/subscribeChat'

import { ConversationArea, Dialog, Head, Setting } from '../components'

export const Chat = () => {
  const { chatId } = useParams()
  const [chatPicture, setChatPicture] = useState(false)
  useSubscribeChat()
  return (
    <MainLayout head={Head}>
      <ConversationArea />
      {!!chatId && (
        <Dialog
          chatPicture={chatPicture}
          setChatPicture={setChatPicture}
          chatId={chatId}
        />
      )}
      {chatPicture && <Setting chatPicture={chatPicture} />}
    </MainLayout>
  )
}

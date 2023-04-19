import { useParams } from 'react-router-dom'

import { MainLayout } from '@/components/Layout'

import { ConversationArea, Dialog, Head, Setting } from '../components'

export const Chat = () => {
  const { chatId } = useParams()
  return (
    <MainLayout head={Head}>
      <div className="wrapper">
        <ConversationArea />
        {!!chatId && <Dialog chatId={chatId} />}
        <Setting />
      </div>
    </MainLayout>
  )
}

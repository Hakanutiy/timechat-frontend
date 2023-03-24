import { MainLayout } from '@/components/Layout'
import { useGetUsers } from '@/features/chat/api'

import { ConversationArea, Dialog, Setting } from '../components'

export const Chat = () => {
  return (
    <MainLayout>
      <div className="wrapper">
        <ConversationArea />
        <Dialog />
        <Setting />
      </div>
    </MainLayout>
  )
}

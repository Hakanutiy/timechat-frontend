import { MainLayout } from '@/components/Layout'

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

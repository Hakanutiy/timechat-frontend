import { MainLayout } from '@/components/Layout'

import { ConversationArea, Dialog, Head, Setting } from '../components'

export const Chat = () => {
  return (
    <MainLayout head={Head}>
      <div className="wrapper">
        <ConversationArea />
        <Dialog />
        <Setting />
      </div>
    </MainLayout>
  )
}

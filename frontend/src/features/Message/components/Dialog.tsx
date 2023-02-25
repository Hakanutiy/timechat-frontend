import '../../../styles/components/dialog.scss'

import { ChatDialog } from '@/features/Message/components/ChatDialog'
import { DialogHeader } from '@/features/Message/components/DialogHeader'
import { DialogNavBar } from '@/features/Message/components/DialogNavBar'
import { DialogSetting } from '@/features/Message/components/DialogSetting'
export const Dialog = () => {
  return (
    <div>
      <div className="app">
        <DialogHeader />
        <div className="wrapper">
          <DialogNavBar />
          <ChatDialog />
          <DialogSetting />
        </div>
      </div>
    </div>
  )
}

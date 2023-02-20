import { NavBar } from '@/components/Elements/NavBar'
import { MainLayout } from '@/components/Layout'
import { DialogNavBar } from '@/features/Message/components/ChatDialog'

import { Dialog } from './../components/Dialog'
export const Messages = () => {
  return (
    <MainLayout>
      <DialogNavBar />
      <Dialog />
    </MainLayout>
  )
}

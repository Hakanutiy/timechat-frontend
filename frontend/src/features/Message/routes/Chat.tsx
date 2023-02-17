import { MainLayout } from '@/components/Layout'

import { DialogNavBar } from '../components/ChatDialog'
import { Dialog } from './../components/Dialog'
export const Messages = () => {
  return (
    <MainLayout>
      <DialogNavBar />
      <Dialog />
    </MainLayout>
  )
}

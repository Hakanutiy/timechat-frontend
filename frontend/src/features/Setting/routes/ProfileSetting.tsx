import { NavBar } from '@/components/Elements/NavBar'
import { MainLayout } from '@/components/Layout'
import { DialogNavBar } from '@/features/Message/components/ChatDialog'

import { Dialog } from '../components/Dialog'
import { Setting } from '../components/Setting'
export const ProfileSetting = () => {
  return (
    <MainLayout>
      <DialogNavBar />
      <Dialog />
      <Setting />
    </MainLayout>
  )
}

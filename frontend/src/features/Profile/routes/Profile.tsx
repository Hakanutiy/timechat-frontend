import { NavBar } from '@/components/Elements/NavBar'
import { MainLayout } from '@/components/Layout'

import { PlaceholderChat } from '../components/PlaceholderChat'
import { ProfileDialog } from '../components/ProfileDialog'

export const Profile = () => {
  return (
    <MainLayout>
      <ProfileDialog />
      <PlaceholderChat />
    </MainLayout>
  )
}

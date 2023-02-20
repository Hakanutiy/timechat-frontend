import { MainLayout } from '@/components/Layout'

import { NavBar } from '../../../components/Elements/NavBar'
import { CallsDialog } from '../components/CallDialog'
import { PlaceholderChat } from '../components/PlaceholderChat'

export const Calls = () => {
  return (
    <MainLayout>
      <CallsDialog /> <PlaceholderChat />
    </MainLayout>
  )
}

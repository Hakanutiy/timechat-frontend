import { NavBar } from '../components/NavBar'
import { PlaceholderChat } from '../components/PlaceholderChat'
import { ProfileDialog } from '../components/ProfileDialog'

export const Profile = () => {
  return (
    <div>
      <div className="flex">
        <NavBar />
        <ProfileDialog />
        <PlaceholderChat />
      </div>
    </div>
  )
}

import { Dialog } from '../components/Dialog'
import { NavBar } from '../components/NavBar'
import { DialogNavBar } from '../components/ChatDialog'
import { Setting } from '../components/Setting'
export const ProfileSetting = () => {
  return (
    <div>
      <div className="flex">
        <NavBar />
        <DialogNavBar />
        <Dialog />
        <Setting />
      </div>
    </div>
  )
}

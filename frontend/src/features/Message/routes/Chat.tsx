import { DialogNavBar } from '../components/ChatDialog'
import { NavBar } from '../components/NavBar'
import { Dialog } from './../components/Dialog'
export const Messages = () => {
  return (
    <div className="h-screen relative">
      <div className="flex ">
        <NavBar />
        <DialogNavBar />
        <Dialog />
      </div>
    </div>
  )
}

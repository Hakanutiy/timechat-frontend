import { CallsDialog } from '../components/CallDialog'
import { NavBar } from '../components/NavBar'
import { PlaceholderChat } from '../components/PlaceholderChat'

export const Calls = () => {
  return (
    <div>
      <div className="flex">
        <NavBar />
        <CallsDialog />
        <PlaceholderChat />
      </div>
    </div>
  )
}

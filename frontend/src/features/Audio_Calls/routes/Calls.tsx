import { PlaceholderChat } from '../components/PlaceholderChat'
import { CallsDialog } from '../components/CallDialog'
import { NavBar } from '../components/NavBar'

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

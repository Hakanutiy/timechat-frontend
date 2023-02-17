import { NavBar } from '@/features/audiocalls/components/NavBar'

export const MainLayout = ({ children }) => {
  return (
    <div className="h-screen relative">
      <div className="flex">
        <NavBar />
        {children}
      </div>
    </div>
  )
}

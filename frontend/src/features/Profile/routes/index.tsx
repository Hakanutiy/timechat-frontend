import { Route, Routes } from 'react-router-dom'
import { Profile } from './Profile'
export const ProfileRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Profile />}></Route>
      </Routes>
    </div>
  )
}

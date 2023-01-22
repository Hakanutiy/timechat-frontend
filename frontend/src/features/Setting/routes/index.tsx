import { Route, Routes } from 'react-router-dom'

import { ProfileSetting } from './ProfileSetting'

export const SettingRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<ProfileSetting />}></Route>
      </Routes>
    </div>
  )
}

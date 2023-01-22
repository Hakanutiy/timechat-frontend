import { Navigate, useRoutes } from 'react-router-dom'

import { CallsRoutes } from '@/features/Audio_Calls/routes'
import { LoginRoutes } from '@/features/login'
import { MessageRoutes } from '@/features/Message/routes'
import { ProfileRoutes } from '@/features/Profile/routes'
import { SettingRoutes } from '@/features/Setting/routes'

export enum ROUTES {
  login = '/login',
  message = '/messages',
  calls = '/calls',
  profile = '/profile',
  setting = '/setting',
}

const routes = [
  { path: ROUTES.login, element: <LoginRoutes /> },
  { path: '*', element: <Navigate to={ROUTES.login} /> },
  { path: ROUTES.message, element: <MessageRoutes /> },
  { path: ROUTES.calls, element: <CallsRoutes /> },
  { path: ROUTES.profile, element: <ProfileRoutes /> },
  { path: ROUTES.setting, element: <SettingRoutes /> },
]

export const AppRoutes = () => {
  const element = useRoutes([...routes])

  return <>{element}</>
}

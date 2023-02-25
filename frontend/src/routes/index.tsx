import { Navigate, useRoutes } from 'react-router-dom'

import { LoginRoutes } from '@/features/login'
import { MessageRoutes } from '@/features/Message/routes'

export enum ROUTES {
  login = '/login',
  message = '/messages',
}

const routes = [
  { path: ROUTES.login, element: <LoginRoutes /> },
  { path: '*', element: <Navigate to={ROUTES.login} /> },
  { path: ROUTES.message, element: <MessageRoutes /> },
]

export const AppRoutes = () => {
  const element = useRoutes([...routes])

  return <>{element}</>
}

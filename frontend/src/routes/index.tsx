import { Navigate, useRoutes } from 'react-router-dom'

import { ChatRoutes } from '@/features/chat'
import { LoginRoutes } from '@/features/login'

export enum ROUTES {
  login = '/login',
  chat = '/chat',
}

const routes = [
  { path: ROUTES.login, element: <LoginRoutes /> },
  { path: ROUTES.chat, element: <ChatRoutes /> },
  { path: '*', element: <Navigate to={ROUTES.login} /> },
]

export const AppRoutes = () => {
  const element = useRoutes([...routes])

  return <>{element}</>
}

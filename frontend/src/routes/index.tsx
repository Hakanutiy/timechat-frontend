import { Navigate, useRoutes } from 'react-router-dom'
import { LoginRoutes } from '@/features/login'
export enum ROUTES {
  login = '/login',
  
}

const routes = [{ path: ROUTES.login, element: <LoginRoutes /> }, { path: '*', element: <Navigate to={ROUTES.login} /> }]

export const AppRoutes = () => {
  const element = useRoutes([...routes])

  return <>{element}</>
}

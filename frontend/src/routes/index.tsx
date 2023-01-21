import { useRoutes } from 'react-router-dom'

import { protectedRoutes } from './protected'
import { publicRoutes } from './public'

const isAuth = false

export const AppRoutes = () => {
  const routes = isAuth ? protectedRoutes : publicRoutes

  const element = useRoutes([...routes])
  return <>{element}</>
}

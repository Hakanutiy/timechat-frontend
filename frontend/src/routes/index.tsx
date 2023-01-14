import { Navigate, useRoutes } from 'react-router-dom'

export enum ROUTES {
  index = '/',
}

const routes = [{ path: '*', element: <Navigate to={ROUTES.index} /> }]

export const AppRoutes = () => {
  const element = useRoutes([...routes])

  return <>{element}</>
}

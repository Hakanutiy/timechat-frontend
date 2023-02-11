import { Navigate } from 'react-router-dom'

import { Test } from '@/features/test'

export const protectedRoutes = [
  {
    path: '/test',
    element: <Test />,
  },
  {
    path: '*',
    element: <Navigate to="test" />,
  },
]

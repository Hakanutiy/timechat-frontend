import { Navigate } from 'react-router-dom'

import { Tests } from '@/features/auth/components/tesrt'

export const protectedRoutes = [
  {
    path: '/loader',
    element: <Tests />,
  },
  {
    path: '*',
    element: <Navigate to="loader" />,
  },
]

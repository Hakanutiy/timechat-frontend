import { Navigate } from 'react-router-dom'

import { lazyImport } from '@/utils/lazyImport'

const { ChatRoutes } = lazyImport(() => import('@/features/chat'), 'ChatRoutes')

export const protectedRoutes = [
  {
    path: '/chat',
    element: <ChatRoutes />,
  },
  {
    path: '*',
    element: <Navigate to="chat" />,
  },
]

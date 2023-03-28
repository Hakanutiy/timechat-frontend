import './styles/main.scss'

import { useTheme } from '@/hooks/useTheme'

import { AppProvider } from './providers/app'
import { AppRoutes } from './routes'

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}

export default App

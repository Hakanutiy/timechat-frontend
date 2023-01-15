import React from 'react'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom'

import { Spinner } from '@/components/Elements/Spinner'
import { queryClient } from '@/lib/react-query'

interface AppProviderProps {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="w-screen h-screen flex items-center justify-center">
          <Spinner />
        </div>
      }
    >
      <QueryClientProvider client={queryClient}>
        <Router>{children}</Router>
      </QueryClientProvider>
    </React.Suspense>
  )
}

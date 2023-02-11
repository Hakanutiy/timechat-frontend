import { createContext, useContext, useState } from 'react'

import { useLogin } from '@/features/auth'
import storage from '@/utils/storage'

const AuthContext = createContext({ isAuth: false, setIsAuth: null })

export const useAuth = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const login = useLogin({
    config: {
      onSuccess: (data) => {
        storage.setToken(data.access_token)
        setIsAuth(true)
      },
    },
  })

  const signout = () => {
    storage.clearToken()
    setIsAuth(false)
  }

  return { isAuth, login: login.mutate, signout }
}

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(!!storage.getToken())
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>{children}</AuthContext.Provider>
  )
}

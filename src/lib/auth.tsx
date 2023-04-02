import { createContext, useContext, useEffect, useState } from 'react'

import { useLogin, useRegister } from '@/features/auth'
import { refresh } from '@/features/auth'
import storage from '@/utils/storage'

const AuthContext = createContext({ isAuth: false, setIsAuth: null })

export const resetTokens = async () => {
  let isTokensReset
  try {
    const tokens = storage.getTokens()
    const responseTokens = await refresh(tokens?.refreshToken)
    if (responseTokens?.accessToken) {
      storage.setTokens(responseTokens)
      isTokensReset = true
    } else {
      storage.clearTokens()
    }
  } catch (error) {
    storage.clearTokens()
  }
  return isTokensReset
}

export const useAuth = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const login = useLogin({
    config: {
      onSuccess: (data) => {
        storage.setTokens(data)
        setIsAuth(true)
      },
    },
  })

  const register = useRegister()

  const signout = () => {
    storage.clearTokens()
    setIsAuth(false)
  }

  return {
    isAuth,
    login: login.mutate,
    signout,
    isLoggingIn: login.isLoading,
    isRegistering: register.isLoading,
    register: register.mutate,
  }
}

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(!!storage.getTokens())

  const onAuthorizationCheck = () => {
    const hasTokens = !!storage.getTokens()
    if (!hasTokens) setIsAuth(false)
  }
  useEffect(() => {
    window.addEventListener('storage', onAuthorizationCheck)
    return () => window.removeEventListener('storage', onAuthorizationCheck)
  })

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>{children}</AuthContext.Provider>
  )
}

import { Navigate, Route, Routes } from 'react-router-dom'

import { Login } from './Login'
import { Register } from './Register'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="*" element={<Navigate to="login" />} />
    </Routes>
  )
}

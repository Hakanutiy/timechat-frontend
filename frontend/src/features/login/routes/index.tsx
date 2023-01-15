import { Route, Routes } from 'react-router-dom'
import { Login } from './Login'

export const LoginRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Login />}></Route>
    </Routes>
  )
}
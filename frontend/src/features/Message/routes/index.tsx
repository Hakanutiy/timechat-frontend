import { Route, Routes } from 'react-router-dom'
import { Messages } from './Chat'
export const MessageRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Messages />}></Route>
      </Routes>
    </div>
  )
}

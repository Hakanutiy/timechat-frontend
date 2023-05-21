import { Route, Routes } from 'react-router-dom'

import { Chat } from './Chat'
export const ChatRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Chat />}></Route>
        <Route path=":chatId" element={<Chat />}></Route>
      </Routes>
    </div>
  )
}

import { Route, Routes } from 'react-router-dom'
import { Calls } from './Calls'
export const CallsRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Calls />}></Route>
      </Routes>
    </div>
  )
}

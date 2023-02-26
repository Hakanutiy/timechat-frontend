import { Head } from '../Head'
export const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="app">
        <Head />
        <div className="wrapper">{children}</div>
      </div>
    </div>
  )
}

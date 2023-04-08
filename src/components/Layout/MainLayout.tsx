export const MainLayout = ({ children, head }) => {
  return (
    <div>
      <div className="app">
        {head()}
        <div className="wrapper">{children}</div>
      </div>
    </div>
  )
}

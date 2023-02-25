export const MainLayout = ({ children }) => {
  return (
    <div className="h-screen relative">
      <div className="flex">{children}</div>
    </div>
  )
}

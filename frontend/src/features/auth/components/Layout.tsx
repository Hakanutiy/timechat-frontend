import { FC, ReactNode } from 'react'

import { Link } from '@/components/Elements'
import { Snackbar } from '@/components/Form/Snackbar'

interface LayoutProps {
  children: ReactNode
  title: string
  navigationLink: NavigationLinkProps
}

export const Layout: FC<LayoutProps> = ({ title, children, navigationLink }) => {
  return (
    <div className="layout">
      <div className="layout__field">
        <h1 className="layout__text">{title}</h1>
        {children}
        <NavigationLink {...navigationLink} />
      </div>
    </div>
  )
}

interface NavigationLinkProps {
  subtext: string
  label: string
  to: string
}

const NavigationLink: FC<NavigationLinkProps> = ({ subtext, label, to }) => (
  <p className="login__text_clue">
    {subtext}
    <Link to={to} className="ml-3 font-medium">
      {label}
    </Link>
    <Snackbar />
  </p>
)

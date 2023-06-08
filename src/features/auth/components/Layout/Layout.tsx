import { FC, ReactNode } from 'react'

import { Link } from '@/components/Elements'
import { Snackbar } from '@/components/Form/Snackbar'

import styles from './styles.module.scss'

interface LayoutProps {
  children: ReactNode
  title: string
  navigationLink: NavigationLinkProps
}

export const Layout: FC<LayoutProps> = ({ title, children, navigationLink }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.layoutField}>
        <h1 className={styles.layoutTitle}>{title}</h1>
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
  <p>
    {subtext}
    <Link to={to} className="ml-3 font-medium">
      {label}
    </Link>
  </p>
)

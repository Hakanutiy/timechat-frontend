import { FC, ReactNode } from 'react'

import { Link } from '@/components/Elements'

interface LayoutProps {
  children: ReactNode
  title: string
  navigationLink: NavigationLinkProps
}

export const Layout: FC<LayoutProps> = ({ title, children, navigationLink }) => {
  return (
    <div className="flex h-screen w-screen p-4 items-center justify-center">
      <div className="max-w-[423px] w-full">
        <h1 className="text-4xl mb-6 font-bold">{title}</h1>
        <div className="flex-col flex gap-4">{children}</div>
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
  <p className="flex justify-center py-10">
    {subtext}
    <Link to={to} className="ml-3 font-medium">
      {label}
    </Link>
  </p>
)

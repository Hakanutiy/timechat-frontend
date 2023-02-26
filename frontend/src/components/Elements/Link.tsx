import clsx from 'clsx'
import { Link as RouterLink, LinkProps } from 'react-router-dom'
export const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <RouterLink
      className={clsx('text-cyan-500 hover:text-cyan-900', className)}
      {...props}>
      {children}
    </RouterLink>
  )
}

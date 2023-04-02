import clsx from 'clsx'
import { Link as RouterLink, LinkProps } from 'react-router-dom'
export const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <RouterLink className={clsx(className)} {...props}>
      {children}
    </RouterLink>
  )
}

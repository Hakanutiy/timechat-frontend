import React, { FC } from 'react'
import { ReactNode } from 'react'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: ReactNode
}

export const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={`button ${className}`} {...props}>
      <span className={`button__text`}>{children}</span>
    </button>
  )
}

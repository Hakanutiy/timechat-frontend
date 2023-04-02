import clsx from 'clsx'
import React, { FC } from 'react'
import { ReactNode } from 'react'

import styles from './styles.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: ReactNode
}

export const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={clsx(styles.button, className)} {...props}>
      <span className={clsx(styles.buttonText)}>{children}</span>
    </button>
  )
}

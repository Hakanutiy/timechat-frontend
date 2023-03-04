import clsx from 'clsx'
import * as React from 'react'
import { FC } from 'react'
import { FieldError } from 'react-hook-form'

interface FieldWrapperProps {
  label?: string
  className?: string
  children: React.ReactNode
  description?: string
  error?: FieldError
}

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'className' | 'children'
>

export const FieldWrapper: FC<FieldWrapperProps> = ({
  label,
  className,
  children,
  error,
}) => {
  return (
    <div>
      <label className={clsx('password__field', className)}>
        {label}
        <div className="login__input">{children}</div>
      </label>
      <div className="login__error">{error?.message}</div>
    </div>
  )
}

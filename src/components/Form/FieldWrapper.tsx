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
      <label className={clsx('block font-normal text-sm', className)}>
        {label}
        <div className="mt-1">{children}</div>
      </label>
      <div className="text-red-500">{error?.message}</div>
    </div>
  )
}

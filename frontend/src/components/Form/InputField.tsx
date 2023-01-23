import clsx from 'clsx'
import { FC } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { FieldWrapper, FieldWrapperPassThroughProps } from '@/components/Form'

interface InputFieldProps extends FieldWrapperPassThroughProps {
  type?: 'text' | 'password' | 'email'
  className?: string
  registration: Partial<UseFormRegisterReturn>
}

export const InputField: FC<InputFieldProps> = ({
  label,
  className,
  registration,
  type,
}) => {
  return (
    <FieldWrapper label={label}>
      <input type={type} className={clsx('input', className)} {...registration}></input>
    </FieldWrapper>
  )
}

import clsx from 'clsx'
import { FC } from 'react'

import { FieldWrapper, FieldWrapperPassThroughProps } from '@/components/Form'

interface InputFieldProps extends FieldWrapperPassThroughProps {
  type?: 'text' | 'password' | 'email'
  className?: string
}

export const InputField: FC<InputFieldProps> = ({ label, className, type }) => {
  return (
    <FieldWrapper label={label}>
      <input type={type} className={clsx('input', className)}></input>
    </FieldWrapper>
  )
}

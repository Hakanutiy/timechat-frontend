import clsx from 'clsx'
import { FC } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { FieldWrapper, FieldWrapperPassThroughProps } from '@/components/Form'

import styles from './styles.module.scss'

interface InputFieldProps extends FieldWrapperPassThroughProps {
  type?: 'text' | 'password' | 'email' | 'file'
  className?: string
  registration: Partial<UseFormRegisterReturn>
}

export const InputField: FC<InputFieldProps> = ({
  label,
  className,
  registration,
  type,
  error,
}) => {
  return (
    <FieldWrapper label={label} error={error}>
      <input
        type={type}
        className={clsx(styles.input, className, { input__error: error })}
        {...registration}></input>
    </FieldWrapper>
  )
}

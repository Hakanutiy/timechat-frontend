import { FC, useState } from 'react'
import * as React from 'react'
import { UseFormRegisterReturn, UseFormReturn } from 'react-hook-form'

import { FieldWrapper, FieldWrapperPassThroughProps } from '@/components/Form'

import styles from './styles.module.scss'
interface InputFieldProps extends FieldWrapperPassThroughProps {
  type?: 'file'
  className?: string
  registration: Partial<UseFormRegisterReturn>
  children: (url: string) => React.ReactNode
}

export const InputFileField: FC<InputFieldProps> = ({
  label,

  registration,

  error,
  children,
}) => {
  const [url, setUrl] = useState(null)
  const { onChange, ..._registration } = registration
  const _onChange = (e) => {
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.onload = (ev) => {
      setUrl(ev.target.result)
    }
    fileReader.readAsDataURL(file)
    onChange(e)
  }
  return (
    <FieldWrapper label={label} error={error}>
      {children(url)}
      <label className={styles.buttonOpen} htmlFor={'file-loader-button'}>
        Загрузить файл
      </label>
      <input
        id={'file-loader-button'}
        onChange={_onChange}
        type={'file'}
        className={'hidden'}
        {..._registration}></input>
    </FieldWrapper>
  )
}

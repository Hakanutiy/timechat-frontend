import { ChangeEvent, FC, useState } from 'react'
import * as React from 'react'
import { UseFormRegisterReturn, UseFormReturn } from 'react-hook-form'

import { FieldWrapper, FieldWrapperPassThroughProps } from '@/components/Form'

import styles from './styles.module.scss'
interface InputFieldProps extends FieldWrapperPassThroughProps {
  type?: 'file'
  className?: string
  registration: Partial<UseFormRegisterReturn>
  children: (url: string[]) => React.ReactNode
  onChangeInput?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const readFileAsDataUrl = (file, callback) => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = (e) => resolve(callback(e.target.result))
    reader.readAsDataURL(file)
  })
}

export const InputFileField: FC<InputFieldProps> = ({
  label,

  registration,
  onChangeInput,
  error,
  children,
}) => {
  const [urls, setUrls] = useState([])
  const { onChange, ..._registration } = registration

  const _onChange = (e) => {
    const files = Array.from(e.target.files)

    files.forEach((file) => {
      readFileAsDataUrl(file, (url) => setUrls((prevUrls) => [...prevUrls, url]))
    })

    onChange(e)
  }

  return (
    <FieldWrapper label={label} error={error}>
      {children(urls)}
      <label className={styles.buttonOpen} htmlFor={'file-loader-button'}>
        Загрузить файл
      </label>
      <input
        multiple={true}
        id={'file-loader-button'}
        onChange={_onChange}
        type={'file'}
        className={'hidden'}
        {..._registration}></input>
    </FieldWrapper>
  )
}

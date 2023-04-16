import clsx from 'clsx'
import { FC, useState } from 'react'

import {
  FieldWrapper,
  FieldWrapperPassThroughProps,
} from '@/components/Form/FieldWrapper'
import styles from '@/components/Form/InputField/styles.module.scss'

interface InputFieldProps extends FieldWrapperPassThroughProps {
  className?: string
  onChange: (file: File) => void
}
export const UpdateFile: FC<InputFieldProps> = ({ className }) => {
  const [avatar, setAvatar] = useState(null)

  const handleFileChange = (event) => {
    setAvatar(event.target.files[0])
  }

  return (
    <FieldWrapper>
      <input
        type={'file'}
        className={clsx(styles.input, className)}
        onChange={handleFileChange}></input>
    </FieldWrapper>
  )
}

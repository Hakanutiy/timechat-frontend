import { FC } from 'react'

interface InputFieldProps {
  type?: 'text' | 'password' | 'email'
  className?: string
}

export const InputField: FC<InputFieldProps> = (props) => {
  return <input type={props.type} className={`input ${props.className}`}></input>
}

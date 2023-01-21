import { FC } from 'react'
import { ReactNode } from 'react'
interface ButtonProps {
  className?: string
  children?: ReactNode
}

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button className={`button ${props.className}`}>
      <span className="w-full h-6 font-extrabold text-xl text-white">
        {props.children}
      </span>
    </button>
  )
}

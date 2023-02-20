import { FC } from 'react'
import { Navigate } from 'react-router-dom'

import { IconProps } from '@/assets/icons/js/type'

export const ProfileIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="31"
      height="35"
      viewBox="0 0 31 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.2137 17.3358C20.0014 17.3358 23.8816 13.4555 23.8816 8.66789C23.8816 3.88023 20.0014 0 15.2137 0C10.4261 0 6.54584 3.88023 6.54584 8.66789C6.54584 13.4555 10.4261 17.3358 15.2137 17.3358ZM21.2812 19.5027H20.1504C18.647 20.1935 16.9744 20.5862 15.2137 20.5862C13.4531 20.5862 11.7872 20.1935 10.2771 19.5027H9.1462C4.12154 19.5027 0.0449219 23.5794 0.0449219 28.604V31.4211C0.0449219 33.2156 1.50086 34.6715 3.29538 34.6715H27.1321C28.9266 34.6715 30.3825 33.2156 30.3825 31.4211V28.604C30.3825 23.5794 26.3059 19.5027 21.2812 19.5027Z"
        fill="currentColor"
      />
    </svg>
  )
}

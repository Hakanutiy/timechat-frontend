import { NavLink } from 'react-router-dom'

import { ProfileIcon } from '@/assets/icons/js'
import { AudioIcon } from '@/assets/icons/js/AudioIcon'
import { DialogIcon } from '@/assets/icons/js/DialogIcon'
import { SettingIcon } from '@/assets/icons/js/SettingIcon'

export const navLinks = [
  {
    path: '/profile',
    label: 'string',
    Icon: ProfileIcon,
  },
  {
    path: '/messages',
    label: 'string',
    Icon: DialogIcon,
  },
  {
    path: '/calls',
    label: 'string',
    Icon: AudioIcon,
  },
  {
    path: '/setting',
    label: 'string',
    Icon: SettingIcon,
  },
]
export const NavBar = () => {
  return (
    <div className="max-w-{107} absolute">
      {navLinks?.map(({ Icon, path }) => (
        <NavLink
          className={({ isActive }) => (isActive ? 'text-cyan-600' : 'text-gray-500')}
          key={path}
          to={path}>
          <Icon className={'w-10 h-10 mx-4 my-6'} />
        </NavLink>
      ))}
    </div>
  )
}

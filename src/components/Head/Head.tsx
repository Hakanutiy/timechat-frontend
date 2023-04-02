import clsx from 'clsx'

import { DarkLightIcon, LogoIcon, SettingIcon } from '@/assets/icons'
import { MainModal } from '@/components/Modal'
import { useTheme } from '@/hooks/useTheme'
import { useUiStore } from '@/stores/ui'

import styles from './styles.module.scss'

export const Head = () => {
  const { theme, setTheme } = useTheme()
  const handleThemeClick = () => {
    if (theme === 'light') {
      setTheme('dark')
    }
    if (theme === 'dark') {
      setTheme('light')
    }
  }
  const { setCurrentModal } = useUiStore()
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <LogoIcon />
      </div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." />
      </div>
      <div className={styles.userSettings}>
        <button className={styles.darkLight} onClick={handleThemeClick}>
          <DarkLightIcon />
        </button>
        <div className={clsx(styles.settings)}>
          <SettingIcon />
        </div>
        <img
          className={clsx(styles.userProfile, styles.accountProfile)}
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
          alt="img-profile"></img>
      </div>
    </div>
  )
}

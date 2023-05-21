import clsx from 'clsx'

import { DarkLightIcon, LogoIcon, SettingIcon } from '@/assets/icons'
import { ModalWindow } from '@/components/Elements/ModalWindow'
import { MainModal } from '@/components/Modal'
import { useGetMe } from '@/features/chat/api/getMe'
import { Profile } from '@/features/chat/components/Profile'
import { useTheme } from '@/hooks/useTheme'
import { useUiStore } from '@/stores/ui'

import { UserSearch } from '../UserSearch'
import styles from './styles.module.scss'

export const Head = () => {
  const { theme, setTheme } = useTheme()
  const { data } = useGetMe({
    config: {},
  })
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
        <UserSearch />
      </div>
      <div className={styles.userSettings}>
        <button className={styles.darkLight} onClick={handleThemeClick}>
          <DarkLightIcon />
        </button>
        <div className={clsx(styles.settings)}>
          <SettingIcon />
        </div>

        <button onClick={() => setCurrentModal('profile')}>
          <img
            className={clsx(styles.userProfile, styles.accountProfile)}
            src={data?.avatar?.url}
            alt="img-profile"></img>
        </button>
        <MainModal modalId={'profile'}>
          <Profile />
        </MainModal>
      </div>
    </div>
  )
}

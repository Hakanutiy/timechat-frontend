import { SettingIcon } from '@/assets/icons'
import { Button } from '@/components/Elements'
import { Dropdown } from '@/components/Elements/Dropdown/DropDown'
import { useAuth } from '@/lib/auth'

import styles from './styles.module.scss'
export const LogOut = () => {
  const { signout } = useAuth()
  return (
    <Dropdown
      trigger={({ open }) => (
        <button className={styles.button} onClick={open}>
          <SettingIcon />
        </button>
      )}>
      <Button className={styles.buttonExit} onClick={signout}>
        Выйти
      </Button>
    </Dropdown>
  )
}

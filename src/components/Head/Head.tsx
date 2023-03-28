import { DarkLightIcon, LogoIcon, SettingIcon } from '@/assets/icons'
import { useTheme } from '@/hooks/useTheme'

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
  return (
    <div className="header">
      <div className="logo">
        <LogoIcon />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user-settings">
        <div className="dark-light">
          <button className={'button_theme'} onClick={handleThemeClick}>
            <DarkLightIcon />
          </button>
        </div>
        <div className="settings">
          <SettingIcon />
        </div>
        <img
          className="user-profile account-profile"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
          alt="img-profile"></img>
      </div>
    </div>
  )
}

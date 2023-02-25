import '@/styles/components/DialogHeader.scss'

import { DarkLightIcon } from '@/assets/icons/js/DialogHeader/DarkLightIcon'
import { LogoIcon } from '@/assets/icons/js/DialogHeader/LogoIcon'
import { SettingHeaderIcon } from '@/assets/icons/js/DialogHeader/SettingHeaderIcon'
export const DialogHeader = () => {
  return (
    <div className="header">
      <div className="logo">
        {' '}
        <LogoIcon />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user-settings">
        <div className="dark-light">
          <DarkLightIcon />
        </div>
        <div className="settings">
          <SettingHeaderIcon />
        </div>
        <img
          className="user-profile account-profile"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
          alt="img-profile"></img>
      </div>
    </div>
  )
}

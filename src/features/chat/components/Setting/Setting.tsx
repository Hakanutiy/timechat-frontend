import clsx from 'clsx'
import { useParams } from 'react-router-dom'

import {
  CallGroupIcon,
  ChangeEmojiIcon,
  SharedPhotoIcon,
  VideoChatIcon,
} from '@/assets/icons'
import DefaultAvatar from '@/assets/image/DefaultAvatar.png'
import { useGetChat } from '@/features/chat/api/getChat'
import { useGetMe } from '@/features/chat/api/getMe'
import { useTheme } from '@/hooks/useTheme'

import styles from './styles.module.scss'
export const Setting = () => {
  const { setThemeMessage } = useTheme()
  const handleThemeBLueClick = () => {
    setThemeMessage('blue')
  }
  const handleThemePurpleClick = () => {
    setThemeMessage('purple')
  }
  const handleThemeGreenClick = () => {
    setThemeMessage('green')
  }
  const handleThemeOrangeClick = () => {
    setThemeMessage('orange')
  }
  const { chatId } = useParams()
  const { data: me } = useGetMe({ config: {} })
  const { data: chat } = useGetChat({ config: {}, chatId })
  return (
    <div className={clsx(styles.detailArea, 'hidden-md', 'area')}>
      <div className={clsx(styles.detailAreaHeader)}>
        <div className={clsx(styles.msgProfile, styles.group)}>
          <img
            className={styles.img}
            src={chat?.preview?.url || DefaultAvatar}
            alt={chat?.name}
          />
        </div>
        <div className={styles.detailTitle}>{chat?.name}</div>
        <div className={styles.detailSubtitle}>Created by Aysenur, 1 May 2020</div>
        <div className={styles.detailButtons}>
          <button className={styles.detailButton}>
            <CallGroupIcon /> Call Group
          </button>
          <button className={styles.detailButton}>
            <VideoChatIcon />
            Video Chat
          </button>
        </div>
      </div>
      <div className={styles.detailChanges}>
        <input type="text" placeholder="Search in Conversation"></input>
        <div className={styles.detailChange}>
          Change Color
          <div className={styles.colors}>
            <button className={styles.buttonTheme} onClick={handleThemeBLueClick}>
              <div className={clsx(styles.color, 'blue', styles.colorSelected)}></div>
            </button>
            <button className={styles.buttonTheme} onClick={handleThemePurpleClick}>
              <div className={clsx(styles.color, 'purple')}></div>
            </button>
            <button className={styles.buttonTheme} onClick={handleThemeGreenClick}>
              <div className={clsx(styles.color, 'green')}></div>
            </button>
            <button className={styles.buttonTheme} onClick={handleThemeOrangeClick}>
              <div className={clsx(styles.color, 'orange')}></div>
            </button>
          </div>
        </div>
        <div className={styles.detailChange}>
          <ChangeEmojiIcon />
          Change Emoji
        </div>
      </div>
      <div className={styles.detailPhotos}>
        <div className={styles.detailPhotoTitle}>
          <SharedPhotoIcon />
          Shared photos
        </div>
        <div className={styles.detailPhotoGrid}>
          <img
            src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2168&q=80"
            alt={'imageass'}
          />
          <img
            src="https://images.unsplash.com/photo-1516085216930-c93a002a8b01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
            alt={'imageass'}
          />
          <img
            src="https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80"
            alt={'imageass'}
          />
          <img
            src="https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2287&q=80"
            alt={'imageass'}
          />
          <img
            src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2247&q=80"
            alt={'imageass'}
          />
          <img
            src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
            alt={'imageass'}
          />
          <img
            src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80"
            alt={'imageass'}
          />
          <img
            src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80"
            alt={'imageass'}
          />
          <img
            src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2309&q=80"
            alt={'imageass'}
          />

          <img
            src="https://images.unsplash.com/photo-1473170611423-22489201d919?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80"
            alt={'imageass'}
          />
          <img
            src="https://images.unsplash.com/photo-1579613832111-ac7dfcc7723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
            alt={'imageass'}
          />
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2189&q=80"
            alt={'imageass'}
          />
        </div>
        <div className={styles.viewMore}>View More</div>
      </div>
    </div>
  )
}

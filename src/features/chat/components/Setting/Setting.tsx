import clsx from 'clsx'
import { useState } from 'react'
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
import { useGetChatImages } from '@/features/chat/api/useGetChatImages'
import { useTheme } from '@/hooks/useTheme'
import { useUiStore } from '@/stores/ui'

import styles from './styles.module.scss'
export const Setting = ({ chatPicture }) => {
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
  const { data: images } = useGetChatImages({ config: {}, chatId })
  const [countImage, setCountImage] = useState(16)

  const CountImageMore = () => {
    setCountImage(countImage + 16)
  }
  return (
    <div
      className={clsx(
        styles.detailArea,
        'hidden-md',
        'area',
        chatPicture && styles.detailAreaAnimationIsTrue,
      )}>
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
          {images &&
            images
              .slice(0, countImage)
              .map((image) => <img key={image._id} src={image.url} alt={image.url} />)}
        </div>
        {images?.length > countImage && (
          <button onClick={CountImageMore} className={styles.viewMore}>
            View More
          </button>
        )}
      </div>
    </div>
  )
}

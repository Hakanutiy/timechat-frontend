import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  AddIcon,
  EmojiIcon,
  ImageIcon,
  LikeIcon,
  PicturesIcon,
  VideoIcon,
} from '@/assets/icons'
import { useGetChat } from '@/features/chat/api/getChat'
import { useGetMe } from '@/features/chat/api/getMe'
import { useSendMessage } from '@/features/chat/api/sendMessage'
import { formatDate } from '@/utils/date'

import { useSubscribeMessage } from '../../api/subscribeMessage'
import styles from './styles.module.scss'

export const Dialog = ({ chatId }) => {
  const { data: me } = useGetMe({ config: {} })
  const [messageText, setMessageText] = useState('')
  const { data: chat } = useGetChat({ config: {}, chatId })
  const sendMessage = useSendMessage()
  useSubscribeMessage(chatId)
  const onSendMessage = () => {
    sendMessage({ chatId, text: messageText })
  }
  return (
    <div className={styles.chatArea}>
      <div className={styles.chatAreaHeader}>
        <div className={styles.chatAreaTitle}>CodePen Group</div>
        <div className={styles.chatAreaGroup}>
          <img
            className={styles.chatAreaProfile}
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
            alt=""
          />
          <img
            className={styles.chatAreaProfile}
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png"
            alt=""></img>
          <img
            className={styles.chatAreaProfile}
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png"
            alt=""
          />
          <span>+4</span>
        </div>
      </div>
      <div className={styles.chatAreaMain}>
        {chat?.messages.map((message) => (
          <div
            key={message._id}
            className={clsx(
              styles.chatMsg,
              message.sender._id == me._id && styles.owner,
            )}>
            <div className={clsx(styles.chatMsgProfile)}>
              <img
                className={clsx(styles.chatMsgImg)}
                src={message.sender.avatar.url}
                alt=""
              />
              <div className={styles.chatMsgDate}>{formatDate(message.createdAt)}</div>
            </div>
            <div className={styles.chatMsgContent}>
              <div className={styles.chatMsgText}>
                <p>{message.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.chatAreaFooter}>
        <VideoIcon />
        <ImageIcon />
        <AddIcon />
        <PicturesIcon />
        <input
          onChange={(e) => setMessageText(e.target.value)}
          value={messageText}
          type="text"
          placeholder="Type something here..."
        />
        <button onClick={onSendMessage}>
          <EmojiIcon />
        </button>
        <LikeIcon />
      </div>
    </div>
  )
}

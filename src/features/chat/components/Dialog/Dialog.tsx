import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

import {
  AddIcon,
  EmojiIcon,
  ImageIcon,
  LikeIcon,
  PicturesIcon,
  VideoIcon,
} from '@/assets/icons'
import DefaultAvatar from '@/assets/image/DefaultAvatar.png'
import { AlwaysScrollToBottom } from '@/components/AlwaysScrollToBottom/AlwaysScrollToBottom'
import { useGetChat } from '@/features/chat/api/getChat'
import { useGetChats } from '@/features/chat/api/getChats'
import { useGetMe } from '@/features/chat/api/getMe'
import { useSendMessage } from '@/features/chat/api/sendMessage'
import { useSendReadMessage } from '@/features/chat/api/sendMessageRead'
import { useSubscribeMessageRead } from '@/features/chat/api/subscribeMessageRead'
import { formatDate } from '@/utils/date'

import { useSubscribeMessage } from '../../api/subscribeMessage'
import styles from './styles.module.scss'

export const Dialog = ({ chatId }) => {
  const { data: me } = useGetMe({ config: {} })
  const [messageText, setMessageText] = useState('')
  const { data: chat } = useGetChat({ config: {}, chatId })
  const { data: user } = useGetChats({ config: {} })
  const sendMessage = useSendMessage()

  useSubscribeMessage(chatId)
  const onSendMessage = () => {
    sendMessage({ chatId, text: messageText })
    setMessageText('')
  }

  const handleKeyProps = (e) => {
    if (e.key === 'Enter') {
      onSendMessage()
    }
  }
  return (
    <div className={styles.chatArea}>
      <div className={styles.chatAreaHeader}>
        <div className={styles.chatAreaTitle}></div>
        <div className={styles.chatAreaGroup}>
          <img
            className={styles.chatAreaProfile}
            src={chat?.preview?.url || DefaultAvatar}
            alt={chat?.preview?._id}
          />
        </div>
      </div>
      <MessageChat chatId={chatId} me={me} chat={chat} />
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
          onKeyDown={handleKeyProps}
        />
        <button>
          <EmojiIcon />
        </button>
        <LikeIcon />
      </div>
    </div>
  )
}

const MessageChat = ({ chatId, chat, me }) => {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIsVisible(entry.isIntersecting),
    )

    if (elementRef.current) observer.observe(elementRef.current)

    return () => {
      observer.disconnect()
    }
  }, [elementRef])

  const sendReadMessage = useSendReadMessage()
  useSubscribeMessageRead(chatId)
  if (isVisible) {
    sendReadMessage({ chatId, messageId: chat._id })
  }
  return (
    <div className={styles.chatAreaMain}>
      {chat?.messages?.map((message) => (
        <div
          ref={elementRef}
          key={message._id}
          className={clsx(styles.chatMsg, message.sender._id == me._id && styles.owner)}>
          <div className={clsx(styles.chatMsgProfile)}>
            <img
              className={clsx(styles.chatMsgImg)}
              src={message.sender?.avatar?.url || DefaultAvatar}
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
      <AlwaysScrollToBottom />
    </div>
  )
}

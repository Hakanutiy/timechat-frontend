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
import { MoreIcon } from '@/assets/icons/js/dialog/MoreIcon'
import DefaultAvatar from '@/assets/image/DefaultAvatar.png'
import { AlwaysScrollToBottom } from '@/components/AlwaysScrollToBottom/AlwaysScrollToBottom'
import { MainModal } from '@/components/Modal'
import { useGetChat } from '@/features/chat/api/getChat'
import { useGetChats } from '@/features/chat/api/getChats'
import { useGetMe } from '@/features/chat/api/getMe'
import { SendMessageOptions, useSendMessage } from '@/features/chat/api/sendMessage'
import { useSendReadMessage } from '@/features/chat/api/sendMessageRead'
import { useSendWriteMessage } from '@/features/chat/api/sendWriteMessage'
import { useSubscribeMessageRead } from '@/features/chat/api/subscribeMessageRead'
import { useSubscribeWriteMessage } from '@/features/chat/api/subscribeWriteMessage'
import { SendPicture } from '@/features/chat/components/SendPicture/SendPicture'
import { useDebounce } from '@/hooks/useDebounce'
import { useUiStore } from '@/stores/ui'
import { formatDate } from '@/utils/date'

import { useSubscribeMessage } from '../../api/subscribeMessage'
import styles from './styles.module.scss'

export const Dialog = ({ chatId, chatPicture, setChatPicture }) => {
  const { data: me } = useGetMe({ config: {} })
  const [messageText, setMessageText] = useState('')
  const { data: chat } = useGetChat({ config: {}, chatId })
  const { data: user } = useGetChats({ config: {} })

  const sendMessage = useSendMessage()
  const sendWriteMessage = useSendWriteMessage()

  useSubscribeMessage(chatId)
  useSubscribeWriteMessage(chatId)
  const onSendMessage = (data: Omit<SendMessageOptions, 'chatId'>) => {
    sendMessage({ chatId, ...data })
    setMessageText('')
  }
  const handleChatPicture = () => {
    setChatPicture(!chatPicture)
  }

  const handleOnChange = (e) => {
    setMessageText(e.target.value)
  }

  const handleKeyProps = (e) => {
    if (e.key === 'Enter') {
      onSendMessage({ text: messageText })
    }
    sendWriteMessage({ chatId, isTyping: true })
  }

  const handleKeyUp = () => {
    setTimeout(() => {
      sendWriteMessage({ chatId, isTyping: false })
    }, 3500)
  }

  const { setCurrentModal } = useUiStore()
  return (
    <div className={styles.chatArea}>
      <div className={styles.chatAreaHeader}>
        <div className={styles.chatAreaTitle}></div>
        <button onClick={handleChatPicture} className={styles.chatSetting}>
          <MoreIcon />
        </button>

        <div className={styles.chatAreaGroup}>
          <img
            className={styles.chatAreaProfile}
            src={chat?.preview?.url || DefaultAvatar}
            alt={chat?.preview?._id}
          />
        </div>
      </div>
      <MessageChat chatId={chatId} me={me} chat={chat} />
      {chat?.isTyping && <p className={styles.typingMessage}></p>}
      <div className={styles.chatAreaFooter}>
        <VideoIcon />
        <ImageIcon />
        <AddIcon />
        <button onClick={() => setCurrentModal('pictureSend')}>
          <PicturesIcon />
        </button>
        <MainModal modalId={'pictureSend'}>
          <SendPicture onSendMessage={onSendMessage} />
        </MainModal>
        <input
          onChange={handleOnChange}
          value={messageText}
          type="text"
          placeholder="Type something here..."
          onKeyDown={handleKeyProps}
          onKeyUp={handleKeyUp}
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
              <div className={styles.chatMsgPicture}>
                {message.images?.[0] &&
                  message.images.map((image) => (
                    <img key={image._id} src={image.url} alt={image.url} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      <AlwaysScrollToBottom />
    </div>
  )
}

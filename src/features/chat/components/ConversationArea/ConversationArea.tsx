import clsx from 'clsx'
import React, { useState } from 'react'

import DefaultAvatar from '@/assets/image/DefaultAvatar.png'
import { PaginationEndlessRibbon } from '@/components/Elements'
import { Link } from '@/components/Elements'
import { useGetChats } from '@/features/chat/api/getChats'
import { formatDate } from '@/utils/date'

import styles from './styles.module.scss'

export const ConversationArea = () => {
  const [search, setSearch] = useState('')
  const [offset, setOffSet] = useState(10)
  const { data: response, isLoading } = useGetChats({
    config: {},
    filters: { search, limit: offset },
  })

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : response?.data?.length ? (
        <div className={clsx(styles.conversationArea, 'hidden-sm', 'area')}>
          <ChatList chats={response.data} />
          <PaginationEndlessRibbon
            isLoading={isLoading}
            maxItems={response.count}
            onChange={setOffSet}
            offset={offset}
          />
        </div>
      ) : (
        <div> </div>
      )}
    </>
  )
}

const ChatList = ({ chats }) => {
  return chats.map((chat) => (
    <Link to={`/chat/${chat._id}`} key={chat.id}>
      <div className={clsx(styles.msg, styles.msgOnline)}>
        <img
          className={styles.msgProfile}
          src={chat.preview?.url || DefaultAvatar}
          alt={chat?.name}
        />
        <div className={styles.msgProfileDetail}>
          <div className={styles.msgProfileUsername}>
            {chat?.name}
            <div className={styles.unreadMessage}>{chat?.unreadMessageCount || null}</div>
          </div>
          <div className={styles.msgProfileContent}>
            <span className={styles.msgProfileMessage}>{chat?.lastMessage}</span>
            <span className={styles.msgProfileDate}>
              {formatDate(chat?.lastMessageAt)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  ))
}

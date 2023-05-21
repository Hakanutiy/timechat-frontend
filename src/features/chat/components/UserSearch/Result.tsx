import { useState } from 'react'

import DefaultAvatar from '@/assets/image/DefaultAvatar.png'
import { PaginationEndlessRibbon } from '@/components/Elements'
import { useGetUsers } from '@/features/chat/api'
import { useCreateChat } from '@/features/chat/api/createChat'
import { useSubscribeChat } from '@/features/chat/api/subscribeChat'

import styles from './styles.module.scss'
export const Result = ({ search }) => {
  const [offset, setOffset] = useState(10)

  const { data: response, isLoading } = useGetUsers({
    config: {},
    filters: { search, limit: offset },
  })

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : response?.data?.length ? (
        <div>
          <UserList users={response.data} />
          <PaginationEndlessRibbon
            isLoading={isLoading}
            maxItems={response.count}
            onChange={setOffset}
            offset={offset}
          />
        </div>
      ) : (
        <div> Не найдено </div>
      )}
    </>
  )
}

const UserList = ({ users }) => {
  const createChat = useCreateChat()

  useSubscribeChat()
  const onCreateChat = (userId) => {
    createChat({ senders: [userId] })
  }

  return users.map((user) => (
    <button
      onClick={() => onCreateChat(user._id)}
      className={styles.countUser}
      key={user._id}>
      <img
        className={styles.userImage}
        alt={user.username}
        src={user.avatar?.url || DefaultAvatar}
      />
      <div>
        <div className={styles.userName}>
          {user.firstName} {user.lastName}
        </div>
        <div className={styles.userMail}> @{user.username}</div>
        <div className={styles.userInfo}> {user.description}</div>
      </div>
      <div>{user.isOnline}</div>
    </button>
  ))
}

import { useState } from 'react'

import DefaultAvatar from '@/assets/image/DefaultAvatar.png'
import { PaginationEndlessRibbon } from '@/components/Elements'
import { useGetUsers } from '@/features/chat/api'

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
  return users.map((country) => (
    <div className={styles.countUser} key={country._id}>
      <img
        className={styles.userImage}
        alt={country.username}
        src={country.avatar?.url || DefaultAvatar}
      />
      <div>
        <div className={styles.userName}>
          {country.firstName} {country.lastName}
        </div>
        <div className={styles.userMail}> @{country.username}</div>
        <div className={styles.userInfo}> {country.description}</div>
      </div>
      <div>{country.isOnline}</div>
    </div>
  ))
}

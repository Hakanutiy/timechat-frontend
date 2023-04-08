import { useState } from 'react'

import DefaultAvatar from '@/assets/image/DefaultAvatar.png'
import { PaginationEndlessRibbon } from '@/components/Elements'
import { useGetUsers } from '@/features/chat/api'

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
        <div className="count_list">
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
    <div className="count_user" key={country._id}>
      <img
        className="user_image"
        alt={country.username}
        src={country.avatar?.url || DefaultAvatar}
      />
      <div>
        <div className="user__name">
          {country.firstName} {country.lastName}
        </div>
        <div className="user__mail"> @{country.username}</div>
        <div className="user__info"> {country.description}</div>
      </div>
      <div>{country.isOnline}</div>
    </div>
  ))
}

import { useState } from 'react'

import { Button } from '@/components/Elements'
import { useGetMe } from '@/features/chat/api/getMe'
import { UpdateImage } from '@/features/chat/components/Profile/updateUserForm/UpdateImage'
import { UpdateUserForm } from '@/features/chat/components/Profile/updateUserForm/UpdateUserForm'
import { UserMe } from '@/features/chat/components/Profile/updateUserForm/UserMe'

import styles from './styles.module.scss'
export const Profile = () => {
  const { data } = useGetMe({
    config: {},
  })

  const [content, setContent] = useState(1)
  const handleButtonClick = (newState) => {
    setContent(newState)
  }

  const renderContent = () => {
    switch (content) {
      case 1:
        return (
          <>
            <UserMe handleButtonClick={handleButtonClick} />
            <Button onClick={() => handleButtonClick(2)}>
              <div>Изменить профиль</div>
            </Button>
          </>
        )
      case 2:
        return (
          <>
            <Button className={styles.buttonUpdate} onClick={() => handleButtonClick(3)}>
              <div>Изменить email</div>
            </Button>

            <Button className={styles.buttonUpdate} onClick={() => handleButtonClick(4)}>
              <div>Изменить имя</div>
            </Button>
            <Button onClick={() => handleButtonClick(5)}>
              <div>Изменить описание</div>
            </Button>
          </>
        )
      case 3:
        return <UpdateUserForm content={content} setContent={setContent} />
      case 4:
        return <UpdateUserForm content={content} setContent={setContent} />
      case 5:
        return <UpdateUserForm content={content} setContent={setContent} />
      case 6:
        return <UpdateImage setContent={setContent} />
      default:
        return null
    }
  }

  return <>{renderContent()}</>
}

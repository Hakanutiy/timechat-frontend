import { useGetMe } from '@/features/chat/api/getMe'

import styles from './styles.module.scss'
export const UserMe = ({ handleButtonClick }) => {
  const { data } = useGetMe({
    config: {},
  })

  return (
    <div className={styles.profileSetting}>
      <div className={styles.countUser} key={data?._id}>
        <button onClick={() => handleButtonClick(6)}>
          <img
            className={styles.userImage}
            alt={data?.username}
            src={
              data?.avatar?.url ||
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'
            }
          />
        </button>

        <div>
          <div className={styles.userName}>
            {data?.firstName} {data?.lastName}
          </div>
          <div className={styles.userMail}> @{data?.username}</div>
          <div className={styles.description}> {data?.description}</div>
        </div>
        <div>{data?.isOnline}</div>
      </div>
    </div>
  )
}

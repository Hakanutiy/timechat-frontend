import clsx from 'clsx'

import { ButtonModal } from '@/features/chat/components/UserSearch/Result'

import styles from './styles.module.scss'

export const ConversationArea = () => {
  return (
    <div className={clsx(styles.conversationArea, 'hidden-sm', 'area')}>
      <div className={clsx(styles.msg, styles.msgOnline)}>
        <img
          className={styles.msgProfile}
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
          alt=""
        />
        <div className={styles.msgProfileDetail}>
          <div className={styles.msgProfileUsername}>Madison Jones</div>
          <div className={styles.msgProfileContent}>
            <span className={styles.msgProfileMessage}>What time was our meet</span>
            <span className={styles.msgProfileDate}>20m</span>
          </div>
        </div>
      </div>

      <div className={styles.overlay}></div>
    </div>
  )
}

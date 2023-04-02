import clsx from 'clsx'

import {
  AddIcon,
  EmojiIcon,
  ImageIcon,
  LikeIcon,
  PicturesIcon,
  VideoIcon,
} from '@/assets/icons'

import styles from './styles.module.scss'

export const Dialog = () => {
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
        <div className={styles.chatMsg}>
          <div className={styles.chatMsgProfile}>
            <img
              className={styles.chatMsgImg}
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
              alt=""
            />
            <div className={styles.chatMsgDate}>Message seen 1.22pm</div>
          </div>
          <div className={styles.chatMsgContent}>
            <div className={styles.chatMsgText}>
              <p>Adaptogen taiyaki austin jean shorts brunch</p>
            </div>
            <div className={styles.chatMsgText}>
              <img
                src="https://media0.giphy.com/media/yYSSBtDgbbRzq/giphy.gif?cid=ecf05e47344fb5d835f832a976d1007c241548cc4eea4e7e&rid=giphy.gif"
                alt={'imageass'}
              />
            </div>
            <div className={styles.chatMsgText}>
              <p>
                Neque gravida in fermentum et sollicitudin ac orci phasellus egestas.
                Pretium lectus quam id leo.
              </p>
            </div>
          </div>
        </div>
        <div className={clsx(styles.chatMsg, styles.owner)}>
          <div className={clsx(styles.chatMsgProfile)}>
            <img
              className={clsx(styles.chatMsgImg)}
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
              alt=""
            />
            <div className={styles.chatMsgDate}>Message seen 1.22pm</div>
          </div>
          <div className={styles.chatMsgContent}>
            <div className={styles.chatMsgText}>
              <p>Adaptogen taiyaki austin jean shorts brunch</p>
            </div>
            <div className={styles.chatMsgText}>
              <p>Adaptogen taiyaki austin jean shorts brunch</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.chatAreaFooter}>
        <VideoIcon />
        <ImageIcon />
        <AddIcon />
        <PicturesIcon />
        <input type="text" placeholder="Type something here..." />
        <EmojiIcon />
        <LikeIcon />
      </div>
    </div>
  )
}

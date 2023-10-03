import styles from './styles.module.scss'
export const CheckImage = ({ imageId, imageUrl }) => {
  return (
    <div>
      <img className={styles.imageId} key={imageId} src={imageUrl} alt={'checkImg'} />
    </div>
  )
}

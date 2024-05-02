import LoadingIcon from '../icons/LoadingIcon';
import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.Loading}>
        <LoadingIcon />
    </div>
  )
}

export default Loading;
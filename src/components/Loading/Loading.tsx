import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.Loading}>
      <img src="/assets/preloader.gif" />
    </div>
  );
};

export default Loading;

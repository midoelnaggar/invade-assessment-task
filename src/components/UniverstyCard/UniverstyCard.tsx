import styles from "./UniverstyCard.module.scss";

interface IProps {
  number: number;
  universty: IUniversity;
}

const UniverstyCard = ({ number, universty: { name } }: IProps) => {
  return (
    <div className={styles.UniverstyCard}>
      <div className={styles.number}>{number}</div>
    </div>
  );
};

export default UniverstyCard;

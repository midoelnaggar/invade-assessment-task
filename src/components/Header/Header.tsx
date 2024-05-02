import { useParams } from "next/navigation";
import styles from "./Header.module.scss";

const Header = () => {
  const params = useParams();

  return <div className={styles.Header}>Header</div>;
};

export default Header;

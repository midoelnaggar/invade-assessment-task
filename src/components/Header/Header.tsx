import { useParams, usePathname } from "next/navigation";
import styles from "./Header.module.scss";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, searchUniversities } from "@/store";

const Header = () => {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();
  const pathname = usePathname();

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    dispatch(searchUniversities(searchText));
  }, [searchText]);

  useEffect(() => {
    setSearchText("");
  }, [pathname]);

  return (
    <div className={styles.Header}>
      <div className={styles.start}>
        <div className={styles.logoContainer}>
          <img src="/assets/logo.png" alt="logo" />
        </div>
      </div>
      <div
        className={styles.end}
        style={params?.index ? { width: 0 } : {}}
      >
        <div className={styles.searchContainer}>
          <input
            placeholder="Search Universities"
            value={searchText}
            onChange={handleSearchInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

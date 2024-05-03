"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "./page.module.scss";
import { AppState } from "@/store";
import UniverstyCard from "@/components/UniverstyCard/UniverstyCard";

const Home = () => {
  const { filteredUniversities } = useSelector(
    (state: AppState) => state.universities
  );
  return (
    <main className={styles.main}>
      <div className={styles.list}>
        {filteredUniversities?.map((univertsy, index) => (
          <UniverstyCard key={index} number={index + 1} universty={univertsy} />
        ))}
      </div>
    </main>
  );
};

export default Home;

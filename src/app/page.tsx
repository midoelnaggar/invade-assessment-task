"use client";
import { useSelector } from "react-redux";
import styles from "./page.module.scss";
import { AppState } from "@/store";

import Link from "next/link";

const Home = () => {
  const { universities } = useSelector((state: AppState) => state.universities);
  return (
    <main className={styles.main}>
      <div className={styles.list}>
        {universities.map((univertsy, index) => (
          <Link
            key={index}
            href={`/universty/${index}`}
            className={styles.univertsy}
          >
            {univertsy.name}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;

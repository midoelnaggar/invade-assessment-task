"use client";
import { AppState } from "@/store";
import styles from "./page.module.scss";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";

const Universty = () => {
  const params = useParams();

  const universty = useSelector(
    (state: AppState) =>
      state.universities.universities[Number(params?.index) as number]
  );

  return <div className={styles.Universty}>{universty.name}</div>;
};

export default Universty;

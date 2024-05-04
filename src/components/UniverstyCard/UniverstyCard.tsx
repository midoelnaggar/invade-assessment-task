import Link from "next/link";
import UniverstyIcon from "../icons/UniverstyIcon";
import styles from "./UniverstyCard.module.scss";
import DeleteIcon from "../icons/DeleteIcon";
import { useDispatch } from "react-redux";
import { AppDispatch, deleteUniversity } from "@/store";
import { useState } from "react";

interface IProps {
  index: number;
  universty: IUniversity;
}

const UniverstyCard = ({ index, universty: { name, country } }: IProps) => {
  const [deleted, setDeleted] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    setDeleted(true);
    setTimeout(() => {
      dispatch(deleteUniversity(index));
      setDeleted(false  );
    }, 300);
  };

  return (
    <li className={styles.UniverstyCard} style={deleted ? { scale: 0 ,opacity:0 }:{ scale: 1 ,opacity:1 }}>
      <h2>{name}</h2>
      <p>{country}</p>
      <Link href={`/universty/${index}`}>See more</Link>
      <UniverstyIcon className={styles.universtyIcon} />
      <button className={styles.delete} onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </li>
  );
};

export default UniverstyCard;

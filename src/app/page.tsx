"use client";
import { useSelector } from "react-redux";
import styles from "./page.module.scss";
import { AppState } from "@/store";
import UniverstyCard from "@/components/UniverstyCard/UniverstyCard";
import AscendingIcon from "@/components/icons/AscendingIcon";
import DescendingIcon from "@/components/icons/DescendingIcon";
import { useEffect, useState } from "react";
import { sortAscByName, sortDesByName } from "@/helpers/sortByName";

const Home = () => {
  const [sort, setSort] = useState<"asc" | "des" | null>(null);
  const [sortedUniversities, setSortedUniversities] = useState<IUniversity[]>(
    []
  );

  const { filteredUniversities } = useSelector(
    (state: AppState) => state.universities
  );

  const handleSortClick = () => {
    if (sort == "asc") {
      setSort("des");
    } else if (sort == "des") {
      setSort(null);
    } else if (!sort) {
      setSort("asc");
    }
  };

  useEffect(() => {
    if (sort == "asc") {
      setSortedUniversities(sortAscByName(filteredUniversities));
    } else if (sort == "des") {
      setSortedUniversities(sortDesByName(filteredUniversities));
    } else {
      setSortedUniversities(filteredUniversities);
    }
  }, [sort, filteredUniversities]);

  return (
    <main className={styles.main}>
      {sortedUniversities?.length > 0 ? (
        <button className={styles.sortContainer} onClick={handleSortClick}>
          {sort != "des" ? (
            <AscendingIcon fill={sort ? "var(--secondary-color)" : "black"} />
          ) : (
            <DescendingIcon fill="var(--secondary-color)" />
          )}
        </button>
      ) : null}
      <ul className={styles.list}>
        {sortedUniversities?.map((univertsy) => (
          <UniverstyCard
            key={univertsy.name}
            index={filteredUniversities.findIndex(
              (univ) => univ.name == univertsy.name
            )}
            universty={univertsy}
          />
        ))}
      </ul>
    </main>
  );
};

export default Home;

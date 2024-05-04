"use client";
import { AppState } from "@/store";
import styles from "./page.module.scss";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import UniverstyIcon from "@/components/icons/UniverstyIcon";
import ReactCountryFlag from "react-country-flag";
import WebsiteIcon from "@/components/icons/WebsiteIcon";

const Universty = () => {
  const params = useParams();

  const { name, country, domains, web_pages, alpha_two_code } = useSelector(
    (state: AppState) =>
      state.universities.filteredUniversities[Number(params?.index) as number]
  );

  return (
    <div className={styles.Universty}>
      <UniverstyIcon className={styles.icon} />
      <h1>{name}</h1>
      <div className={styles.country}>
        <div className={styles.flagContainer}>
          <ReactCountryFlag
            style={{ width: "inherit", height: "inherit" }}
            svg
            countryCode={alpha_two_code}
          />
        </div>
        <p>{country}</p>
      </div>
      <div className={styles.website}>
        <WebsiteIcon />
        <a href={web_pages?.[0]} target="_blank" rel="noopener noreferrer">
          {web_pages?.[0]}
        </a>
      </div>
    </div>
  );
};

export default Universty;

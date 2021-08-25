import React from "react";
import styles from "./GenreHeader.module.scss";

type GenreHeaderParams = {
  logoSrc: string;
  name: string;
};

const GenreHeader = ({ logoSrc, name }: GenreHeaderParams): JSX.Element => (
  <div className={styles.container}>
    <img className={styles.logo} src={logoSrc} alt="ロゴ" />
    <h1 className={styles.title}>{name}</h1>
  </div>
);

export default GenreHeader;

import React from "react";
import styles from "./GenreHeader.module.scss";
import { getComponentTemplate } from "src/lib/component";

type GenreHeaderParams = {
  logoSrc: string;
  name: string;
};

const GenreHeader = getComponentTemplate(({ logoSrc, name }: GenreHeaderParams) => (
  <div className={styles.container}>
    <img className={styles.logo} src={logoSrc} alt="ロゴ" />
    <h1 className={styles.title}>{name}</h1>
  </div>
));

export default GenreHeader;

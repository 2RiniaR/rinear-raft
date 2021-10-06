import React from "react";
import styles from "./GenreHeader.module.scss";
import StaticImage from "components/functions/image/StaticImage";

type GenreHeaderParams = {
  logoSrc: StaticImageData;
  title: string;
};

const GenreHeader = ({ logoSrc, title }: GenreHeaderParams): JSX.Element => (
  <div className={styles.layout}>
    <StaticImage className={styles.logo} src={logoSrc} alt={title} />
    <h1 className={styles.title}>{title}</h1>
  </div>
);

export default GenreHeader;

import React from "react";
import styles from "./GenreHeader.module.scss";
import StaticImage from "components/functions/image/StaticImage";
import { StaticImageData } from "next/image";

type GenreHeaderParams = {
  logoSrc: StaticImageData;
  title: string;
};

const GenreHeader = ({ logoSrc, title }: GenreHeaderParams): JSX.Element => (
  <header className={styles.layout}>
    <StaticImage className={styles.logo} src={logoSrc} alt={title} />
    <h1 className={styles.title}>{title}</h1>
  </header>
);

export default GenreHeader;

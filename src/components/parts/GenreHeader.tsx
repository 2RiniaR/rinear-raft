import React from "react";
import { StaticImageData } from "next/image";
import styles from "./GenreHeader.module.scss";
import { StaticImage } from "components/functions";

type GenreHeaderParams = {
  logoSrc: StaticImageData;
  title: string;
};

export const GenreHeader = ({ logoSrc, title }: GenreHeaderParams): JSX.Element => (
  <header className={styles.layout}>
    <StaticImage className={styles.logo} src={logoSrc} alt={title} layout="responsive" />
    <h1 className={styles.title}>{title}</h1>
  </header>
);

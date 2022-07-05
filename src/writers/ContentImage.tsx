import React from "react";
import { StaticImageData } from "next/image";
import styles from "./ContentImage.module.scss";
import { StaticImage } from "components/functions";

type Props = {
  src: StaticImageData;
  alt: string;
};

export const ContentImage = ({ src, alt }: Props): JSX.Element => (
  <StaticImage className={styles.container} src={src} alt={alt} />
);

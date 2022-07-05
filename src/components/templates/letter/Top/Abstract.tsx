import React from "react";
import styles from "./Abstract.module.scss";
import { Letter } from "models/content";
import { StaticImage } from "components/functions";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";

type Props = {
  letter: Letter;
};

export const Abstract = ({ letter }: Props): JSX.Element => (
  <div className={styles.layout}>
    <StaticImage src={letter.thumbnail ?? defaultThumbnailPic} alt="サムネイル" className={styles.thumbnail} />
    <p className={styles.description}>{letter.description}</p>
  </div>
);

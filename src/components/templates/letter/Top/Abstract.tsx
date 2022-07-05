import React from "react";
import styles from "./Abstract.module.scss";
import { Letter } from "models/content";
import { StaticImage } from "components/functions";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";

type Props = {
  content: Letter;
};

export const Abstract = ({ content }: Props): JSX.Element => (
  <div className={styles.layout}>
    <StaticImage src={content.thumbnail ?? defaultThumbnailPic} alt="サムネイル" className={styles.thumbnail} />
    <p className={styles.description}>{content.description}</p>
  </div>
);

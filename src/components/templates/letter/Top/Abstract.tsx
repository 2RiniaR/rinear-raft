import React from "react";
import styles from "./Abstract.module.scss";
import { LetterContent } from "lib/contents";
import StaticImage from "components/functions/StaticImage";
import defaultThumbnail from "public/img/default-thumbnail.webp";

type Props = {
  content: LetterContent;
};

const Abstract = ({ content }: Props): JSX.Element => (
  <div className={styles.layout}>
    <StaticImage src={content.thumbnail ?? defaultThumbnail} alt="サムネイル" className={styles.thumbnail} />
    <p className={styles.description}>{content.description}</p>
  </div>
);

export default Abstract;

import React from "react";
import styles from "./Abstract.module.scss";
import { MaterialContent } from "lib/contents";
import StaticImage from "components/functions/StaticImage";
import defaultThumbnail from "public/img/default-thumbnail.webp";

type Props = {
  content: MaterialContent;
};

const Abstract = ({ content }: Props): JSX.Element => (
  <div className={styles.layout}>
    <p className={styles.description}>{content.description}</p>
    <div className={styles.thumbnails}>
      {content.thumbnails.map((thumbnail, index) => (
        <StaticImage
          src={thumbnail ?? defaultThumbnail}
          alt="サブサムネイル"
          className={styles.thumbnail}
          key={`thumbnail-${index}-${thumbnail.src}`}
        />
      ))}
    </div>
  </div>
);

export default Abstract;

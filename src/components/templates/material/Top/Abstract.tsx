import React from "react";
import styles from "./Abstract.module.scss";
import { MaterialContent } from "types/content";
import { StaticImage } from "components/functions";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";

type Props = {
  content: MaterialContent;
};

export const Abstract = ({ content }: Props): JSX.Element => (
  <div className={styles.layout}>
    <p className={styles.description}>{content.description}</p>
    <div className={styles.thumbnails}>
      {content.thumbnails.map((thumbnail, index) => (
        <StaticImage
          src={thumbnail ?? defaultThumbnailPic}
          alt="サブサムネイル"
          className={styles.thumbnail}
          key={`thumbnail-${index}-${thumbnail.src}`}
        />
      ))}
    </div>
  </div>
);

import React from "react";
import styles from "./Abstract.module.scss";
import { Material } from "models/content";
import { StaticImage } from "components/functions";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";

type Props = {
  material: Material;
};

export const Abstract = ({ material }: Props): JSX.Element => (
  <div className={styles.layout}>
    <p className={styles.description}>{material.description}</p>
    <div className={styles.thumbnails}>
      {material.thumbnails.map((thumbnail, index) => (
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

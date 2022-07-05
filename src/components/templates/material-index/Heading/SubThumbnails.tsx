import styles from "./SubThumbnails.module.scss";
import { Material, WithoutPage } from "models/content";
import { StaticImage } from "components/functions";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";

type Props = {
  material: WithoutPage<Material>;
};

export const SubThumbnails = ({ material }: Props): JSX.Element => (
  <div className={styles.layout}>
    {[material.thumbnails[1], material.thumbnails[2], material.thumbnails[3]].map((thumbnail, index) => (
      <StaticImage
        src={thumbnail ?? defaultThumbnailPic}
        alt={material.title}
        className={styles.item}
        key={`thumbnailPath-${index}`}
        layout="responsive"
      />
    ))}
  </div>
);

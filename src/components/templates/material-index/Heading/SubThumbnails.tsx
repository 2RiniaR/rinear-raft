import styles from "./SubThumbnails.module.scss";
import { MaterialContentHead } from "types/content";
import { StaticImage } from "components/functions";
import defaultThumbnailPic from "public/general/thumbnail-default.webp";

type Props = {
  head: MaterialContentHead;
};

export const SubThumbnails = ({ head }: Props): JSX.Element => (
  <div className={styles.layout}>
    {[head.thumbnails[1], head.thumbnails[2], head.thumbnails[3]].map((thumbnail, index) => (
      <StaticImage
        src={thumbnail ?? defaultThumbnailPic}
        alt={head.title}
        className={styles.item}
        key={`thumbnailPath-${index}`}
        layout="responsive"
      />
    ))}
  </div>
);

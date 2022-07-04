import styles from "./SubThumbnails.module.scss";
import { MaterialContentHead } from "lib/contents";
import StaticImage from "components/functions/StaticImage";
import defaultThumbnail from "public/general/thumbnail-default.webp";

type Props = {
  head: MaterialContentHead;
};

const SubThumbnails = ({ head }: Props): JSX.Element => (
  <div className={styles.layout}>
    {[head.thumbnails[1], head.thumbnails[2], head.thumbnails[3]].map((thumbnail, index) => (
      <StaticImage
        src={thumbnail ?? defaultThumbnail}
        alt={head.title}
        className={styles.item}
        key={`thumbnailPath-${index}`}
        layout="responsive"
      />
    ))}
  </div>
);

export default SubThumbnails;

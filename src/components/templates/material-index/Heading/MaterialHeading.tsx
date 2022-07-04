import styles from "./MaterialHeading.module.scss";
import Title from "./Title";
import SubThumbnails from "./SubThumbnails";
import { MaterialContentHead } from "lib/contents";
import StaticImage from "components/functions/StaticImage";
import defaultThumbnail from "public/general/thumbnail-default.webp";

type Props = {
  head: MaterialContentHead;
};

const MaterialHeading = ({ head }: Props): JSX.Element => (
  <article className={styles.container}>
    <StaticImage
      src={head.thumbnails[0] ?? defaultThumbnail}
      alt={head.title}
      className={styles.mainThumbnail}
      layout="responsive"
    />
    <div className={styles.subThumbnails}>
      <SubThumbnails head={head} />
    </div>
    <div className={styles.title}>
      <Title head={head} />
    </div>
  </article>
);

export default MaterialHeading;

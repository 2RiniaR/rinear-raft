import styles from "./SubThumbnails.module.scss";
import { ProjectContentHead } from "lib/contents";
import StaticImage from "components/functions/image/StaticImage";

type Props = {
  head: ProjectContentHead;
};

const SubThumbnails = ({ head }: Props): JSX.Element => (
  <div className={styles.layout}>
    {head.thumbnails.slice(1).map((thumbnailPath, index) => (
      <StaticImage src={thumbnailPath} alt={head.title} className={styles.item} key={`thumbnailPath-${index}`} />
    ))}
  </div>
);

export default SubThumbnails;

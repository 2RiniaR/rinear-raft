import styles from "./SubThumbnails.module.scss";
import { ProjectContentHead } from "lib/contents";
import FixedImage from "components/functions/image/FixedImage";

type Props = {
  head: ProjectContentHead;
};

const SubThumbnails = ({ head }: Props): JSX.Element => (
  <div className={styles.layout}>
    {head.thumbnails.slice(1).map((thumbnailPath, index) => (
      <FixedImage src={thumbnailPath} alt={head.title} className={styles.item} key={`thumbnailPath-${index}`} />
    ))}
  </div>
);

export default SubThumbnails;

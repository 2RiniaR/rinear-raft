import styles from "./ScrollIndicator.module.scss";
import { assignClasses } from "lib/helper";
import LazyStaticImage from "components/functions/lazy/LazyStaticImage";
import image from "public/img/DownArrow.png";

type Props = {
  enabled: boolean;
};

export const ScrollIndicator = ({ enabled }: Props): JSX.Element => (
  <div className={styles.container}>
    <LazyStaticImage
      src={image}
      className={assignClasses(styles.image, !enabled ? styles.hidden : "")}
      layout="responsive"
    />
  </div>
);

export default ScrollIndicator;

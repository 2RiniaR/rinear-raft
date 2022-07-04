import styles from "./ScrollIndicator.module.scss";
import { assignClasses } from "lib/helper";
import { PreloadStaticImage } from "components/functions/loading";
import image from "public/home/scroll-indicator.png";

type Props = {
  enabled: boolean;
};

export const ScrollIndicator = ({ enabled }: Props): JSX.Element => (
  <div className={styles.container}>
    <PreloadStaticImage
      src={image}
      className={assignClasses(styles.image, !enabled ? styles.hidden : "")}
      layout="responsive"
      alt="下へ"
    />
  </div>
);

export default ScrollIndicator;

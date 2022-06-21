import { assignClasses } from "../../../lib/helper";
import styles from "./ScrollIndicator.module.scss";
import LazyStaticImage from "components/functions/lazy/LazyStaticImage";
import image from "public/img/scrollIndicator.webp";

type Props = {
  enabled: boolean;
};

export const ScrollIndicator = ({ enabled }: Props): JSX.Element => (
  <div className={styles.container}>
    <LazyStaticImage src={image} className={assignClasses(styles.image, !enabled ? styles.hidden : "")} />
  </div>
);

export default ScrollIndicator;

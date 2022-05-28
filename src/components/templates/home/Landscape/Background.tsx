import styles from "./Background.module.scss";
import { assignClasses } from "lib/helper";
import landscapePic from "public/img/background.webp";
import LazyStaticImage from "components/functions/lazy/LazyStaticImage";

const Background = (): JSX.Element => (
  <LazyStaticImage
    className={assignClasses(styles.image)}
    src={landscapePic}
    alt="背景"
    layout="responsive"
    quality={100}
  />
);

export default Background;

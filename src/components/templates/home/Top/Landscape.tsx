import styles from "./Landscape.module.scss";
import { assignClasses } from "lib/helper";
import landscapePic from "public/img/background.png";
import LazyStaticImage from "components/functions/lazy/LazyStaticImage";

const Landscape = (): JSX.Element => (
  <LazyStaticImage className={assignClasses(styles.image)} src={landscapePic} alt="背景" layout="responsive" />
);

export default Landscape;

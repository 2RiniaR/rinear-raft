import styles from "./Landscape.module.scss";
import { assignClasses } from "lib/helper";
import landscapePic from "public/img/background.png";
import StaticImage from "components/functions/image/StaticImage";

const Landscape = (): JSX.Element => (
  <StaticImage className={assignClasses(styles.image)} src={landscapePic} alt="背景" />
);

export default Landscape;

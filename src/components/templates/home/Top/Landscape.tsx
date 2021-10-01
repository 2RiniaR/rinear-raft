import styles from "./Landscape.module.scss";
import { assignClasses } from "lib/helper";
import landscapePic from "public/img/background.png";
import FullImage from "components/functions/image/FullImage";

const Landscape = (): JSX.Element => (
  <FullImage className={assignClasses(styles.image)} src={landscapePic} alt="背景" />
);

export default Landscape;

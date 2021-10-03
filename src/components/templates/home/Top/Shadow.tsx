import styles from "./Shadow.module.scss";
import StaticImage from "components/functions/image/StaticImage";
import shadowPic from "public/img/shadow.png";

const Shadow = (): JSX.Element => (
  <div className={styles.image}>
    <StaticImage src={shadowPic} alt="トップ画像1" />
  </div>
);

export default Shadow;

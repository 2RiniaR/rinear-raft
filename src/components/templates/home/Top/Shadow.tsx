import styles from "./Shadow.module.scss";
import LazyStaticImage from "components/functions/lazy/LazyStaticImage";
import shadowPic from "public/img/shadow.png";

const Shadow = (): JSX.Element => (
  <LazyStaticImage className={styles.image} src={shadowPic} alt="トップ画像1" layout="responsive" />
);

export default Shadow;

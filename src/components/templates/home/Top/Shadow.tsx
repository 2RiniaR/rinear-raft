import styles from "./Shadow.module.scss";
import StaticImage from "components/functions/image/StaticImage";
import shadowPic from "public/img/shadow.png";

const Shadow = (): JSX.Element => <StaticImage className={styles.image} src={shadowPic} alt="トップ画像1" />;

export default Shadow;

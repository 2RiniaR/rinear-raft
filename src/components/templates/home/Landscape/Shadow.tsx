import styles from "./Shadow.module.scss";
import LazyStaticImage from "components/functions/lazy/LazyStaticImage";
import shadowPic from "public/img/shadow.webp";
import shadow2Pic from "public/img/shadow2.webp";
import shadow3Pic from "public/img/shadow3.webp";
import shadow4Pic from "public/img/shadow4.webp";
import { assignClasses } from "lib/helper";

const Shadow = (): JSX.Element => (
  <>
    <LazyStaticImage
      className={assignClasses(styles.image, styles.frame1)}
      src={shadowPic}
      alt=""
      layout="responsive"
    />
    <LazyStaticImage
      className={assignClasses(styles.image, styles.frame2)}
      src={shadow2Pic}
      alt=""
      layout="responsive"
    />
    <LazyStaticImage
      className={assignClasses(styles.image, styles.frame3)}
      src={shadow3Pic}
      alt=""
      layout="responsive"
    />
    <LazyStaticImage
      className={assignClasses(styles.image, styles.frame4)}
      src={shadow4Pic}
      alt=""
      layout="responsive"
    />
  </>
);

export default Shadow;

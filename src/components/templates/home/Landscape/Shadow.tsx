import styles from "./Shadow.module.scss";
import { assignClasses } from "utils/dom";
import { PreloadStaticImage } from "components/functions/loading";
import shadow1Pic from "public/home/shadow1.webp";
import shadow2Pic from "public/home/shadow2.webp";
import shadow3Pic from "public/home/shadow3.webp";
import shadow4Pic from "public/home/shadow4.webp";

export const Shadow = (): JSX.Element => (
  <>
    <PreloadStaticImage
      className={assignClasses(styles.image, styles.frame1)}
      src={shadow1Pic}
      alt=""
      layout="responsive"
    />
    <PreloadStaticImage
      className={assignClasses(styles.image, styles.frame2)}
      src={shadow2Pic}
      alt=""
      layout="responsive"
    />
    <PreloadStaticImage
      className={assignClasses(styles.image, styles.frame3)}
      src={shadow3Pic}
      alt=""
      layout="responsive"
    />
    <PreloadStaticImage
      className={assignClasses(styles.image, styles.frame4)}
      src={shadow4Pic}
      alt=""
      layout="responsive"
    />
  </>
);

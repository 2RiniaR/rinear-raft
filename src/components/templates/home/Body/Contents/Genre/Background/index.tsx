import Image from "next/image";
import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

export type BackgroundParams = {
  src: string;
  maskColor: string;
  maskOpacity: number;
};

const Background = getComponentTemplate(({ src, maskColor, maskOpacity }: BackgroundParams) => (
  <>
    <div className={styles.image}>
      <img src={src} alt="" />
    </div>
    <div className={styles.mask} style={{ backgroundColor: maskColor, opacity: maskOpacity }} />
  </>
));

export default Background;

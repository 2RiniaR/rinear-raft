import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

export type NormalizedImageParams = {
  src: string;
  alt: string;
};

const NormalizedImage = getComponentTemplate(({ src, alt }: NormalizedImageParams) => (
  <div className={styles.aspectKeeper}>
    <img className={styles.image} src={src} alt={alt} />
  </div>
));

export default NormalizedImage;

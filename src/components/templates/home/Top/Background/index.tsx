import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";
import FixedParallax from "src/components/accessories/FixedParallax";

const Background = getComponentTemplate(() => (
  <FixedParallax className={styles.parallax} startInnerOrigin={0} endInnerOrigin={-0.5}>
    <img className={styles.image} src="/top.jpg" alt="トップ画像" />
  </FixedParallax>
));

export default Background;

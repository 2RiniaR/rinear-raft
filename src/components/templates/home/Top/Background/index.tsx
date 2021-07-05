import { getComponentTemplate } from "src/lib/component";
import styles from "src/components/templates/home/Top/index.module.scss";
import FixedParallax from "src/components/accessories/FixedParallax";

const Background = getComponentTemplate(() => (
  <FixedParallax
    className={styles.container}
    startScrollPos={0}
    endScrollPos={750}
    startWindowPos={0}
    endWindowPos={-400}
  >
    <div className={styles.imageWrapper}>
      <img src="/top.jpg" alt="トップ画像" />
    </div>
  </FixedParallax>
));

export default Background;

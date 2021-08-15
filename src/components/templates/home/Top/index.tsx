import styles from "./index.module.scss";
import Background from "./Background";
import HoleEffect from "./HoleEffect";
import Shadow from "./Shadow";
import WindEffect from "./WindEffect";
import Logo from "./Logo";
import { assignClasses, getComponentTemplate } from "src/lib/component";
import FixedParallax from "src/components/accessories/FixedParallax";

const Top = getComponentTemplate(() => (
  <div className={styles.container}>
    <FixedParallax className={styles.parallax} startInnerOrigin={0} endInnerOrigin={-0.8}>
      <div className={styles.inner}>
        <Background className={styles.background} />
        <HoleEffect className={styles.holeEffect} />
      </div>
    </FixedParallax>
    <WindEffect className={assignClasses(styles.windEffect, styles.element)} />
    <Shadow className={assignClasses(styles.shadow, styles.element)} />
    <Logo className={assignClasses(styles.logo, styles.element)} />
  </div>
));

export default Top;

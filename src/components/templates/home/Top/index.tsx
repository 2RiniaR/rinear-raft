import styles from "./index.module.scss";
import Background from "./Background";
import HoleEffect from "./HoleEffect";
import Shadow from "./Shadow";
import WindEffect from "./WindEffect";
import Logo from "./Logo";
import { assignClasses } from "src/lib/helper";
import FixedParallax from "src/components/functions/Parallax";

const Top = (): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.parallax1}>
      <FixedParallax startInnerOrigin={0} endInnerOrigin={-0.7}>
        <div className={styles.inner}>
          <div className={styles.background}>
            <Background />
          </div>
          <div className={styles.holeEffect}>
            <HoleEffect />
          </div>
        </div>
      </FixedParallax>
    </div>

    <div className={assignClasses(styles.windEffect, styles.element)}>
      <WindEffect />
    </div>

    <div className={styles.parallax2}>
      <FixedParallax startInnerOrigin={0} endInnerOrigin={-0.9}>
        <div className={assignClasses(styles.shadow, styles.element)}>
          <Shadow />
        </div>
      </FixedParallax>
    </div>

    <div className={assignClasses(styles.logo, styles.element)}>
      <Logo />
    </div>
  </div>
);

export default Top;

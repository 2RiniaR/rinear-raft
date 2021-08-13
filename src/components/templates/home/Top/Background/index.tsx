import { useState } from "react";
import styles from "./index.module.scss";
import { assignClasses, getComponentTemplate } from "src/lib/component";
import FixedParallax from "src/components/accessories/FixedParallax";

const Background = getComponentTemplate(() => {
  const [display, setDisplay] = useState<boolean>(false);
  const onDisplay = () => setDisplay(true);

  return (
    <FixedParallax className={styles.parallax} startInnerOrigin={0} endInnerOrigin={-0.5}>
      <div className={styles.inner} ref={onDisplay}>
        <img
          className={assignClasses(styles.image, display ? styles.active : styles.inactive)}
          src="/img/top.jpg"
          alt="トップ画像"
        />
        <div className={assignClasses(styles.effect, display ? styles.active : styles.inactive)} />
      </div>
    </FixedParallax>
  );
});

export default Background;

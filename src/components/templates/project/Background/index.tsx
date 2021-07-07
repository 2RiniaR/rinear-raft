import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";
import AbsoluteParallax from "src/components/accessories/AbsoluteParallax";
import { useEffect, useState } from "react";

const Background = getComponentTemplate(() => {
  const [viewHeight, setViewHeight] = useState(0);

  useEffect(() => {
    setViewHeight(window.innerHeight);
  }, []);

  return (
    <AbsoluteParallax
      className={styles.parallax}
      topWindowMargin={false}
      bottomWindowMargin={false}
      displayHeight={viewHeight}
    >
      <div className={styles.image}>
        <img src="/top.jpg" alt="Background" />
      </div>
      <div className={styles.effect} />
    </AbsoluteParallax>
  );
});

export default Background;

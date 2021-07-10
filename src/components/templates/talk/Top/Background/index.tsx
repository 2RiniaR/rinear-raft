import { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";
import FixedParallax from "src/components/accessories/FixedParallax";

const Background = getComponentTemplate(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [startScroll, setStartScroll] = useState(0);
  const [endScroll, setEndScroll] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    setStartScroll(containerRef.current.scrollTop);
    setEndScroll(containerRef.current.scrollTop + containerRef.current.scrollHeight);
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <FixedParallax
        className={styles.parallax}
        startScrollPos={startScroll}
        endScrollPos={endScroll}
        startInnerOrigin={0}
        endInnerOrigin={-endScroll / 2}
      >
        <div className={styles.imageWrapper}>
          <img src="/top.jpg" alt="トップ画像" />
        </div>
      </FixedParallax>
    </div>
  );
});

export default Background;

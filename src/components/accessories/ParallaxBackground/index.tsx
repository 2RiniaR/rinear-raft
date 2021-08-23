import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";
import FixedParallax from "src/components/accessories/FixedParallax";

type ParallaxBackgroundParams = {
  maxSpeed?: number | undefined;
};

const ParallaxBackground = getComponentTemplate<ParallaxBackgroundParams>(
  ({ children, maxSpeed = undefined }): JSX.Element => {
    const [containerHeight, setContainerHeight] = useState(0);
    const [innerHeight, setInnerHeight] = useState(0);
    const [viewHeight, setViewHeight] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      setViewHeight(window.innerHeight);
    }, []);

    useEffect(() => {
      const onContainerResized = new ResizeObserver((entries) => {
        setContainerHeight(entries[0].contentRect.height);
      });
      containerRef.current && onContainerResized.observe(containerRef.current);
      return () => onContainerResized.disconnect();
    }, []);

    useEffect(() => {
      const onInnerResized = new ResizeObserver((entries) => {
        setInnerHeight(entries[0].contentRect.height);
      });
      innerRef.current && onInnerResized.observe(innerRef.current);
      return () => onInnerResized.disconnect();
    }, []);

    const getEndInnerOrigin = useCallback(() => {
      return Math.max(-(innerHeight - viewHeight) / (containerHeight - viewHeight), maxSpeed ? -maxSpeed : -Infinity);
    }, [containerHeight, innerHeight]);

    return (
      <div className={styles.container} ref={containerRef}>
        <FixedParallax className={styles.parallax} startInnerOrigin={0} endInnerOrigin={getEndInnerOrigin()}>
          <div className={styles.inner} ref={innerRef}>
            {children}
          </div>
        </FixedParallax>
      </div>
    );
  }
);

export default ParallaxBackground;

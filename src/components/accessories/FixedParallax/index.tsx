import React, { useCallback, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { getScrollPosition } from "src/lib/helper";
import { getComponentTemplate } from "src/lib/component";

export type FixedParallaxParams = {
  startInnerOrigin: number;
  endInnerOrigin: number;
};

const FixedParallax = getComponentTemplate<FixedParallaxParams>(
  ({ startInnerOrigin, endInnerOrigin, children }): JSX.Element => {
    const [scroll, setScroll] = useState(0);
    const [innerPosition, setInnerPosition] = useState(0);
    const [top, setTop] = useState(0);
    const [height, setHeight] = useState(1);

    const getInnerPosition = useCallback(() => {
      const scrollPercent = (scroll - top) / height;
      return ((endInnerOrigin - startInnerOrigin) * scrollPercent + startInnerOrigin) * height;
    }, [scroll, top, height]);

    const onScroll = () => setScroll(getScrollPosition());

    useEffect(() => {
      document.addEventListener("scroll", onScroll);
      return (): void => document.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
      setInnerPosition(getInnerPosition());
    }, [scroll]);

    const setContainerSize = (container: HTMLDivElement) => {
      if (!container) return;
      setTop(container.scrollTop);
      setHeight(container.scrollHeight);
    };

    return (
      <div className={styles.container} ref={setContainerSize}>
        <div className={styles.view} style={{ transform: `translate(0, ${innerPosition}px)`, height: height }}>
          {children}
        </div>
      </div>
    );
  }
);

export default FixedParallax;

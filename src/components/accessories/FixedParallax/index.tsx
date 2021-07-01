import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import { getScrollPosition } from "src/lib/helper";
import { getComponentTemplate } from "src/lib/component";

export type FixedParallaxParams = {
  startScrollPos: number;
  endScrollPos: number;
  startWindowPos: number;
  endWindowPos: number;
};

const FixedParallax = getComponentTemplate<FixedParallaxParams>(
  ({ startScrollPos, endScrollPos, startWindowPos, endWindowPos, children }): JSX.Element => {
    const [scroll, setScroll] = useState(0);
    const [imageScroll, setImageScroll] = useState(0);

    const getImageTop = useCallback(() => {
      const scrollPercent = (scroll - startScrollPos) / (endScrollPos - startScrollPos);
      return (endWindowPos - startWindowPos) * scrollPercent + startWindowPos;
    }, [scroll]);

    const onScroll = () => setScroll(getScrollPosition());

    useEffect(() => {
      document.addEventListener("scroll", onScroll);
      return (): void => document.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
      setImageScroll(getImageTop());
    }, [scroll]);

    return (
      <div className={styles.view} style={{ transform: `translate(0, ${imageScroll}px)` }}>
        {children}
      </div>
    );
  }
);

export default FixedParallax;

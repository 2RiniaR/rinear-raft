import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { getScrollPosition } from "src/lib/helper";
import { getComponentTemplate } from "src/lib/component";

export type AbsoluteParallaxParams = {
  topWindowMargin: boolean;
  bottomWindowMargin: boolean;
  displayHeight: number;
};

const AbsoluteParallax = getComponentTemplate<AbsoluteParallaxParams>(
  ({ topWindowMargin, bottomWindowMargin, displayHeight, children }): JSX.Element => {
    const [scroll, setScroll] = useState(0);
    const [innerPosition, setInnerPosition] = useState(0);
    const [innerHeight, setInnerHeight] = useState(0);
    const [containerTop, setContainerTop] = useState(0);
    const [containerHeight, setContainerHeight] = useState(1);
    const [viewHeight, setViewHeight] = useState(0);

    const getInnerTop = () => {
      const scrollStart = containerTop - (topWindowMargin ? viewHeight : 0);
      const scrollEnd = containerTop + containerHeight - (bottomWindowMargin ? 0 : viewHeight);
      const scrollPercent = (scroll - scrollStart) / (scrollEnd - scrollStart);
      return -scrollPercent * (innerHeight - displayHeight);
    };

    const onScroll = () => setScroll(getScrollPosition());

    useEffect(() => {
      document.addEventListener("scroll", onScroll);
      return (): void => document.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
      setViewHeight(window.innerHeight);
    }, []);

    useEffect(() => {
      setInnerPosition(getInnerTop());
    }, [scroll]);

    const setContainerSize = (container: HTMLDivElement) => {
      if (!container) return;
      setContainerTop(container.scrollTop);
      setContainerHeight(container.scrollHeight);
    };

    const setInnerSize = (inner: HTMLDivElement) => {
      if (!inner) return;
      setInnerHeight(inner.scrollHeight);
    };

    return (
      <div className={styles.container} ref={setContainerSize}>
        <div className={styles.view} style={{ transform: `translate(0, ${innerPosition}px)` }} ref={setInnerSize}>
          {children}
        </div>
      </div>
    );
  }
);

export default AbsoluteParallax;

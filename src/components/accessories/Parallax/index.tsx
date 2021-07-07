import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import { getScrollPosition } from "src/lib/helper";
import { getComponentTemplate } from "src/lib/component";

export type ParallaxParams = {
  startOrigin?: number;
  endOrigin?: number;
  speed: number;
};

const Parallax = getComponentTemplate<ParallaxParams>(
  ({ startOrigin = 1, endOrigin = 1, speed = 0, children }): JSX.Element => {
    const [scroll, setScroll] = useState(0);
    const [imageScroll, setImageScroll] = useState(0);
    const [viewHeight, setViewHeight] = useState(5);
    const viewRef = useRef<HTMLDivElement>(null);

    const getImageTop = useCallback(() => {
      if (!viewRef.current) return 0;
      const scrollStartPos = viewRef.current.scrollTop - window.innerHeight * startOrigin;
      const scrollEndPos = viewRef.current.scrollTop + viewHeight * endOrigin;
      const scrollPercent = (scroll - scrollStartPos) / (scrollEndPos - scrollStartPos);

      const imageTopPos = 0;
      const imageBottomPos = viewHeight * Math.abs(speed) * (startOrigin + endOrigin);
      const imageStartPos = speed < 0 ? -imageBottomPos : imageTopPos;
      const imageEndPos = speed < 0 ? imageTopPos : -imageBottomPos;
      const imageCurrentPos = -(imageEndPos - imageStartPos) * (1 - scrollPercent);
      // console.log(
      //   [
      //     `viewHeight: ${viewHeight}`,
      //     `scrollStartPos: ${scrollStartPos}`,
      //     `scrollEndPos: ${scrollEndPos}`,
      //     `scrollPercent: ${scrollPercent}`,
      //     `imageTopPos: ${imageTopPos}`,
      //     `imageBottomPos: ${imageBottomPos}`,
      //     `imageStartPos: ${imageStartPos}`,
      //     `imageEndPos: ${imageEndPos}`,
      //     `imageCurrentPos: ${imageCurrentPos}`
      //   ].join("\n")
      // );
      return imageCurrentPos;
    }, [viewHeight, scroll]);

    const onScroll = () => setScroll(getScrollPosition());

    useEffect(() => {
      document.addEventListener("scroll", onScroll);
      return (): void => document.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
      const onViewResized = new ResizeObserver((entries) => {
        setViewHeight(entries[0].contentRect.height);
      });
      viewRef.current && onViewResized.observe(viewRef.current);
      return () => onViewResized.disconnect();
    }, []);

    useEffect(() => {
      setImageScroll(getImageTop());
    }, [viewHeight, scroll]);

    return (
      <div ref={viewRef} className={styles.view}>
        <div className={styles.image} style={{ height: `${100 * (Math.abs(speed) + 1)}%`, top: `${imageScroll}px` }}>
          {children}
        </div>
      </div>
    );
  }
);

export default Parallax;

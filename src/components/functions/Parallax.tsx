import React, { ReactNode, useCallback, useRef } from "react";
import styles from "./Parallax.module.scss";
import { useElementPosition, useElementSize, useScrollValue } from "hooks";

type Props = {
  children: ReactNode;
  startInnerOrigin: number;
  endInnerOrigin: number;
};

export const Parallax = ({ startInnerOrigin, endInnerOrigin, children }: Props): JSX.Element => {
  const scroll = useScrollValue();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, containerHeight] = useElementSize(containerRef, 1, 1);
  const [, top] = useElementPosition(containerRef);

  const getInnerPosition = useCallback(() => {
    const scrollPercent = (scroll - top) / containerHeight;
    return ((endInnerOrigin - startInnerOrigin) * scrollPercent + startInnerOrigin) * containerHeight;
  }, [scroll, top, containerHeight, startInnerOrigin, endInnerOrigin]);

  return (
    <div className={styles.container} ref={containerRef}>
      <div
        className={styles.view}
        style={{ transform: `translate(0, ${getInnerPosition()}px)`, height: containerHeight, width: containerWidth }}
      >
        {children}
      </div>
    </div>
  );
};

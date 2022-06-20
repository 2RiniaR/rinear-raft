/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { ReactNode, useCallback, useRef } from "react";
import styles from "./Parallax.module.scss";
import useScrollValue from "lib/fooks/scroll-value";
import useElementSize from "lib/fooks/element-size";
import useElementPosition from "lib/fooks/element-position";

type Props = {
  children: ReactNode;
  startInnerOrigin: number;
  endInnerOrigin: number;
};

const Parallax = ({ startInnerOrigin, endInnerOrigin, children }: Props): JSX.Element => {
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

export default Parallax;

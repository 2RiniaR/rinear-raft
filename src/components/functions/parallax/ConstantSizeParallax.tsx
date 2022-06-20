/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { ReactNode, useCallback, useRef } from "react";
import styles from "./ConstantSizeParallax.module.scss";
import Parallax from "components/functions/parallax/Parallax";
import useElementSize from "lib/fooks/element-size";
import useViewSize from "lib/fooks/view-size";

type Props = {
  children: ReactNode;
  maxSpeed?: number | undefined;
};

const ConstantSizeParallax = ({ children, maxSpeed = undefined }: Props): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [, containerHeight] = useElementSize(containerRef);
  const [, innerHeight] = useElementSize(innerRef);
  const [, viewHeight] = useViewSize();

  const getEndInnerOrigin = useCallback(() => {
    return Math.max(-(innerHeight - viewHeight) / (containerHeight - viewHeight), maxSpeed ? -maxSpeed : -Infinity);
  }, [containerHeight, innerHeight, viewHeight]);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.parallax}>
        <Parallax startInnerOrigin={0} endInnerOrigin={getEndInnerOrigin()}>
          <div className={styles.inner} ref={innerRef}>
            {children}
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default ConstantSizeParallax;

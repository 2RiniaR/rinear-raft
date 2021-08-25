import React, { ReactNode, useCallback, useEffect, useState } from "react";
import styles from "./Parallax.module.scss";
import { getScrollPosition } from "src/lib/helper";

type Props = {
  children: ReactNode;
  startInnerOrigin: number;
  endInnerOrigin: number;
};

const Parallax = ({ startInnerOrigin, endInnerOrigin, children }: Props): JSX.Element => {
  const [scroll, setScroll] = useState(0);
  const [innerPosition, setInnerPosition] = useState(0);
  const [top, setTop] = useState(0);
  const [height, setHeight] = useState(1);

  const getInnerPosition = useCallback(() => {
    const scrollPercent = (scroll - top) / height;
    return ((endInnerOrigin - startInnerOrigin) * scrollPercent + startInnerOrigin) * height;
  }, [scroll, top, height, startInnerOrigin, endInnerOrigin]);

  const onScroll = () => setScroll(getScrollPosition());

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return (): void => document.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setInnerPosition(getInnerPosition());
  }, [scroll, top, height, startInnerOrigin, endInnerOrigin]);

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
};

export default Parallax;

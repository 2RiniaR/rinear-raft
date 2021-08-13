import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";
import { getDistance } from "src/lib/helper";

export type PhantomNodeParams = {
  active: boolean;
  layout: "fill" | "inner";
};

const roundMargin = 0.8;

const PhantomNode = getComponentTemplate<PhantomNodeParams>(({ children, active, layout = "inner" }) => {
  const [displayWidth, setDisplayWidth] = useState(0);
  const [displayHeight, setDisplayHeight] = useState(0);
  const displayRef = useRef<HTMLDivElement>(null);

  const getContainerLength = useCallback(() => {
    return getDistance(displayWidth / 2, displayHeight / 2) * (1 / roundMargin) * 2;
  }, [displayWidth, displayHeight]);

  useEffect(() => {
    const onContainerResized = new ResizeObserver((entries) => {
      setDisplayWidth(entries[0].contentRect.width);
      setDisplayHeight(entries[0].contentRect.height);
    });
    displayRef.current && onContainerResized.observe(displayRef.current);
    return () => onContainerResized.disconnect();
  }, []);

  return (
    <div
      className={styles.container}
      style={
        layout === "inner"
          ? { width: getContainerLength(), height: getContainerLength() }
          : { width: "100%", height: "100%" }
      }
    >
      <div className={styles.display} ref={displayRef}>
        {children}
      </div>
    </div>
  );
});

export default PhantomNode;

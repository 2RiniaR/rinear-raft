import React, { useRef } from "react";
import styles from "./CompositeText.module.scss";
import useElementSize from "lib/fooks/element-size";

type Props = {
  children: React.ReactNode;
};

const CompositeText = ({ children }: Props): JSX.Element => {
  const containerRef = useRef(null);
  const [, containerHeight] = useElementSize(containerRef);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.text} style={{ fontSize: containerHeight }}>
        {children}
      </div>
    </div>
  );
};

export default CompositeText;

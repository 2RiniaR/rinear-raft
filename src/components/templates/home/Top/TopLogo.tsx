import React, { useCallback, useRef } from "react";
import styles from "./TopLogo.module.scss";
import useElementSize from "lib/fooks/element-size";

const TopLogo = (): JSX.Element => {
  const frontRef = useRef<HTMLDivElement>(null);
  const [frontWidth] = useElementSize(frontRef);
  const getFontSize = useCallback(() => frontWidth / 4, [frontWidth]);
  const getLetterSpacing = useCallback(() => getFontSize() / 3, [getFontSize()]);

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img className={styles.image} src="/img/logo_back.svg" alt="" />
      </div>
      <div className={styles.front} ref={frontRef}>
        <img className={styles.logo} src="/img/logo.png" alt="" />
        <h1 className={styles.name} style={{ fontSize: getFontSize(), letterSpacing: getLetterSpacing() }}>
          RineaR
          <span style={{ marginRight: -getLetterSpacing() }} />
        </h1>
      </div>
    </div>
  );
};

export default TopLogo;

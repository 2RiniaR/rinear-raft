import React, { useCallback, useRef } from "react";
import styles from "./TopLogo.module.scss";
import StaticImage from "components/functions/image/StaticImage";
import logoBackPic from "public/img/logo_back.svg";
import logoPic from "public/img/logo.png";
import useElementSize from "lib/fooks/element-size";

const TopLogo = (): JSX.Element => {
  const frontRef = useRef<HTMLDivElement>(null);
  const [frontWidth] = useElementSize(frontRef);
  const getFontSize = useCallback(() => frontWidth / 4, [frontWidth]);
  const getLetterSpacing = useCallback(() => getFontSize() / 3, [getFontSize()]);

  return (
    <div className={styles.container}>
      <StaticImage className={styles.image} src={logoBackPic} alt="背景画像" />
      <div className={styles.front} ref={frontRef}>
        <StaticImage className={styles.logo} src={logoPic} alt="ロゴ" />
        <h1 className={styles.name} style={{ fontSize: getFontSize(), letterSpacing: getLetterSpacing() }}>
          RineaR
          <span style={{ marginRight: -getLetterSpacing() }} />
        </h1>
      </div>
    </div>
  );
};

export default TopLogo;

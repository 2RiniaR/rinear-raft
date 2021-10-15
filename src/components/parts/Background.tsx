import React, { ReactNode, useCallback } from "react";
import styles from "./Background.module.scss";
import useViewSize from "lib/fooks/view-size";
import ConstantSizeParallax from "components/functions/parallax/ConstantSizeParallax";
import backgroundPic from "public/img/RineaR-back.webp";
import StaticImage from "components/functions/image/StaticImage";

type Props = {
  children?: ReactNode;
};

const Background = ({ children }: Props): JSX.Element => {
  const [viewWidth, viewHeight] = useViewSize();
  const getSize = useCallback(() => Math.max(viewWidth, viewHeight * 1.5), [viewWidth, viewHeight]);
  const getLeft = useCallback(() => -(getSize() - viewWidth) / 2, [viewWidth, getSize()]);

  return (
    <div className={styles.container}>
      <div className={styles.slideArea}>
        <ConstantSizeParallax maxSpeed={0.8}>
          <div className={styles.inner} style={{ width: getSize(), height: getSize(), left: getLeft() }}>
            <StaticImage className={styles.background} src={backgroundPic} alt="背景" layout="responsive" />
            <div className={styles.colorMask} />
          </div>
        </ConstantSizeParallax>
      </div>
      <div className={styles.front}>{children}</div>
    </div>
  );
};

export default Background;

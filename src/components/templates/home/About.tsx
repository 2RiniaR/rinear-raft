import React, { useCallback, useRef, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import styles from "./About.module.scss";
import { assignClasses } from "lib/helper";
import useElementSize from "lib/fooks/element-size";
import FixedImage from "components/functions/image/FixedImage";

const About = (): JSX.Element => {
  const [display, setDisplay] = useState(false);
  const containerRef = useRef(null);
  const [containerWidth, containerHeight] = useElementSize(containerRef);
  const imageAspectRatio = 2104 / 1321;

  const getContainerStyle = useCallback(() => {
    if (containerHeight == 0 || containerHeight >= containerWidth / imageAspectRatio) return {} as React.CSSProperties;
    return {
      height: containerWidth / imageAspectRatio
    } as React.CSSProperties;
  }, [containerWidth, containerHeight]);

  const getBackgroundWidth = useCallback(() => {
    const containerAspectRatio = containerWidth / containerHeight;
    return containerAspectRatio >= imageAspectRatio ? containerWidth : containerHeight * imageAspectRatio;
  }, [containerWidth, containerHeight]);

  return (
    <div className={styles.container} ref={containerRef} style={getContainerStyle()}>
      <div className={styles.background} style={{ width: getBackgroundWidth() }}>
        <FixedImage src="/img/note_clipped.png" alt="背景" widthRate={2104} heightRate={1321} />
      </div>

      <div className={styles.front}>
        <div className={styles.title}>
          <VisibilitySensor onChange={(isVisible) => setDisplay(display || isVisible)}>
            <span className={assignClasses(styles.text, display ? styles.active : styles.inactive)}>
              <span className={styles.first}>
                この<span className={styles.strong}>筏</span>は私を、
              </span>
              <span className={styles.last}>どこへ連れてゆくんだろう。</span>
            </span>
          </VisibilitySensor>
        </div>

        <div className={styles.body}>
          <div className={styles.section}>
            <p>RineaR（りにあー、りにああーる）とは、Riniaによる個人活動・個人制作物の総称。</p>
            <p>明確な目標を持ったプロジェクトや、複数メンバーで活動するサークルではない。</p>
          </div>
          <div className={styles.separator} />
          <div className={styles.section}>
            <p>そのときに、作りたいと思ったものを作って楽しむ。</p>
            <p>現在は主にゲームやサービス等を制作しているが、活動範囲は限定していない。</p>
            <p>制作の途中経過やアイデアなどは当サイトのTALKSへ投稿し、制作物やプロジェクトはPROJECTSへ投稿する。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

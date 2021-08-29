import React, { useCallback, useRef, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import styles from "./About.module.scss";
import { assignClasses } from "src/lib/helper";
import useElementSize from "src/lib/fooks/element-size";

const About = (): JSX.Element => {
  const [display, setDisplay] = useState(false);
  const containerRef = useRef(null);
  const frontRef = useRef(null);
  const [containerWidth] = useElementSize(containerRef);
  const [, frontHeight] = useElementSize(frontRef);
  const imageAspectRatio = 2104 / 1321;

  const getContainerHeight = useCallback(
    () => Math.max(containerWidth / imageAspectRatio, frontHeight),
    [containerWidth, frontHeight]
  );

  const getBackgroundStyle = useCallback((): React.CSSProperties => {
    const containerHeight = getContainerHeight();
    const containerAspectRatio = containerWidth / containerHeight;
    if (containerAspectRatio >= imageAspectRatio) {
      return {
        width: containerWidth,
        height: containerWidth / imageAspectRatio
      };
    } else {
      return {
        width: containerHeight * imageAspectRatio,
        height: containerHeight
      };
    }
  }, [containerWidth, getContainerHeight()]);

  return (
    <div className={styles.container} ref={containerRef} style={{ height: getContainerHeight() }}>
      <div className={styles.background} style={getBackgroundStyle()}>
        <img className={styles.image} src="/img/note_clipped.png" alt="" />
      </div>

      <div className={styles.front} ref={frontRef}>
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

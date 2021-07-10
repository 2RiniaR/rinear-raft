import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
import styles from "./index.module.scss";
import { assignClasses, getComponentTemplate } from "src/lib/component";

const About = getComponentTemplate(() => {
  const [display, setDisplay] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <VisibilitySensor onChange={(isVisible) => setDisplay(display || isVisible)}>
          <span className={assignClasses(styles.text, display ? styles.active : styles.inactive)}>
            この<span className={styles.strong}>筏</span>は私を、どこへ連れてゆくんだろう。
          </span>
        </VisibilitySensor>
      </div>

      <div className={styles.body}>
        <div className={styles.section}>
          <p>RineaR（りにあー、りにああーる）とは、Riniaによる個人活動、及び個人制作物の総称。</p>
          <p>明確な目標を持ったプロジェクトや、複数メンバーで活動するサークルではない。</p>
        </div>
        <div className={styles.separator} />
        <div className={styles.section}>
          <p>そのときに、作りたいと思ったものを作って楽しむ。</p>
          <p>現在は主にゲームやサービス等を制作しているが、活動範囲は限定していない。</p>
          <p>
            制作の途中経過やアイデアなどは当サイトの「TALKS」へ投稿し、制作物やプロジェクトは「PROJECTS」へ投稿する。
          </p>
        </div>
      </div>
    </div>
  );
});

export default About;

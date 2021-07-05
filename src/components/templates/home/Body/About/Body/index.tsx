import styles from "./index.module.scss";
import { assignClasses, getComponentTemplate } from "src/lib/component";

const Abstract = getComponentTemplate(() => (
  <>
    <p>
      RineaR（りにあー、りにああーる）とは、<span className={styles.name}>Rinia</span>
      による個人活動、及び個人制作物の総称。
    </p>
    <p>
      明確な目標を持ったプロジェクトや、複数メンバーで活動するサークルではない。
    </p>
  </>
));

const Activity = getComponentTemplate(() => (
  <>
    <p>
      そのときに、作りたいと思ったものを作って楽しむ。現在は主にゲームやサービス等を制作しているが、活動範囲は限定していない。
    </p>
    <p>制作の途中経過やアイデアなどは当サイトの「TALKS」へ投稿し、制作物やプロジェクトは「PROJECTS」へ投稿する。</p>
  </>
));

const Body = getComponentTemplate(() => (
  <>
    <Abstract className={assignClasses(styles.abstract, styles.section)} />
    <div className={styles.separator} />
    <Activity className={assignClasses(styles.activity, styles.section)} />
  </>
));

export default Body;

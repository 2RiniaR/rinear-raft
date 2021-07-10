import dayjs from "dayjs";
import styles from "./index.module.scss";
import { ProjectContent } from "src/lib/contents";

const page: JSX.Element = (
  <div>
    <h1 className={styles.title}>制限時間以内に脱出せよ！ハラハラ2D脱出ゲーム！</h1>
    <div className={styles.images}>
      <img src="/articles/projects/maze-escape/top1.png" alt="トップ画像1" />
      <img src="/articles/projects/maze-escape/top2.png" alt="トップ画像2" />
      <img src="/articles/projects/maze-escape/top3.png" alt="トップ画像3" />
      <img src="/articles/projects/maze-escape/top4.png" alt="トップ画像4" />
    </div>
    <div className={styles.description}>
      <p>詳細</p>
    </div>
    <div className={styles.links}>
      <div className={styles.link}>
        <a href="">
          <h2>ダウンロード</h2>
        </a>
      </div>
      <div className={styles.link}>
        <a href="">
          <h2>ソースコード</h2>
        </a>
      </div>
    </div>
  </div>
);

const mazeEscape: ProjectContent = {
  genre: "projects",
  id: "maze-escape",
  title: "迷宮脱出",
  thumbnailPath: "/test.png",
  updatedAt: dayjs("2021-05-29"),
  page: page
};

export default mazeEscape;

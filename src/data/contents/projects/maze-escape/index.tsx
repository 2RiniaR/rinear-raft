import dayjs from "dayjs";
import styles from "./index.module.scss";
import { ProjectContent } from "src/lib/contents";

const Page = (): JSX.Element => (
  <div>
    <h1 className={styles.title}>制限時間以内に脱出せよ！ハラハラ2D脱出ゲーム！</h1>
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
  thumbnailsPath: [
    "/contents/projects/maze-escape/stage1.jpg",
    "/contents/projects/maze-escape/title.jpg",
    "/contents/projects/maze-escape/stage2.jpg",
    "/contents/projects/maze-escape/result.jpg"
  ],
  updatedAt: dayjs("2016-10-18"),
  releasedAt: dayjs("2021-04-30"),
  description: "上下左右にプレイヤーを移動し、制限時間以内にゴールを目指す2Dアクション脱出ゲーム。",
  Page
};

export default mazeEscape;

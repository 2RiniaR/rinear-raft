import dayjs from "dayjs";
import styles from "./index.module.scss";
import { ProjectContent } from "src/lib/contents";
import { getComponentTemplate } from "src/lib/component";

const Page = getComponentTemplate(() => (
  <div>
    <h1 className={styles.title}>ここにタイトルを入力</h1>
    <div className={styles.images}>
      <img src="/contents/projects/marvelous/top1.png" alt="トップ画像1" />
      <img src="/contents/projects/marvelous/top2.png" alt="トップ画像2" />
      <img src="/contents/projects/marvelous/top3.png" alt="トップ画像3" />
      <img src="/contents/projects/marvelous/top4.png" alt="トップ画像4" />
    </div>
    <div className={styles.description}>
      <p>詳細</p>
    </div>
    <div className={styles.links}>
      <div className={styles.link}>
        <a href="">
          <h2>ソースコード</h2>
        </a>
      </div>
    </div>
  </div>
));

const marvelous: ProjectContent = {
  genre: "projects",
  id: "marvelous",
  title: "エライさんbot",
  thumbnailPath: "/contents/projects/marvelous/top1.png",
  updatedAt: dayjs("2021-04-30"),
  description: "みんなの「えらい！」をカウントしてくれるDiscord Bot。#限界開発鯖 にて運用中！",
  Page
};

export default marvelous;

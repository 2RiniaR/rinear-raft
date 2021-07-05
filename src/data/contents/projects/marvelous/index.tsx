import dayjs from "dayjs";
import Head from "next/head";
import styles from "./index.module.scss";
import { ProjectContent } from "src/lib/contents";

const page: JSX.Element = (
  <div>
    <Head>
      <title>エライさん - RineaR</title>
    </Head>
    <h1 className={styles.title}>ここにタイトルを入力</h1>
    <div className={styles.images}>
      <img src="/articles/projects/marvelous/top1.png" alt="トップ画像1" />
      <img src="/articles/projects/marvelous/top2.png" alt="トップ画像2" />
      <img src="/articles/projects/marvelous/top3.png" alt="トップ画像3" />
      <img src="/articles/projects/marvelous/top4.png" alt="トップ画像4" />
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
);

const marvelous: ProjectContent = {
  genre: "projects",
  id: "marvelous",
  title: "エライさんbot",
  updatedAt: dayjs("2021-05-29"),
  page: page
};

export default marvelous;

import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import styles from "../projects.module.scss";
import Movie from "./Movie";
import Download from "./Download";
import Rule from "./Rule";
import Strategy from "./Strategy";
import Tools from "./Tools";
import Background from "./Background";
import { Chapter } from "components/parts/contents";
import { ChapterPoint, ContentPageProps, ProjectContent } from "lib/contents";

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {
    movie: { name: "紹介動画", ref: useRef(null) },
    download: { name: "ダウンロード", ref: useRef(null) },
    rule: { name: "ルール", ref: useRef(null) },
    strategy: { name: "攻略データ", ref: useRef(null) },
    tools: { name: "使用ツール", ref: useRef(null) },
    background: { name: "裏話", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <main className={styles.content}>
      <Chapter title={refs.movie.name} jumpRef={refs.movie.ref}>
        <Movie />
      </Chapter>

      <Chapter title={refs.download.name} jumpRef={refs.download.ref}>
        <Download />
      </Chapter>

      <Chapter title={refs.rule.name} jumpRef={refs.rule.ref}>
        <Rule />
      </Chapter>

      <Chapter title={refs.strategy.name} jumpRef={refs.strategy.ref}>
        <Strategy />
      </Chapter>

      <Chapter title={refs.tools.name} jumpRef={refs.tools.ref}>
        <Tools />
      </Chapter>

      <Chapter title={refs.background.name} jumpRef={refs.background.ref}>
        <Background />
      </Chapter>
    </main>
  );
};

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
  updatedAt: dayjs("2021-09-28"),
  releasedAt: dayjs("2016-10-18"),
  description: "上下左右にプレイヤーを移動し、制限時間以内にゴールを目指す2Dアクション脱出ゲーム。",
  Page
};

export default mazeEscape;

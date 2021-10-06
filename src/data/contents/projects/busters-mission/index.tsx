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
import thumbnailPic1 from "public/contents/projects/busters-mission/stage3_2.jpg";
import thumbnailPic2 from "public/contents/projects/busters-mission/title.jpg";
import thumbnailPic3 from "public/contents/projects/busters-mission/stage1.jpg";
import thumbnailPic4 from "public/contents/projects/busters-mission/stage2.jpg";

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

const bustersMission: ProjectContent = {
  genre: "projects",
  id: "busters-mission",
  title: "Busters Mission",
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3, thumbnailPic4],
  updatedAt: dayjs("2021-09-28"),
  releasedAt: dayjs("2018-09-05"),
  description: "敵の攻撃を避けながら、ステージ内にいるすべての敵を倒していく2Dアクションゲーム。",
  Page
};

export default bustersMission;

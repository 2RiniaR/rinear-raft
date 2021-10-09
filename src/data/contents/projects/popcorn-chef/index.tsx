import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import styles from "../../contents.module.scss";
import Movie from "./Movie";
import Download from "./Download";
import Rule from "./Rule";
import Howto from "./Howto";
import Tools from "./Tools";
import Background from "./Background";
import { Chapter } from "content-parts";
import { ChapterPoint, ContentPageProps, ProjectContent } from "lib/contents";
import thumbnailPic1 from "public/contents/projects/popcorn-chef/game1.jpg";
import thumbnailPic2 from "public/contents/projects/popcorn-chef/title.jpg";
import thumbnailPic3 from "public/contents/projects/popcorn-chef/game4.jpg";
import thumbnailPic4 from "public/contents/projects/popcorn-chef/lobby.jpg";

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {
    movie: { name: "プレイ動画", ref: useRef(null) },
    download: { name: "ダウンロード", ref: useRef(null) },
    howto: { name: "遊び方", ref: useRef(null) },
    rule: { name: "ルール", ref: useRef(null) },
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

      <Chapter title={refs.howto.name} jumpRef={refs.howto.ref}>
        <Howto />
      </Chapter>

      <Chapter title={refs.rule.name} jumpRef={refs.rule.ref}>
        <Rule />
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

const popcornChef: ProjectContent = {
  genre: "projects",
  id: "popcorn-chef",
  title: "ポップコーン職人",
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3, thumbnailPic4],
  updatedAt: dayjs("2021-10-01"),
  releasedAt: dayjs("2020-04-05"),
  description:
    "2人のプレイヤーがリアルタイムでポップコーンを調理し、調理したポップコーンを食べた量で競う2人通信対戦のカジュアルゲーム。",
  Page
};

export default popcornChef;

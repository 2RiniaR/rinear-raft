import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import styles from "../projects.module.scss";
import Point from "./Point";
import Praise from "./Praise";
import Howto from "./Howto";
import Bonuses from "./Bonuses";
import Tools from "./Tools";
import Background from "./Background";
import { ChapterPoint, ContentPageProps, ProjectContent } from "lib/contents";
import { Chapter } from "components/parts/contents";
import thumbnailPic1 from "public/contents/projects/marvelous/top1.png";
import thumbnailPic2 from "public/contents/projects/marvelous/top2.png";
import thumbnailPic3 from "public/contents/projects/marvelous/top3.png";
import thumbnailPic4 from "public/contents/projects/marvelous/top4.png";

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {
    howto: { name: "利用方法", ref: useRef(null) },
    point: { name: "えらいポイント", ref: useRef(null) },
    praise: { name: "人を褒める", ref: useRef(null) },
    bonuses: { name: "えらいことを評価する", ref: useRef(null) },
    tools: { name: "使用ツール", ref: useRef(null) },
    background: { name: "裏話", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <main className={styles.content}>
      <Chapter title={refs.howto.name} jumpRef={refs.howto.ref}>
        <Howto />
      </Chapter>

      <Chapter title={refs.point.name} jumpRef={refs.point.ref}>
        <Point />
      </Chapter>

      <Chapter title={refs.praise.name} jumpRef={refs.praise.ref}>
        <Praise />
      </Chapter>

      <Chapter title={refs.bonuses.name} jumpRef={refs.bonuses.ref}>
        <Bonuses />
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

const marvelous: ProjectContent = {
  genre: "projects",
  id: "marvelous",
  title: "エライさんbot",
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3, thumbnailPic4],
  updatedAt: dayjs("2021-09-28"),
  releasedAt: dayjs("2021-04-30"),
  description: "みんなの「えらい！」をカウントしてくれるDiscord Bot。#限界開発鯖 にて運用中！",
  Page
};

export default marvelous;

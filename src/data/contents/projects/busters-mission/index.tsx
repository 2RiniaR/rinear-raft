/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import Movie from "./Movie";
import Download from "./Download";
import Rule from "./Rule";
import Strategy from "./Strategy";
import Tools from "./Tools";
import Background from "./Background";
import { Chapter } from "content-parts";
import { ChapterPoint, ContentPageProps, ProjectContent } from "lib/contents";
import thumbnailPic1 from "public/contents/projects/busters-mission/stage3_2.webp";
import thumbnailPic2 from "public/contents/projects/busters-mission/title.webp";
import thumbnailPic3 from "public/contents/projects/busters-mission/stage1.webp";
import thumbnailPic4 from "public/contents/projects/busters-mission/stage2.webp";

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
    <>
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
    </>
  );
};

const bustersMission: ProjectContent = {
  genre: "projects",
  id: "busters-mission",
  title: "Busters Mission",
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3, thumbnailPic4],
  updatedAt: dayjs("2022-06-20 15:15:41"),
  releasedAt: dayjs("2018-09-05"),
  description: "敵の攻撃を避けながら、ステージ内にいるすべての敵を倒していく2Dアクションゲーム。",
  Page
};

export default bustersMission;

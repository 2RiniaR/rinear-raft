/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import Tools from "./Tools";
import Background from "./Background";
import Story from "./Story";
import Pages from "./Pages";
import { Chapter } from "content-parts";
import { ChapterPoint, ContentPageProps, ScenarioContent } from "lib/contents";
import thumbnailPic1 from "public/contents/scenarios/rinear-official-site/HomePage1.webp";

import thumbnailPic2 from "public/contents/scenarios/rinear-official-site/HomePage2.webp";
import thumbnailPic3 from "public/contents/scenarios/rinear-official-site/HomePage3.webp";
import thumbnailPic4 from "public/contents/scenarios/rinear-official-site/HomePage4.webp";

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {
    story: { name: "制作経緯", ref: useRef(null) },
    pages: { name: "ページ構成", ref: useRef(null) },
    tools: { name: "使用ツール", ref: useRef(null) },
    background: { name: "裏話", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <>
      <Chapter title={refs.story.name} jumpRef={refs.story.ref}>
        <Story />
      </Chapter>

      <Chapter title={refs.pages.name} jumpRef={refs.pages.ref}>
        <Pages />
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

const rinearRaft: ScenarioContent = {
  genre: "scenarios",
  id: "rinear-raft",
  title: "RineaRの筏",
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3, thumbnailPic4],
  updatedAt: dayjs("2021-10-01"),
  releasedAt: dayjs("2022-06-21"),
  description: "『RineaR』のプロジェクトや投稿を公開するホームページ。『Rinia』が活動拠点とする筏。",
  Page
};

export default rinearRaft;

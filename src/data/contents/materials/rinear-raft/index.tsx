/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import Tools from "./Tools";
import Background from "./Background";
import Story from "./Story";
import Pages from "./Pages";
import thumbnailPic4 from "public/contents/materials/rinear-raft/Material.webp";
import thumbnailPic3 from "public/contents/materials/rinear-raft/MaterialIndex.webp";
import { Chapter } from "content-parts";
import { ChapterPoint, ContentPageProps, MaterialContent } from "lib/contents";
import thumbnailPic1 from "public/contents/materials/rinear-raft/Top.webp";
import thumbnailPic2 from "public/contents/materials/rinear-raft/Story.webp";

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

const rinearRaft: MaterialContent = {
  genre: "materials",
  id: "rinear-raft",
  title: "RineaRの筏",
  thumbnail: thumbnailPic1,
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3, thumbnailPic4],
  updatedAt: dayjs("2022-07-03 21:00:00"),
  releasedAt: dayjs("2022-07-03"),
  description: "『RineaR』のプロジェクトや投稿を公開するホームページ。『Rinia』が活動拠点とする筏。",
  Page
};

export default rinearRaft;

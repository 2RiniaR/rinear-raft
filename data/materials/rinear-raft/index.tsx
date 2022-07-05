import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import { Tools } from "./Tools";
import { Story } from "./Story";
import { Pages } from "./Pages";
import { MaterialSettings } from "repositories";
import { Chapter, ContentPage } from "models/content";
import { ChapterPoint } from "writers";
import thumbnailPic4 from "public/contents/materials/rinear-raft/material.webp";
import thumbnailPic3 from "public/contents/materials/rinear-raft/material-index.webp";
import thumbnailPic1 from "public/contents/materials/rinear-raft/top.webp";
import thumbnailPic2 from "public/contents/materials/rinear-raft/story.webp";

const Page: ContentPage = ({ setChapters }) => {
  const refs: { [name: string]: Chapter } = {
    story: { name: "制作経緯", ref: useRef(null) },
    pages: { name: "ページ構成", ref: useRef(null) },
    tools: { name: "使用ツール", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <>
      <ChapterPoint title={refs.story.name} jumpRef={refs.story.ref}>
        <Story />
      </ChapterPoint>

      <ChapterPoint title={refs.pages.name} jumpRef={refs.pages.ref}>
        <Pages />
      </ChapterPoint>

      <ChapterPoint title={refs.tools.name} jumpRef={refs.tools.ref}>
        <Tools />
      </ChapterPoint>
    </>
  );
};

const rinearRaft: MaterialSettings = {
  genre: "material",
  id: "rinear-raft",
  title: "RineaRの筏",
  thumbnail: thumbnailPic1,
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3, thumbnailPic4],
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2022-07-03").toDate(),
  description: "『RineaR』の活動拠点であり、制作物や投稿を公開するホームページ。",
  Page
};

export default rinearRaft;

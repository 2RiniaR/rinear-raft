import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import { Point } from "./Point";
import { Praise } from "./Praise";
import { HowTo } from "./HowTo";
import { Bonuses } from "./Bonuses";
import { Tools } from "./Tools";
import { MaterialSettings } from "repositories";
import { Chapter, ContentPage } from "models/content";
import { ChapterPoint } from "writers";
import thumbnailPic1 from "public/contents/materials/marvelous/page1.webp";
import thumbnailPic2 from "public/contents/materials/marvelous/page2.webp";
import thumbnailPic3 from "public/contents/materials/marvelous/page3.webp";

const Page: ContentPage = ({ setChapters }) => {
  const refs: { [name: string]: Chapter } = {
    howto: { name: "利用方法", ref: useRef(null) },
    point: { name: "えらいポイント", ref: useRef(null) },
    praise: { name: "人を褒める", ref: useRef(null) },
    bonuses: { name: "えらいことを評価する", ref: useRef(null) },
    tools: { name: "使用ツール", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <>
      <ChapterPoint title={refs.howto.name} jumpRef={refs.howto.ref}>
        <HowTo />
      </ChapterPoint>

      <ChapterPoint title={refs.point.name} jumpRef={refs.point.ref}>
        <Point />
      </ChapterPoint>

      <ChapterPoint title={refs.praise.name} jumpRef={refs.praise.ref}>
        <Praise />
      </ChapterPoint>

      <ChapterPoint title={refs.bonuses.name} jumpRef={refs.bonuses.ref}>
        <Bonuses />
      </ChapterPoint>

      <ChapterPoint title={refs.tools.name} jumpRef={refs.tools.ref}>
        <Tools />
      </ChapterPoint>
    </>
  );
};

const marvelous: MaterialSettings = {
  genre: "material",
  id: "marvelous",
  title: "エライさんbot",
  thumbnail: thumbnailPic1,
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3],
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2021-04-30").toDate(),
  description: "みんなの「えらい！」をカウントしてくれるDiscord Bot。",
  Page
};

export default marvelous;

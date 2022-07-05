import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import { Rule } from "./Rule";
import { HowTo } from "./HowTo";
import { Tools } from "./Tools";
import { MaterialSettings } from "repositories";
import { Chapter, ContentPage } from "models/content";
import { ChapterPoint, ExternalLink, Video } from "writers";
import thumbnailPic1 from "public/contents/materials/popcorn-chef/game1.webp";
import thumbnailPic2 from "public/contents/materials/popcorn-chef/title.webp";
import thumbnailPic3 from "public/contents/materials/popcorn-chef/game4.webp";
import thumbnailPic4 from "public/contents/materials/popcorn-chef/lobby.webp";

const Page: ContentPage = ({ setChapters }) => {
  const refs: { [name: string]: Chapter } = {
    movie: { name: "PV", ref: useRef(null) },
    download: { name: "ゲーム本体", ref: useRef(null) },
    howto: { name: "遊び方", ref: useRef(null) },
    rule: { name: "ルール", ref: useRef(null) },
    tools: { name: "使用ツール", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <>
      <ChapterPoint title={refs.movie.name} jumpRef={refs.movie.ref}>
        <Video src="https://www.youtube.com/embed/qf3eXiC_UrM" />
      </ChapterPoint>

      <ChapterPoint title={refs.download.name} jumpRef={refs.download.ref}>
        <ExternalLink href="https://unityroom.com/games/pon_bon_rush">ここ</ExternalLink>
        からプレイ可能です。
      </ChapterPoint>

      <ChapterPoint title={refs.howto.name} jumpRef={refs.howto.ref}>
        <HowTo />
      </ChapterPoint>

      <ChapterPoint title={refs.rule.name} jumpRef={refs.rule.ref}>
        <Rule />
      </ChapterPoint>

      <ChapterPoint title={refs.tools.name} jumpRef={refs.tools.ref}>
        <Tools />
      </ChapterPoint>
    </>
  );
};

const ponBonRush: MaterialSettings = {
  genre: "material",
  id: "pon-bon-rush",
  title: "Pon! Bon! Rush",
  thumbnail: thumbnailPic1,
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3, thumbnailPic4],
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2020-04-05").toDate(),
  description:
    "2人のプレイヤーがリアルタイムでポップコーンを調理し、調理したポップコーンを食べた量で競う2人通信対戦のカジュアルゲーム。",
  Page
};

export default ponBonRush;

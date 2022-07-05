import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import { Download } from "./Download";
import { Rule } from "./Rule";
import { Strategy } from "./Strategy";
import { Tools } from "./Tools";
import { MaterialSettings } from "repositories";
import { Chapter, ContentPage } from "models/content";
import { ChapterPoint, Video } from "writers";
import thumbnailPic1 from "public/contents/materials/maze-escape/stage1.webp";
import thumbnailPic2 from "public/contents/materials/maze-escape/title.webp";
import thumbnailPic3 from "public/contents/materials/maze-escape/stage2.webp";
import thumbnailPic4 from "public/contents/materials/maze-escape/result.webp";

const Page: ContentPage = ({ setChapters }) => {
  const refs: { [name: string]: Chapter } = {
    movie: { name: "紹介動画", ref: useRef(null) },
    download: { name: "ダウンロード", ref: useRef(null) },
    rule: { name: "ルール", ref: useRef(null) },
    strategy: { name: "攻略データ", ref: useRef(null) },
    tools: { name: "使用ツール", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <>
      <ChapterPoint title={refs.movie.name} jumpRef={refs.movie.ref}>
        <Video src="https://www.youtube.com/embed/WWZ9mK9vg1M" />
      </ChapterPoint>

      <ChapterPoint title={refs.download.name} jumpRef={refs.download.ref}>
        <Download />
      </ChapterPoint>

      <ChapterPoint title={refs.rule.name} jumpRef={refs.rule.ref}>
        <Rule />
      </ChapterPoint>

      <ChapterPoint title={refs.strategy.name} jumpRef={refs.strategy.ref}>
        <Strategy />
      </ChapterPoint>

      <ChapterPoint title={refs.tools.name} jumpRef={refs.tools.ref}>
        <Tools />
      </ChapterPoint>
    </>
  );
};

const mazeEscape: MaterialSettings = {
  genre: "material",
  id: "maze-escape",
  title: "迷宮脱出",
  thumbnail: thumbnailPic1,
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3, thumbnailPic4],
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2016-10-18").toDate(),
  description: "上下左右にプレイヤーを移動し、制限時間以内にゴールを目指す2Dアクション脱出ゲーム。",
  Page
};

export default mazeEscape;

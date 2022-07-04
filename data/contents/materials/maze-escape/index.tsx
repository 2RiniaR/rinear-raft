import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import { Download } from "./Download";
import { Rule } from "./Rule";
import { Strategy } from "./Strategy";
import { Tools } from "./Tools";
import { Chapter, Video } from "components/writers";
import { ChapterPoint, ContentPageProps, MaterialContent } from "lib/contents";
import thumbnailPic1 from "public/contents/materials/maze-escape/stage1.webp";
import thumbnailPic2 from "public/contents/materials/maze-escape/title.webp";
import thumbnailPic3 from "public/contents/materials/maze-escape/stage2.webp";
import thumbnailPic4 from "public/contents/materials/maze-escape/result.webp";

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {
    movie: { name: "紹介動画", ref: useRef(null) },
    download: { name: "ダウンロード", ref: useRef(null) },
    rule: { name: "ルール", ref: useRef(null) },
    strategy: { name: "攻略データ", ref: useRef(null) },
    tools: { name: "使用ツール", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <>
      <Chapter title={refs.movie.name} jumpRef={refs.movie.ref}>
        <Video src="https://www.youtube.com/embed/WWZ9mK9vg1M" />
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
    </>
  );
};

const mazeEscape: MaterialContent = {
  genre: "materials",
  id: "maze-escape",
  title: "迷宮脱出",
  thumbnail: thumbnailPic1,
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3, thumbnailPic4],
  updatedAt: dayjs("2022-07-03 21:00:00"),
  releasedAt: dayjs("2016-10-18"),
  description: "上下左右にプレイヤーを移動し、制限時間以内にゴールを目指す2Dアクション脱出ゲーム。",
  Page
};

export default mazeEscape;

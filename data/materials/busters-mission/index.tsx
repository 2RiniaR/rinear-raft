import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import { Rule } from "./Rule";
import { Strategy } from "./Strategy";
import { Tools } from "./Tools";
import { ChapterPoint, ExternalLink, Paragraph, Video } from "writers";
import thumbnailPic1 from "public/contents/materials/busters-mission/stage3-2.webp";
import thumbnailPic2 from "public/contents/materials/busters-mission/title.webp";
import thumbnailPic3 from "public/contents/materials/busters-mission/stage1.webp";
import thumbnailPic4 from "public/contents/materials/busters-mission/stage2.webp";
import { Chapter, ContentPage } from "models/content";
import { MaterialSettings } from "repositories";

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
        <Video src={"https://www.youtube.com/embed/YzqFIVbV4-c"}></Video>
      </ChapterPoint>

      <ChapterPoint title={refs.download.name} jumpRef={refs.download.ref}>
        <Paragraph>
          ゲームのファイルを
          <ExternalLink href="https://www.dropbox.com/sh/h23lhcyl0cwjlh5/AADIuiV0vj4hXrInV_j6YmOqa?dl=0">
            ここ
          </ExternalLink>
          からダウンロードしてください。
        </Paragraph>
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

const bustersMission: MaterialSettings = {
  genre: "material",
  id: "busters-mission",
  title: "Busters Mission",
  thumbnail: thumbnailPic1,
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3, thumbnailPic4],
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2018-09-05").toDate(),
  description: "敵の攻撃を避けながら、ステージ内にいるすべての敵を倒していく2Dアクションゲーム。",
  Page
};

export default bustersMission;

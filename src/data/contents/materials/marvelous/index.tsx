/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import Point from "./Point";
import Praise from "./Praise";
import Howto from "./Howto";
import Bonuses from "./Bonuses";
import Tools from "./Tools";
import { ChapterPoint, ContentPageProps, MaterialContent } from "lib/contents";
import { Chapter } from "content-parts";
import thumbnailPic1 from "public/contents/materials/marvelous/top1.webp";
import thumbnailPic2 from "public/contents/materials/marvelous/top2.webp";
import thumbnailPic3 from "public/contents/materials/marvelous/top3.webp";

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {
    howto: { name: "利用方法", ref: useRef(null) },
    point: { name: "えらいポイント", ref: useRef(null) },
    praise: { name: "人を褒める", ref: useRef(null) },
    bonuses: { name: "えらいことを評価する", ref: useRef(null) },
    tools: { name: "使用ツール", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <>
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
    </>
  );
};

const marvelous: MaterialContent = {
  genre: "materials",
  id: "marvelous",
  title: "エライさんbot",
  thumbnail: thumbnailPic1,
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3],
  updatedAt: dayjs("2022-07-03 21:00:00"),
  releasedAt: dayjs("2021-04-30"),
  description: "みんなの「えらい！」をカウントしてくれるDiscord Bot。",
  Page
};

export default marvelous;

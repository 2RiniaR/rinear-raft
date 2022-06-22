/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import Rule from "./Rule";
import Howto from "./Howto";
import Tools from "./Tools";
import Background from "./Background";
import ExternalLink from "components/functions/link/ExternalLink";
import { Chapter, Video } from "content-parts";
import { ChapterPoint, ContentPageProps, ScenarioContent } from "lib/contents";
import thumbnailPic1 from "public/contents/scenarios/popcorn-chef/game1.webp";
import thumbnailPic2 from "public/contents/scenarios/popcorn-chef/title.webp";
import thumbnailPic3 from "public/contents/scenarios/popcorn-chef/game4.webp";
import thumbnailPic4 from "public/contents/scenarios/popcorn-chef/lobby.webp";

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {
    movie: { name: "PV", ref: useRef(null) },
    download: { name: "ゲーム本体", ref: useRef(null) },
    howto: { name: "遊び方", ref: useRef(null) },
    rule: { name: "ルール", ref: useRef(null) },
    tools: { name: "使用ツール", ref: useRef(null) },
    background: { name: "裏話", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <>
      <Chapter title={refs.movie.name} jumpRef={refs.movie.ref}>
        <Video src="https://www.youtube.com/embed/qf3eXiC_UrM" />
      </Chapter>

      <Chapter title={refs.download.name} jumpRef={refs.download.ref}>
        <ExternalLink href="https://unityroom.com/games/pon_bon_rush">ここ</ExternalLink>
        からプレイ可能です。
      </Chapter>

      <Chapter title={refs.howto.name} jumpRef={refs.howto.ref}>
        <Howto />
      </Chapter>

      <Chapter title={refs.rule.name} jumpRef={refs.rule.ref}>
        <Rule />
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

const ponBonRush: ScenarioContent = {
  genre: "scenarios",
  id: "pon-bon-rush",
  title: "Pon! Bon! Rush",
  thumbnail: thumbnailPic1,
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3, thumbnailPic4],
  updatedAt: dayjs("2022-05-28"),
  releasedAt: dayjs("2020-04-05"),
  description:
    "2人のプレイヤーがリアルタイムでポップコーンを調理し、調理したポップコーンを食べた量で競う2人通信対戦のカジュアルゲーム。",
  Page
};

export default ponBonRush;

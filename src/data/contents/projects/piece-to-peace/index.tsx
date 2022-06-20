/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import Movie from "./Movie";
import Download from "./Download";
import Howto from "./Howto";
import Rule from "./Rule";
import Tools from "./Tools";
import Background from "./Background";
import { ChapterPoint, ContentPageProps, ProjectContent } from "lib/contents";
import thumbnailPic1 from "public/contents/projects/popcorn-chef/game1.webp";
import thumbnailPic2 from "public/contents/projects/popcorn-chef/title.webp";
import thumbnailPic3 from "public/contents/projects/popcorn-chef/game4.webp";
import thumbnailPic4 from "public/contents/projects/popcorn-chef/lobby.webp";
import { Chapter } from "content-parts";

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
        <Movie />
      </Chapter>

      <Chapter title={refs.download.name} jumpRef={refs.download.ref}>
        <Download />
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

const pieceToPeace: ProjectContent = {
  genre: "projects",
  id: "piece-to-peace",
  title: "Piece to PEACE",
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3, thumbnailPic4],
  updatedAt: dayjs("2022-06-20"),
  releasedAt: dayjs("2021-09-20"),
  description:
    "パズルで自分を強化していく、2Dの横スクロールシューティングゲーム。株式会社CyberAgentのインターンシップで、3人で共同制作した。",
  Page
};

export default pieceToPeace;

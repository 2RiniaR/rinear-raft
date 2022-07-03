/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import dayjs from "dayjs";
import { useEffect } from "react";
import { ChapterPoint, ContentPageProps, MaterialContent } from "lib/contents";
import thumbnailPic1 from "public/contents/materials/piece-to-peace/title.webp";
import thumbnailPic2 from "public/contents/materials/piece-to-peace/shooting.webp";
import thumbnailPic3 from "public/contents/materials/piece-to-peace/puzzle.webp";
import thumbnailPic4 from "public/contents/materials/piece-to-peace/rest.webp";
import { ComingSoon } from "content-parts";

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {};

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <>
      <ComingSoon />
    </>
  );
};

const pieceToPeace: MaterialContent = {
  genre: "materials",
  id: "piece-to-peace",
  title: "Piece to PEACE",
  thumbnail: thumbnailPic1,
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3, thumbnailPic4],
  updatedAt: dayjs("2022-07-03 21:00:00"),
  releasedAt: dayjs("2021-09-20"),
  private: true,
  description:
    "パズルで自分を強化していく、2Dの横スクロールシューティングゲーム。株式会社CyberAgentのインターンシップで、3人で共同制作した。",
  Page
};

export default pieceToPeace;

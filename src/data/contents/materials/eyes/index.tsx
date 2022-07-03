/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import dayjs from "dayjs";
import { useEffect } from "react";
import { ChapterPoint, ContentPageProps, MaterialContent } from "lib/contents";
import thumbnailPic from "public/contents/materials/eyes/eyes.webp";
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

const eyes: MaterialContent = {
  genre: "materials",
  id: "eyes",
  title: "み　て　る　よ",
  thumbnail: thumbnailPic,
  thumbnails: [thumbnailPic],
  updatedAt: dayjs("2022-07-03 21:00:00"),
  releasedAt: dayjs("2022-02-25"),
  description:
    "誰かがチャットを送ろうとして長考しているのを検知すると、超低確率で目が2つ並んだメッセージを送ってくるDiscord bot。",
  Page
};

export default eyes;

/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import dayjs from "dayjs";
import { useEffect } from "react";
import { ChapterPoint, ContentPageProps, ScenarioContent } from "lib/contents";
import thumbnailPic from "public/contents/scenarios/eyes/eyes.webp";

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {};

  useEffect(() => setChapters(Object.values(refs)), []);

  return <></>;
};

const eyes: ScenarioContent = {
  genre: "scenarios",
  id: "eyes",
  title: "み　て　る　よ",
  thumbnail: thumbnailPic,
  thumbnails: [thumbnailPic, thumbnailPic, thumbnailPic, thumbnailPic],
  updatedAt: dayjs("2022-06-20 15:15:41"),
  releasedAt: dayjs("2022-02-25"),
  description:
    "誰かがチャットを送ろうとして長考しているのを検知すると、超低確率で目が2つ並んだメッセージを送ってくるDiscord bot。",
  Page
};

export default eyes;

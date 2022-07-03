/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import dayjs from "dayjs";
import { useEffect } from "react";
import { ChapterPoint, ContentPageProps, MaterialContent } from "lib/contents";
import thumbnailPic1 from "public/img/non-public-thumbnail.webp";

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {};

  useEffect(() => setChapters(Object.values(refs)), []);

  return <></>;
};

const madeHighlow: MaterialContent = {
  genre: "materials",
  id: "made-highlow",
  title: "メイドハイロウ",
  thumbnail: thumbnailPic1,
  thumbnails: [thumbnailPic1],
  updatedAt: dayjs("2022-07-03 21:00:00"),
  releasedAt: undefined,
  private: true,
  description: "鋭意制作中。続報をお待ちください。",
  Page
};

export default madeHighlow;

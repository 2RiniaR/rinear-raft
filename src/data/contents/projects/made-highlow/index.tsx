/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import dayjs from "dayjs";
import { useEffect } from "react";
import { ChapterPoint, ContentPageProps, ProjectContent } from "lib/contents";
import thumbnailPic1 from "public/img/non-public-thumbnail.webp";

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {};

  useEffect(() => setChapters(Object.values(refs)), []);

  return <></>;
};

const madeHighlow: ProjectContent = {
  genre: "projects",
  id: "made-highlow",
  title: "メイドハイロウ",
  thumbnails: [thumbnailPic1, thumbnailPic1, thumbnailPic1, thumbnailPic1],
  updatedAt: dayjs("2022-06-20"),
  releasedAt: undefined,
  description: "鋭意制作中。続報をお待ちください。",
  Page
};

export default madeHighlow;

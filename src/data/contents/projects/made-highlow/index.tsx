/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import dayjs from "dayjs";
import { useEffect } from "react";
import { ChapterPoint, ContentPageProps, ProjectContent } from "lib/contents";
import thumbnailPic1 from "public/contents/projects/popcorn-chef/game1.webp";
import thumbnailPic2 from "public/contents/projects/popcorn-chef/title.webp";
import thumbnailPic3 from "public/contents/projects/popcorn-chef/game4.webp";
import thumbnailPic4 from "public/contents/projects/popcorn-chef/lobby.webp";

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {};

  useEffect(() => setChapters(Object.values(refs)), []);

  return <></>;
};

const madeHighlow: ProjectContent = {
  genre: "projects",
  id: "made-highlow",
  title: "メイドハイロウ",
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3, thumbnailPic4],
  updatedAt: dayjs("2022-06-20"),
  releasedAt: undefined,
  description: "👁👁",
  Page
};

export default madeHighlow;

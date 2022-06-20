/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import dayjs from "dayjs";
import { useEffect } from "react";
import { ChapterPoint, ContentPageProps, ProjectContent } from "lib/contents";
import thumbnailPic1 from "public/contents/projects/kimifeel/page1.webp";
import thumbnailPic2 from "public/contents/projects/kimifeel/page2.webp";
import thumbnailPic3 from "public/contents/projects/kimifeel/page3.webp";
import thumbnailPic4 from "public/contents/projects/kimifeel/page4.webp";

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {};

  useEffect(() => setChapters(Object.values(refs)), []);

  return <></>;
};

const kimifeel: ProjectContent = {
  genre: "projects",
  id: "kimifeel",
  title: "キミフィール",
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3, thumbnailPic4],
  updatedAt: dayjs("2022-06-20 15:15:41"),
  releasedAt: dayjs("2022-02-16"),
  description: "周りの人々に自分のプロフィールを書いてもらえるサービス。",
  Page
};

export default kimifeel;

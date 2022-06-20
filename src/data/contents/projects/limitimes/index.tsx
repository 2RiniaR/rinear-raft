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

const limitimes: ProjectContent = {
  genre: "projects",
  id: "limitimes",
  title: "limitimes",
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3, thumbnailPic4],
  updatedAt: dayjs("2022-06-20 15:15:41"),
  releasedAt: dayjs("2021-11-11"),
  description: "discordのサーバー内でTwitterのような「壁打ちで話せる環境」を提供するdiscord bot。",
  Page
};

export default limitimes;

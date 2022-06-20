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

const kimifeel: ProjectContent = {
  genre: "projects",
  id: "kimifeel",
  title: "キミフィール",
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3, thumbnailPic4],
  updatedAt: dayjs("2022-06-20"),
  releasedAt: dayjs("2020-02-16"),
  description: "周りの人々に自分のプロフィールを書いてもらえるサービス。",
  Page
};

export default kimifeel;

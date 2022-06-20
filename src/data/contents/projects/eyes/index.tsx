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

const eyes: ProjectContent = {
  genre: "projects",
  id: "eyes",
  title: "み　て　る　よ",
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3, thumbnailPic4],
  updatedAt: dayjs("2022-06-20"),
  releasedAt: dayjs("2020-02-25"),
  description: "👁👁",
  Page
};

export default eyes;

import dayjs from "dayjs";
import { useEffect } from "react";
import { ChapterPoint, ContentPageProps, MaterialContent } from "types/content";
import thumbnailPic1 from "public/general/thumbnail-locked.webp";

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {};

  useEffect(() => setChapters(Object.values(refs)), []);

  return <></>;
};

const madeHighlow: MaterialContent = {
  genre: "material",
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

import dayjs from "dayjs";
import { useEffect } from "react";
import { Chapter, ContentPage } from "models/content";
import { MaterialSettings } from "repositories";
import thumbnailPic1 from "public/general/thumbnail-locked.webp";

const Page: ContentPage = ({ setChapters }) => {
  const refs: { [name: string]: Chapter } = {};

  useEffect(() => setChapters(Object.values(refs)), []);

  return <></>;
};

const madeHighlow: MaterialSettings = {
  genre: "material",
  id: "made-highlow",
  title: "メイドハイロウ",
  thumbnail: thumbnailPic1,
  thumbnails: [thumbnailPic1],
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: undefined,
  private: true,
  description: "鋭意制作中。続報をお待ちください。",
  Page
};

export default madeHighlow;

import dayjs from "dayjs";
import { useEffect } from "react";
import { Chapter, ContentPage } from "models/content";
import { MaterialSettings } from "repositories";
import thumbnailPic1 from "public/contents/materials/kimifeel/page1.webp";
import thumbnailPic2 from "public/contents/materials/kimifeel/page2.webp";
import thumbnailPic3 from "public/contents/materials/kimifeel/page3.webp";
import { ComingSoon } from "writers";

const Page: ContentPage = ({ setChapters }) => {
  const refs: { [name: string]: Chapter } = {};

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <>
      <ComingSoon />
    </>
  );
};

const kimifeel: MaterialSettings = {
  genre: "material",
  id: "kimifeel",
  title: "キミフィール",
  thumbnail: thumbnailPic1,
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3],
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2022-02-16").toDate(),
  description: "周りの人々に自分のプロフィールを書いてもらえるサービス。",
  Page
};

export default kimifeel;

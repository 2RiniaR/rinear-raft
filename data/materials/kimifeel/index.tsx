import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import { Chapter, ContentPage } from "models/content";
import { MaterialSettings } from "repositories";
import page1Pic from "public/contents/materials/kimifeel/page1.webp";
import page2Pic from "public/contents/materials/kimifeel/page2.webp";
import page3Pic from "public/contents/materials/kimifeel/page3.webp";
import { ChapterPoint, ContentImage } from "writers";

const Page: ContentPage = ({ setChapters }) => {
  const refs: { [name: string]: Chapter } = {
    intro: { name: "紹介", ref: useRef(null) },
    functions: { name: "使い方", ref: useRef(null) },
    about: { name: "この作品について", ref: useRef(null) },
    implement: { name: "どのように作られているか", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <>
      <ChapterPoint title={refs.intro.name} jumpRef={refs.intro.ref}>
        <ContentImage src={page1Pic} alt="タイトル" />
        <ContentImage src={page2Pic} alt="なにができるか" />
        <ContentImage src={page3Pic} alt="使い方" />
      </ChapterPoint>
    </>
  );
};

const kimifeel: MaterialSettings = {
  genre: "material",
  id: "kimifeel",
  title: "キミフィール",
  thumbnail: page1Pic,
  thumbnails: [page1Pic, page2Pic, page3Pic],
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2022-02-16").toDate(),
  description: "周りの人々に自分のプロフィールを書いてもらえるサービス。",
  Page
};

export default kimifeel;

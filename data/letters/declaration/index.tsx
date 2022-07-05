import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import { Chapter, ContentPage } from "models/content";
import { LetterSettings } from "repositories";
import { ChapterPoint, Paragraph } from "writers";
import thumbnailPic from "public/general/main.webp";

const Page: ContentPage = ({ setChapters }) => {
  const refs: { [name: string]: Chapter } = {
    main: { name: "宣言", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <>
      <ChapterPoint title={refs.main.name} jumpRef={refs.main.ref}>
        <Paragraph>今日からここが、RineaRの活動拠点です。</Paragraph>
      </ChapterPoint>
    </>
  );
};

const introduction: LetterSettings = {
  genre: "letter",
  id: "declaration",
  index: 1,
  title: "拠点完成宣言！",
  thumbnail: thumbnailPic,
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  description: "RineaRのホームページ『RineaRの筏』が完成し、公開されました！",
  Page
};

export default introduction;

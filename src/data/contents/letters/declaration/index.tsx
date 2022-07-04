import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import { Chapter, Paragraph } from "content-parts";
import { ChapterPoint, ContentPageProps, LetterContent } from "lib/contents";
import thumbnailPic from "public/img/main.webp";

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {
    main: { name: "宣言", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <>
      <Chapter title={refs.main.name} jumpRef={refs.main.ref}>
        <Paragraph>今日からここが、RineaRの活動拠点です。</Paragraph>
      </Chapter>
    </>
  );
};

const introduction: LetterContent = {
  genre: "letters",
  id: "declaration",
  index: 1,
  title: "拠点完成宣言！",
  thumbnail: thumbnailPic,
  updatedAt: dayjs("2022-07-03 21:00:00"),
  description: "RineaRのホームページ『RineaRの筏』が完成し、公開されました！",
  Page
};

export default introduction;

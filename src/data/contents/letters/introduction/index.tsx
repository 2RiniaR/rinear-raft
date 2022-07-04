import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import { Chapter, Paragraph } from "content-parts";
import { ChapterPoint, ContentPageProps, LetterContent } from "lib/contents";
import thumbnailPic from "public/contents/materials/rinear-raft/top.webp";

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {
    rinear: { name: "RineaR", ref: useRef(null) },
    raft: { name: "このホームページについて", ref: useRef(null) },
    future: { name: "今後", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <>
      <Chapter title={refs.rinear.name} jumpRef={refs.rinear.ref}>
        <Paragraph>ホームでも紹介した通り、RineaRは個人活動の総称です。</Paragraph>
      </Chapter>

      <Chapter title={refs.raft.name} jumpRef={refs.raft.ref}>
        <Paragraph>当ホームページは、RineaRの活動拠点とするために制作しました。</Paragraph>
        <Paragraph>
          制作したものを公開したり、制作途中の様子を記録したり、アイデアをまとめたり......と、ここを拠点に制作活動をしていきます。
        </Paragraph>
      </Chapter>

      <Chapter title={refs.future.name} jumpRef={refs.future.ref}>
        <Paragraph></Paragraph>
      </Chapter>
    </>
  );
};

const introduction: LetterContent = {
  genre: "letters",
  id: "introduction",
  index: 2,
  title: "活動拠点が完成しました。",
  thumbnail: thumbnailPic,
  updatedAt: dayjs("2022-07-03 21:00:00"),
  private: true,
  description:
    "ついに活動拠点が完成しました。『RineaR』とこのホームページについて、それから今後について書こうと思います。",
  Page
};

export default introduction;

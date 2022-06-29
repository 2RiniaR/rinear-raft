/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import { Chapter, Paragraph } from "content-parts";
import { ChapterPoint, ContentPageProps, LetterContent } from "lib/contents";
import thumbnailPic from "public/contents/scenarios/rinear-raft/Top.webp";

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {
    aboutHomePage: { name: "ひとこと", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <>
      <Chapter title={refs.aboutHomePage.name} jumpRef={refs.aboutHomePage.ref}>
        <Paragraph>今日からここが、私のアイデンティティです。</Paragraph>
      </Chapter>
    </>
  );
};

const introduction: LetterContent = {
  genre: "letters",
  id: "introduction",
  index: 1,
  title: "活動拠点が完成しました。",
  thumbnail: thumbnailPic,
  updatedAt: dayjs("2022-06-30 21:00:00"),
  description: "ついに活動拠点が完成しました。",
  Page
};

export default introduction;

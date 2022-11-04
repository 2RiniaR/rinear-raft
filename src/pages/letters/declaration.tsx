import dayjs from "dayjs";
import React from "react";
import { LetterTemplate } from "templates";
import { Letter } from "content";
import thumbnailPic from "public/general/main.webp";

export const content: Letter = {
  id: "declaration",
  title: "拠点完成宣言！",
  image: thumbnailPic,
  releasedAt: dayjs("2022-07-03").toDate(),
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  description: "RineaRのホームページ『RineaRの筏』が完成し、公開されました！"
};

const Page = () => (
  <LetterTemplate content={content}>
    <p>今日からここが、RineaRの活動拠点です。</p>
  </LetterTemplate>
);

export default Page;

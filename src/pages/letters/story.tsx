import dayjs from "dayjs";
import React from "react";
import { getMarkdownStaticProps } from "../../server/markdown-static";
import { MarkdownContent } from "functions";
import { LetterTemplate } from "templates";
import { Letter } from "content";
import presentPic from "public/story/present.png";

export const content: Letter = {
  id: "story",
  title: "あらすじ",
  image: presentPic,
  releasedAt: dayjs("2022-11-02").toDate(),
  updatedAt: dayjs("2022-11-02 21:00:00").toDate(),
  description: "RineaRができるまで。"
};

export function getStaticProps() {
  return getMarkdownStaticProps("public/contents/letters/story/index.md");
}

const Page = MarkdownContent((md) => <LetterTemplate content={content}>{md}</LetterTemplate>);

export default Page;

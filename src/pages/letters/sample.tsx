import dayjs from "dayjs";
import React from "react";
import { LetterTemplate } from "templates";
import { Letter } from "content";
import thumbnailPic from "public/general/thumbnail-default.webp";
import { getMarkdownStaticProps } from "server/markdown-static";
import { MarkdownContent } from "functions";

export const content: Letter = {
  id: "sample",
  title: "デザインサンプル",
  image: thumbnailPic,
  releasedAt: dayjs("2022-07-03").toDate(),
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  description: "デザインのサンプル。"
};

export function getStaticProps() {
  return getMarkdownStaticProps("public/contents/letters/sample/index.md");
}

const Page = MarkdownContent((md) => <LetterTemplate content={content}>{md}</LetterTemplate>);

export default Page;

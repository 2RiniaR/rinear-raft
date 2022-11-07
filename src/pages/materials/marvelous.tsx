import dayjs from "dayjs";
import React from "react";
import { getMarkdownStaticProps } from "../../server/markdown-static";
import { MarkdownContent } from "functions";
import { MaterialTemplate } from "templates";
import { Material } from "content";
import thumbnailPic1 from "public/contents/materials/marvelous/page1.webp";

export const content: Material = {
  id: "marvelous",
  title: "エライさんbot",
  image: thumbnailPic1,
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2021-04-30").toDate(),
  description: "みんなの「えらい！」をカウントしてくれるDiscord Bot。"
};

export function getStaticProps() {
  return getMarkdownStaticProps("public/contents/materials/marvelous/index.md");
}

const Page = MarkdownContent((md) => <MaterialTemplate content={content}>{md}</MaterialTemplate>);

export default Page;

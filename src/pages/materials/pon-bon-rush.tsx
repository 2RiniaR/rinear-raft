import dayjs from "dayjs";
import { getMarkdownStaticProps } from "../../server/markdown-static";
import thumbnailPic1 from "public/contents/materials/popcorn-chef/game1.webp";
import { MarkdownContent } from "functions";
import { MaterialTemplate } from "templates";
import { Material } from "content";

export const content: Material = {
  id: "pon-bon-rush",
  title: "Pon! Bon! Rush",
  image: thumbnailPic1,
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2020-04-05").toDate(),
  description:
    "2人のプレイヤーがリアルタイムでポップコーンを調理し、調理したポップコーンを食べた量で競う2人通信対戦のカジュアルゲーム。"
};

export function getStaticProps() {
  return getMarkdownStaticProps("public/contents/materials/popcorn-chef/index.md");
}

const Page = MarkdownContent((md) => <MaterialTemplate content={content}>{md}</MaterialTemplate>);

export default Page;

import dayjs from "dayjs";
import { getMarkdownStaticProps } from "../../server/markdown-static";
import { MarkdownContent } from "../../functions";
import { MaterialTemplate } from "templates";
import { Material } from "content";
import thumbnailPic from "public/contents/materials/eyes/eyes.webp";

export const content: Material = {
  id: "eyes",
  title: "み　て　る　よ",
  image: thumbnailPic,
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2022-02-25").toDate(),
  description:
    "誰かがチャットを送ろうとして長考しているのを検知すると、超低確率で目が2つ並んだメッセージを送ってくるDiscord bot。"
};

export function getStaticProps() {
  return getMarkdownStaticProps("public/contents/materials/eyes/index.md");
}

const Page = MarkdownContent((md) => <MaterialTemplate content={content}>{md}</MaterialTemplate>);

export default Page;

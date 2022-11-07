import dayjs from "dayjs";
import { getMarkdownStaticProps } from "../../server/markdown-static";
import { MarkdownContent } from "../../functions";
import { MaterialTemplate } from "templates";
import { Material } from "content";
import thumbnailPic1 from "public/contents/materials/kimifeel/page1.webp";

export const content: Material = {
  id: "kimifeel",
  title: "キミフィール",
  image: thumbnailPic1,
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2022-02-16").toDate(),
  description: "周りの人々に自分のプロフィールを書いてもらえるサービス。"
};

export function getStaticProps() {
  return getMarkdownStaticProps("public/contents/materials/kimifeel/index.md");
}

const Page = MarkdownContent((md) => <MaterialTemplate content={content}>{md}</MaterialTemplate>);

export default Page;

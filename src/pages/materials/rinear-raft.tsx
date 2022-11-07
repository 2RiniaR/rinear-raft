import dayjs from "dayjs";
import { getMarkdownStaticProps } from "../../server/markdown-static";
import { MarkdownContent } from "functions";
import { MaterialTemplate } from "templates";
import { Material } from "content";
import thumbnailPic1 from "public/contents/materials/rinear-raft/top.webp";

export const content: Material = {
  id: "rinear-raft",
  title: "RineaRの筏",
  image: thumbnailPic1,
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2022-07-03").toDate(),
  description: "『RineaR』の活動拠点であり、制作物や投稿を公開するホームページ。"
};

export function getStaticProps() {
  return getMarkdownStaticProps("public/contents/materials/rinear-raft/index.md");
}

const Page = MarkdownContent((md) => <MaterialTemplate content={content}>{md}</MaterialTemplate>);

export default Page;

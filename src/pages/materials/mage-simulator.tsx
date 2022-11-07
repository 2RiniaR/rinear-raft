import dayjs from "dayjs";
import { getMarkdownStaticProps } from "../../server/markdown-static";
import { MarkdownContent } from "functions";
import { MaterialTemplate } from "templates";
import { Material } from "content";
import titlePic from "public/contents/materials/mage-simulator/title.webp";

export const content: Material = {
  id: "mage-simulator",
  title: "メイジ・シミュレータ",
  image: titlePic,
  updatedAt: dayjs("2022-07-29 12:50:00").toDate(),
  releasedAt: dayjs("2021-02-25").toDate(),
  description: "モーションセンサとマイクを使って、魔法を詠唱し発動できるアプリケーション。"
};

export function getStaticProps() {
  return getMarkdownStaticProps("public/contents/materials/mage-simulator/index.md");
}

const Page = MarkdownContent((md) => <MaterialTemplate content={content}>{md}</MaterialTemplate>);

export default Page;

import dayjs from "dayjs";
import { MarkdownContent } from "functions";
import { MaterialTemplate } from "templates";
import { Material } from "content";
import stage3_2Pic from "public/contents/materials/busters-mission/stage3-2.webp";
import { getMarkdownStaticProps } from "server/markdown-static";

export const content: Material = {
  id: "busters-mission",
  title: "Busters Mission",
  image: stage3_2Pic,
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2018-09-05").toDate(),
  description: "敵の攻撃を避けながら、ステージ内にいるすべての敵を倒していく2Dアクションゲーム。"
};

export function getStaticProps() {
  return getMarkdownStaticProps("public/contents/materials/busters-mission/index.md");
}

const Page = MarkdownContent((md) => <MaterialTemplate content={content}>{md}</MaterialTemplate>);

export default Page;

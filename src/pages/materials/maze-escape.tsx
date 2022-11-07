import dayjs from "dayjs";
import { getMarkdownStaticProps } from "../../server/markdown-static";
import { MarkdownContent } from "functions";
import { MaterialTemplate } from "templates";
import stage1Pic from "public/contents/materials/maze-escape/stage1.webp";
import { Material } from "content";

export const content: Material = {
  id: "maze-escape",
  title: "迷宮脱出",
  image: stage1Pic,
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2016-10-18").toDate(),
  description: "上下左右にプレイヤーを移動し、制限時間以内にゴールを目指す2Dアクション脱出ゲーム。"
};

export function getStaticProps() {
  return getMarkdownStaticProps("public/contents/materials/maze-escape/index.md");
}

const Page = MarkdownContent((md) => <MaterialTemplate content={content}>{md}</MaterialTemplate>);

export default Page;

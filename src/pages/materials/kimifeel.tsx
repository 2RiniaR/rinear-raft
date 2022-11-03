import dayjs from "dayjs";
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

const Page = () => <MaterialTemplate content={content}>詳細はまだありません。</MaterialTemplate>;

export default Page;

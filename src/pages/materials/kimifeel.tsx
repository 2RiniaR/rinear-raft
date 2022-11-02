import dayjs from "dayjs";
import { MaterialTemplate } from "templates";
import { Material } from "content";
import thumbnailPic1 from "public/contents/materials/kimifeel/page1.webp";
import thumbnailPic2 from "public/contents/materials/kimifeel/page2.webp";
import thumbnailPic3 from "public/contents/materials/kimifeel/page3.webp";

export const content: Material = {
  id: "kimifeel",
  title: "キミフィール",
  image1: thumbnailPic1,
  image2: thumbnailPic2,
  image3: thumbnailPic3,
  image4: undefined,
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2022-02-16").toDate(),
  description: "周りの人々に自分のプロフィールを書いてもらえるサービス。"
};

const Page = () => <MaterialTemplate content={content}>詳細はまだありません。</MaterialTemplate>;

export default Page;

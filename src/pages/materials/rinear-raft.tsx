import dayjs from "dayjs";
import Link from "next/link";
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

const Page = () => (
  <MaterialTemplate content={content}>
    <h1>ページ構成</h1>

    <ul>
      <li>
        <Link href={"/"}>HOME</Link>
        <p>
          当ホームページのトップページ。トップ及び背景の画像は、RineaRの活動方針である「漂流」と「観察」が表されている。
        </p>
      </li>
      <li>
        <Link href={"/letters"}>LETTERS</Link>
        <p>制作の途中経過やアイデアなど、書き留めておきたいこと等を投稿する。</p>
      </li>
      <li>
        <Link href={"/materials"}>MATERIALS</Link>
        <p>制作物を投稿する。</p>
      </li>
    </ul>

    <h1>ツール</h1>

    <h2>言語・ライブラリ等</h2>
    <ul>
      <li>React</li>
      <li>Next.js</li>
      <li>TypeScript</li>
      <li>SCSS</li>
    </ul>
    <h2>デザインツール</h2>
    <ul>
      <li>Adobe Illustrator</li>
      <li>Adobe Photoshop</li>
      <li>Adobe XD</li>
      <li>Blender</li>
      <li>CLIP STUDIO PAINT</li>
    </ul>
  </MaterialTemplate>
);

export default Page;

import Link from "next/link";

const Section = (): JSX.Element => (
  <>
    <ul>
      <li>
        <Link href={"/"}>HOME</Link>
        <p>当ホームページのトップページ。トップの画像は、RineaRの活動方針である「漂流」と「観察」が表されている。</p>
      </li>
      <li>
        <Link href={"/talks"}>TALKS</Link>
        <p>制作の途中経過やアイデア、その他話したいこと等を投稿する。</p>
      </li>
      <li>
        <Link href={"/projects"}>PROJECTS</Link>
        <p>作品を投稿する。</p>
      </li>
    </ul>
  </>
);

export default Section;

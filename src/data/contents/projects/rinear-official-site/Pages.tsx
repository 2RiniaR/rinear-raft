import Link from "next/link";
import { UnorderedList, ListItem, Paragraph } from "content-parts";

const Section = (): JSX.Element => (
  <>
    <UnorderedList>
      <ListItem>
        <Link href={"/"}>HOME</Link>
        <Paragraph>
          当ホームページのトップページ。トップの画像は、RineaRの活動方針である「漂流」と「観察」が表されている。
        </Paragraph>
      </ListItem>
      <ListItem>
        <Link href={"/talks"}>TALKS</Link>
        <Paragraph>制作の途中経過やアイデア、その他話したいこと等を投稿する。</Paragraph>
      </ListItem>
      <ListItem>
        <Link href={"/projects"}>PROJECTS</Link>
        <Paragraph>作品を投稿する。</Paragraph>
      </ListItem>
    </UnorderedList>
  </>
);

export default Section;

/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import Link from "next/link";
import { ListItem, Paragraph, UnorderedList } from "content-parts";

const Section = (): JSX.Element => (
  <>
    <UnorderedList>
      <ListItem>
        <Link href={"/"}>HOME</Link>
        <Paragraph>
          当ホームページのトップページ。トップ及び背景の画像は、RineaRの活動方針である「漂流」と「観察」が表されている。
        </Paragraph>
      </ListItem>
      <ListItem>
        <Link href={"/letters"}>LETTERS</Link>
        <Paragraph>制作の途中経過やアイデアなど、書き留めておきたいこと等を投稿する。</Paragraph>
      </ListItem>
      <ListItem>
        <Link href={"/materials"}>MATERIALS</Link>
        <Paragraph>制作物を投稿する。</Paragraph>
      </ListItem>
    </UnorderedList>
  </>
);

export default Section;

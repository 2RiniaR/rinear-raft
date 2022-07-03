/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import Link from "next/link";
import { ListItem, UnorderedList } from "content-parts";

const Section = (): JSX.Element => (
  <>
    <UnorderedList>
      <ListItem>
        <Link href={"/"}>HOME</Link>
        <br />
        当ホームページのトップページ。トップの画像は、RineaRの活動方針である「漂流」と「観察」が表されている。
      </ListItem>
      <ListItem>
        <Link href={"/letters"}>LETTERS</Link>
        <br />
        制作の途中経過やアイデア、その他話したいこと等を投稿する。
      </ListItem>
      <ListItem>
        <Link href={"/materials"}>MATERIALS</Link>
        <br />
        作品を投稿する。
      </ListItem>
    </UnorderedList>
  </>
);

export default Section;

/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import ExternalLink from "components/functions/ExternalLink";
import { Heading, ListItem, UnorderedList } from "content-parts";

const Section = (): JSX.Element => (
  <>
    <Heading level="sub">言語・ライブラリ</Heading>
    <UnorderedList>
      <ListItem>C++（Microsoft Visual C++）</ListItem>
      <ListItem>
        <ExternalLink href="https://dxlib.xsrv.jp/">DXライブラリ</ExternalLink>
      </ListItem>
    </UnorderedList>
  </>
);

export default Section;
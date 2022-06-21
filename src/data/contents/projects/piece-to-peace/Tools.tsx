/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import { Heading, ListItem, UnorderedList } from "content-parts";

const Section = (): JSX.Element => (
  <>
    <Heading level="sub">言語・ライブラリ等</Heading>
    <UnorderedList>
      <ListItem>Unity 2021.3.0f1</ListItem>
      <ListItem>UniRx</ListItem>
      <ListItem>UniTask</ListItem>
      <ListItem>Photon Unity Network 2</ListItem>
    </UnorderedList>
  </>
);

export default Section;

/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import ExternalLink from "components/functions/ExternalLink";
import { Paragraph } from "content-parts";

const Section = (): JSX.Element => (
  <>
    <Paragraph>
      ゲームのファイルを
      <ExternalLink href="https://www.dropbox.com/sh/gwrs6nz2tadpmz0/AADOYp5cqjAhW-ZYqsSsYehQa?dl=0">ここ</ExternalLink>
      からダウンロードしてください。
    </Paragraph>
  </>
);

export default Section;

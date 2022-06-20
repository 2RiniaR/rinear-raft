/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import Head from "next/head";
import { TalkContent } from "lib/contents";

type Props = {
  content: TalkContent;
};

const TalkPage = ({ content }: Props): JSX.Element => (
  <Head>
    <title>{content.title} - RineaR</title>
  </Head>
);

export default TalkPage;

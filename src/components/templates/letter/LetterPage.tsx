/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { useState } from "react";
import styles from "./LetterPage.module.scss";
import LetterPageHead from "./LetterPageHead";
import { LetterTop } from "./Top";
import { ChapterPoint, LetterContent } from "lib/contents";
import ContentPageTemplate from "components/parts/pages/ContentPageTemplate";
import ChaptersView from "components/parts/ChaptersView/ChaptersView";
import BackButton from "components/templates/layout/BackButton";

type Props = {
  content: LetterContent;
};

const LetterPage = ({ content }: Props): JSX.Element => {
  const [chapters, setChapters] = useState<ChapterPoint[]>([]);

  return (
    <>
      <LetterPageHead content={content} />
      <ContentPageTemplate>
        <BackButton href={"/letters"} />
        <div className={styles.layout}>
          <LetterTop content={content} />
          <ChaptersView chapters={chapters} />
          <content.Page setChapters={setChapters} />
        </div>
      </ContentPageTemplate>
    </>
  );
};

export default LetterPage;

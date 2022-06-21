/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { useState } from "react";
import styles from "./ScenarioPage.module.scss";
import ScenarioPageHead from "./ScenarioPageHead";
import { ScenarioTop } from "./Top";
import BackButton from "components/templates/layout/BackButton";
import { ChapterPoint, ScenarioContent } from "lib/contents";
import ContentPageTemplate from "components/parts/pages/ContentPageTemplate";
import ChaptersView from "components/parts/ChaptersView/ChaptersView";

type Props = {
  content: ScenarioContent;
};

const ScenarioPage = ({ content }: Props): JSX.Element => {
  const [chapters, setChapters] = useState<ChapterPoint[]>([]);

  return (
    <>
      <ScenarioPageHead content={content} />
      <ContentPageTemplate>
        <BackButton href={"/scenarios"} />
        <div className={styles.layout}>
          <ScenarioTop content={content} />
          <ChaptersView chapters={chapters} />
          <content.Page setChapters={setChapters} />
        </div>
      </ContentPageTemplate>
    </>
  );
};

export default ScenarioPage;

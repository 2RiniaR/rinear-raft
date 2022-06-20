/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { useState } from "react";
import styles from "./ProjectPage.module.scss";
import ProjectPageHead from "./ProjectPageHead";
import { ProjectTop } from "./Top";
import BackButton from "components/templates/layout/BackButton";
import { ChapterPoint, ProjectContent } from "lib/contents";
import ContentPageTemplate from "components/parts/pages/ContentPageTemplate";
import ChaptersView from "components/parts/ChaptersView/ChaptersView";

type Props = {
  content: ProjectContent;
};

const ProjectPage = ({ content }: Props): JSX.Element => {
  const [chapters, setChapters] = useState<ChapterPoint[]>([]);

  return (
    <>
      <ProjectPageHead content={content} />
      <ContentPageTemplate>
        <BackButton href={"/projects"} />
        <div className={styles.layout}>
          <ProjectTop content={content} />
          <ChaptersView chapters={chapters} />
          <content.Page setChapters={setChapters} />
        </div>
      </ContentPageTemplate>
    </>
  );
};

export default ProjectPage;

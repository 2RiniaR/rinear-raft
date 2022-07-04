import React, { useState } from "react";
import styles from "./MaterialPage.module.scss";
import { MaterialTop } from "./Top";
import { BackButton, ContentPage } from "components/templates";
import { ChaptersView } from "components/parts";
import { ChapterPoint, MaterialContent } from "lib/contents";

type Props = {
  content: MaterialContent;
};

export const MaterialPage = ({ content }: Props): JSX.Element => {
  const [chapters, setChapters] = useState<ChapterPoint[]>([]);

  return (
    <ContentPage>
      <BackButton href={"/materials"} />
      <div className={styles.layout}>
        <MaterialTop content={content} />
        <ChaptersView chapters={chapters} />
        <content.Page setChapters={setChapters} />
      </div>
    </ContentPage>
  );
};

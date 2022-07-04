import React, { useState } from "react";
import styles from "./MaterialPage.module.scss";
import { MaterialTop } from "./Top";
import BackButton from "components/templates/layout/BackButton";
import { ChapterPoint, MaterialContent } from "lib/contents";
import ContentPage from "components/templates/ContentPage";
import ChaptersView from "components/parts/ChaptersView/ChaptersView";

type Props = {
  content: MaterialContent;
};

const MaterialPage = ({ content }: Props): JSX.Element => {
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

export default MaterialPage;

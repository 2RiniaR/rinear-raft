import React, { useState } from "react";
import styles from "./MaterialPage.module.scss";
import { MaterialTop } from "./Top";
import { BackButton, ContentPage } from "components/templates";
import { ChaptersView } from "components/parts";
import { ContentContext } from "constants/content";
import { Chapter, Material } from "models/content";

type Props = {
  content: Material;
};

export const MaterialPage = ({ content }: Props): JSX.Element => {
  const [chapters, setChapters] = useState<Chapter[]>([]);

  return (
    <ContentPage>
      <BackButton href={"/materials"} />
      <div className={styles.layout}>
        <MaterialTop content={content} />
        <ChaptersView chapters={chapters} />
        <main className={styles.content}>
          <ContentContext.Provider value={{ genre: "letter" }}>
            <content.Page setChapters={setChapters} />
          </ContentContext.Provider>
        </main>
      </div>
    </ContentPage>
  );
};

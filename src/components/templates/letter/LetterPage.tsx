import React, { useState } from "react";
import styles from "./LetterPage.module.scss";
import { LetterTop } from "./Top";
import { ChapterPoint, LetterContent } from "types/content";
import { ChaptersView } from "components/parts";
import { ContentPage } from "components/templates";
import { BackButton } from "components/templates/layout";
import { ContentContext } from "constants/content";

type Props = {
  content: LetterContent;
};

export const LetterPage = ({ content }: Props): JSX.Element => {
  const [chapters, setChapters] = useState<ChapterPoint[]>([]);

  return (
    <ContentPage>
      <BackButton href={"/letters"} />
      <div className={styles.layout}>
        <LetterTop content={content} />
        <ChaptersView chapters={chapters} />
        <main className={styles.content}>
          <ContentContext.Provider value={{ genre: "material" }}>
            <content.Page setChapters={setChapters} />
          </ContentContext.Provider>
        </main>
      </div>
    </ContentPage>
  );
};

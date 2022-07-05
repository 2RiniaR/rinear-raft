import React, { useState } from "react";
import styles from "./LetterPage.module.scss";
import { LetterTop } from "./Top";
import { Chapter, Letter } from "models/content";
import { ChaptersView } from "components/parts";
import { ContentPage } from "components/templates";
import { BackButton } from "components/templates/layout";
import { ContentContext } from "constants/content";

type Props = {
  letter: Letter;
};

export const LetterPage = ({ letter }: Props): JSX.Element => {
  const [chapters, setChapters] = useState<Chapter[]>([]);

  return (
    <ContentPage>
      <BackButton href={"/letters"} />
      <div className={styles.layout}>
        <LetterTop letter={letter} />
        <ChaptersView chapters={chapters} />
        <main className={styles.content}>
          <ContentContext.Provider value={{ genre: "material" }}>
            <letter.Page setChapters={setChapters} />
          </ContentContext.Provider>
        </main>
      </div>
    </ContentPage>
  );
};

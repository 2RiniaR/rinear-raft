import React, { useState } from "react";
import styles from "./LetterPage.module.scss";
import { LetterTop } from "./Top";
import { ChapterPoint, LetterContent } from "lib/contents";
import { ChaptersView } from "components/parts";
import { ContentPage } from "components/templates";
import { BackButton } from "components/templates/layout";

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
        <content.Page setChapters={setChapters} />
      </div>
    </ContentPage>
  );
};

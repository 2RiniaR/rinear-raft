import React, { useState } from "react";
import styles from "./LetterPage.module.scss";
import { LetterTop } from "./Top";
import { ChapterPoint, LetterContent } from "lib/contents";
import ContentPage from "components/templates/ContentPage";
import ChaptersView from "components/parts/ChaptersView/ChaptersView";
import BackButton from "components/templates/layout/BackButton";

type Props = {
  content: LetterContent;
};

const LetterPage = ({ content }: Props): JSX.Element => {
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

export default LetterPage;

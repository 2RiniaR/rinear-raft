import React, { useState } from "react";
import styles from "./TalkPage.module.scss";
import TalkPageHead from "./TalkPageHead";
import TalkTop from "./TalkTop";
import { ChapterPoint, TalkContent } from "lib/contents";
import ContentPageTemplate from "components/parts/pages/ContentPageTemplate";
import ChaptersView from "components/parts/ChaptersView/ChaptersView";

type Props = {
  content: TalkContent;
};

const TalkPage = ({ content }: Props): JSX.Element => {
  const [chapters, setChapters] = useState<ChapterPoint[]>([]);

  return (
    <>
      <TalkPageHead content={content} />
      <ContentPageTemplate>
        <div className={styles.layout}>
          <TalkTop content={content} />
          <ChaptersView chapters={chapters} />
          <content.Page setChapters={setChapters} />
        </div>
      </ContentPageTemplate>
    </>
  );
};

export default TalkPage;

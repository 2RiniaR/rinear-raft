import React, { useState } from "react";
import styles from "./TalkPage.module.scss";
import TalkPageHead from "./TalkPageHead";
import { TalkTop } from "./Top";
import { ChapterPoint, TalkContent } from "lib/contents";
import ContentPageTemplate from "components/parts/pages/ContentPageTemplate";
import ChaptersView from "components/parts/ChaptersView/ChaptersView";
import BackButton from "components/templates/layout/BackButton";

type Props = {
  content: TalkContent;
};

const TalkPage = ({ content }: Props): JSX.Element => {
  const [chapters, setChapters] = useState<ChapterPoint[]>([]);

  return (
    <>
      <TalkPageHead content={content} />
      <ContentPageTemplate>
        <BackButton href={"/talks"} />
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

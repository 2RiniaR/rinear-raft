import React from "react";
import styles from "./TalkTop.module.scss";
import TalkTitle from "./TalkTitle";
import TalkAbstract from "./TalkAbstract";
import { TalkContent } from "lib/contents";

type Props = {
  content: TalkContent;
};

const TalkTop = ({ content }: Props): JSX.Element => (
  <div className={styles.layout}>
    <TalkTitle content={content} />
    <TalkAbstract content={content} />
  </div>
);

export default TalkTop;

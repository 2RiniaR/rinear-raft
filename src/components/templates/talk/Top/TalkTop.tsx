import React from "react";
import styles from "./TalkTop.module.scss";
import Title from "./Title";
import Abstract from "./Abstract";
import { TalkContent } from "lib/contents";

type Props = {
  content: TalkContent;
};

const TalkTop = ({ content }: Props): JSX.Element => (
  <div className={styles.layout}>
    <Title content={content} />
    <Abstract content={content} />
  </div>
);

export default TalkTop;

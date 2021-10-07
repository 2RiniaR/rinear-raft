import React from "react";
import styles from "./Abstract.module.scss";
import { TalkContent } from "lib/contents";
import FixedImage from "components/functions/image/FixedImage";

type Props = {
  content: TalkContent;
};

const Abstract = ({ content }: Props): JSX.Element => (
  <div className={styles.layout}>
    <p className={styles.description}>{content.description}</p>
    <FixedImage src={content.thumbnail} alt="サムネイル" className={styles.thumbnail} />
  </div>
);

export default Abstract;
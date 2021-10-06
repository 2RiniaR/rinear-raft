import React from "react";
import styles from "./TalkAbstract.module.scss";
import { TalkContent } from "lib/contents";
import FixedImage from "components/functions/image/FixedImage";

type Props = {
  content: TalkContent;
};

const TalkAbstract = ({ content }: Props): JSX.Element => (
  <div className={styles.layout}>
    <p className={styles.description}>{content.description}</p>
    <div className={styles.thumbnail}>
      <FixedImage src={content.thumbnailPath} alt="サムネイル" />
    </div>
  </div>
);

export default TalkAbstract;

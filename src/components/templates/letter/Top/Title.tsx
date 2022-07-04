import React from "react";
import dayjs from "dayjs";
import styles from "./Title.module.scss";
import StaticImage from "components/functions/StaticImage";
import { LetterContent } from "lib/contents";
import { formatExceededTime } from "lib/helper";
import lettersPic from "public/img/letters.png";

type Props = {
  content: LetterContent;
};

const Title = ({ content }: Props): JSX.Element => (
  <header className={styles.layout}>
    <StaticImage className={styles.logo} src={lettersPic} alt="トーク" />
    <div className={styles.display}>
      <h1 className={styles.title}>{content.title}</h1>
      <p className={styles.index}>#{content.index}</p>
      <p className={styles.genre}>LETTER</p>
      <p className={styles.updatedAt} suppressHydrationWarning={true}>
        {"最終更新：" + formatExceededTime(dayjs(), content.updatedAt)}
      </p>
    </div>
  </header>
);

export default Title;

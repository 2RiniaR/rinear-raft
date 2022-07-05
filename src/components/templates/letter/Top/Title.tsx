import React from "react";
import dayjs from "dayjs";
import styles from "./Title.module.scss";
import { formatExceededTime } from "utils/datetime";
import { StaticImage } from "components/functions";
import { LetterContent } from "types/content";
import letterIconPic from "public/general/letter-icon.png";

type Props = {
  content: LetterContent;
};

export const Title = ({ content }: Props): JSX.Element => (
  <header className={styles.layout}>
    <StaticImage className={styles.logo} src={letterIconPic} alt="トーク" />
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

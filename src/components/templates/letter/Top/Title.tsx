import React from "react";
import styles from "./Title.module.scss";
import { formatExceededTime } from "utils/datetime";
import { StaticImage } from "components/functions";
import { Letter } from "models/content";
import letterIconPic from "public/general/letter-icon.png";

type Props = {
  letter: Letter;
};

export const Title = ({ letter }: Props): JSX.Element => (
  <header className={styles.layout}>
    <StaticImage className={styles.logo} src={letterIconPic} alt="トーク" />
    <div className={styles.display}>
      <h1 className={styles.title}>{letter.title}</h1>
      <p className={styles.index}>#{letter.index}</p>
      <p className={styles.genre}>LETTER</p>
      <p className={styles.updatedAt} suppressHydrationWarning={true}>
        {"最終更新：" + formatExceededTime(new Date(), letter.updatedAt)}
      </p>
    </div>
  </header>
);

import React from "react";
import styles from "./Title.module.scss";
import { formatDisplayDate, formatExceededTime } from "utils/datetime";
import materialIconPic from "public/general/material-icon.png";
import { StaticImage } from "components/functions";
import { Material } from "models/content";

type Props = {
  content: Material;
};

export const Title = ({ content }: Props): JSX.Element => (
  <header className={styles.layout}>
    <StaticImage className={styles.logo} src={materialIconPic} alt="プロジェクト" />
    <div className={styles.display}>
      <h1 className={styles.title}>{content.title}</h1>
      <p className={styles.releasedAt}>{content.releasedAt ? formatDisplayDate(content.releasedAt) : "---"}</p>
      <p className={styles.genre}>MATERIAL</p>
      <p className={styles.updatedAt} suppressHydrationWarning={true}>
        {"最終更新：" + formatExceededTime(new Date(), content.updatedAt)}
      </p>
    </div>
  </header>
);

import React from "react";
import styles from "./Title.module.scss";
import { formatDisplayDate, formatExceededTime } from "utils/datetime";
import materialIconPic from "public/general/material-icon.png";
import { StaticImage } from "components/functions";
import { Material } from "models/content";

type Props = {
  material: Material;
};

export const Title = ({ material }: Props): JSX.Element => (
  <header className={styles.layout}>
    <StaticImage className={styles.logo} src={materialIconPic} alt="プロジェクト" />
    <div className={styles.display}>
      <h1 className={styles.title}>{material.title}</h1>
      <p className={styles.releasedAt}>{material.releasedAt ? formatDisplayDate(material.releasedAt) : "---"}</p>
      <p className={styles.genre}>MATERIAL</p>
      <p className={styles.updatedAt} suppressHydrationWarning={true}>
        {"最終更新：" + formatExceededTime(new Date(), material.updatedAt)}
      </p>
    </div>
  </header>
);

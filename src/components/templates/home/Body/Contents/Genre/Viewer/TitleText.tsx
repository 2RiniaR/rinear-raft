import React from "react";
import styles from "./TitleText.module.scss";
import { TitleText, TitleTextParams } from "./Item";
import { getComponentTemplate } from "src/lib/component";

const getTitleText = (color: string): TitleText =>
  getComponentTemplate(({ text }: TitleTextParams) => (
    <h2 className={styles.title} style={{ color: color }}>
      {text}
    </h2>
  ));

export default getTitleText;

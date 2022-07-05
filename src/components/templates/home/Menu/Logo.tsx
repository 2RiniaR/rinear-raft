import React from "react";
import styles from "./Logo.module.scss";
import { assignClasses } from "utils/dom";
import { PreloadStaticImage } from "components/functions/loading";
import logoIconPic from "public/general/logo-icon.webp";
import logoLettersPic from "public/general/logo-letters.webp";

type Props = {
  active: boolean;
};

export const Logo = ({ active }: Props): JSX.Element => (
  <div className={assignClasses(styles.container, !active ? styles.hidden : "")}>
    <PreloadStaticImage className={styles.logo1} src={logoIconPic} alt="" layout="responsive" />
    <PreloadStaticImage className={styles.logo2} src={logoLettersPic} alt="" layout="responsive" />
  </div>
);

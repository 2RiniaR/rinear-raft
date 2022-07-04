import React from "react";
import styles from "./Logo.module.scss";
import { assignClasses } from "lib/helper";
import { PreloadStaticImage } from "components/functions/loading";
import logo1 from "public/general/logo-icon.webp";
import logo2 from "public/general/logo-letters.webp";

type Props = {
  active: boolean;
};

const Logo = ({ active }: Props): JSX.Element => (
  <div className={assignClasses(styles.container, !active ? styles.hidden : "")}>
    <PreloadStaticImage className={styles.logo1} src={logo1} alt="" layout="responsive" />
    <PreloadStaticImage className={styles.logo2} src={logo2} alt="" layout="responsive" />
  </div>
);

export default Logo;

import React from "react";
import Image from "next/image";
import styles from "./Background.module.scss";

const Background = (): JSX.Element => (
  <div className={styles.imageContainer}>
    <Image src="/test.png" layout="fill" />
    <div className={styles.fade} />
  </div>
);

export default Background;

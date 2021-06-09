import React from "react";
import Image from "next/image";
import styles from "./TopImage.module.scss";

const TopImage = (): JSX.Element => (
  <div className={styles.imageContainer}>
    <Image src="./test.jpg" layout="fill" />
  </div>
);

export default TopImage;

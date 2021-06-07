import Image from "next/image";
import React from "react";
import styles from "./Lamp.module.scss";

const Lamp = (): JSX.Element => (
  <div className={styles.lamp}>
    <Image src="/lamp3.png" layout="fill" />
  </div>
);

export default Lamp;

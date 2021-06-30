import Image from "next/image";
import React from "react";
import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

const Logo = getComponentTemplate(() => (
  <div className={styles.container}>
    <Image src="/logo.jpg" layout="fill" objectFit="contain" className={styles.image} />
  </div>
));

export default Logo;

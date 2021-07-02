import Image from "next/image";
import React from "react";
import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

const Logo = getComponentTemplate(() => (
  <div className={styles.fixer}>
    <Image src="/logo4.png" layout="fill" objectFit="cover" objectPosition="left top" className={styles.image} />
  </div>
));

export default Logo;

import Image from "next/image";
import React from "react";
import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

const Spacer = getComponentTemplate(() => (
  <div className={styles.container}>
    <div className={styles.inner}>
      <Image src="/spacer2.svg" layout="fill" objectFit="contain" />
    </div>
  </div>
));

export default Spacer;

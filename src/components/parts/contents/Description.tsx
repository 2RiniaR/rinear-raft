/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { ReactNode } from "react";
import styles from "./Description.module.scss";

type Props = {
  children?: ReactNode;
  name: string;
};

const Description = ({ children, name }: Props): JSX.Element => (
  <div>
    <dt className={styles.name}>{name}</dt>
    <dd className={styles.description}>{children}</dd>
  </div>
);

export default Description;

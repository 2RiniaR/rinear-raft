/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { ReactNode } from "react";
import styles from "./Paragraph.module.scss";

type Props = {
  children?: ReactNode;
};

const Paragraph = ({ children }: Props): JSX.Element => <p className={styles.paragraph}>{children}</p>;

export default Paragraph;

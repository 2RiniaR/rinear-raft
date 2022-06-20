/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { RefObject } from "react";
import Heading from "./Heading";
import styles from "./Chapter.module.scss";

type Props = {
  title: string;
  jumpRef: RefObject<HTMLElement>;
  children?: React.ReactNode;
};

const Chapter = ({ title, jumpRef, children }: Props): JSX.Element => (
  <section ref={jumpRef} className={styles.chapter}>
    <Heading level="top">{title}</Heading>
    {children}
  </section>
);

export default Chapter;

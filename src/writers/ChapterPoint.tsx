import React, { RefObject } from "react";
import { Heading } from "./Heading";
import styles from "./ChapterPoint.module.scss";

type Props = {
  title: string;
  jumpRef: RefObject<HTMLElement>;
  children?: React.ReactNode;
};

export const ChapterPoint = ({ title, jumpRef, children }: Props): JSX.Element => (
  <section ref={jumpRef} className={styles.chapter}>
    <Heading level="top">{title}</Heading>
    {children}
  </section>
);

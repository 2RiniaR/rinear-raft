import React, { ReactNode } from "react";
import styles from "./UnorderedList.module.scss";

type Props = {
  children?: ReactNode;
};

export const UnorderedList = ({ children }: Props): JSX.Element => <ul className={styles.list}>{children}</ul>;

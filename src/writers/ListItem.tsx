import React, { ReactNode } from "react";
import styles from "./ListItem.module.scss";

type Props = {
  children?: ReactNode;
};

export const ListItem = ({ children }: Props): JSX.Element => <li className={styles.item}>{children}</li>;

import React, { ReactNode } from "react";
import styles from "./DescriptionList.module.scss";

type Props = {
  children?: ReactNode;
};

export const DescriptionList = ({ children }: Props): JSX.Element => <dl className={styles.list}>{children}</dl>;

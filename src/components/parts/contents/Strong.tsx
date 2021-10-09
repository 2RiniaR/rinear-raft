import React, { ReactNode } from "react";
import styles from "./Strong.module.scss";

type Props = {
  children?: ReactNode;
};

const Strong = ({ children }: Props): JSX.Element => <strong className={styles.strong}>{children}</strong>;

export default Strong;

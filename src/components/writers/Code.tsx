import React, { ReactNode } from "react";
import styles from "./Code.module.scss";
import { assignClasses } from "lib/helper";

type Props = {
  children?: ReactNode;
  style?: "inline" | "block";
};

export const Code = ({ children, style = "inline" }: Props): JSX.Element => {
  if (style === "block")
    return (
      <pre className={styles.block}>
        <code className={styles.code}>{children}</code>
      </pre>
    );
  return <code className={assignClasses(styles.code, styles.inline)}>{children}</code>;
};

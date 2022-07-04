import React, { ReactNode } from "react";
import styles from "./Quotation.module.scss";
import { assignClasses } from "lib/helper";

type Props = {
  children?: ReactNode;
  style?: "inline" | "block";
};

export const Quotation = ({ children, style = "inline" }: Props): JSX.Element => {
  if (style === "block")
    return <blockquote className={assignClasses(styles.quote, styles.block)}>{children}</blockquote>;
  return <q className={assignClasses(styles.quote, styles.inline)}>{children}</q>;
};

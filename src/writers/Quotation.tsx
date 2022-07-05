import React, { ReactNode } from "react";
import { assignClasses } from "../utils/dom";
import styles from "./Quotation.module.scss";

type Props = {
  children?: ReactNode;
  style?: "inline" | "block";
};

export const Quotation = ({ children, style = "inline" }: Props): JSX.Element => {
  if (style === "block")
    return <blockquote className={assignClasses(styles.quote, styles.block)}>{children}</blockquote>;
  return <q className={assignClasses(styles.quote, styles.inline)}>{children}</q>;
};

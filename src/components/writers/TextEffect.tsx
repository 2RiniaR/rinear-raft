import React, { ReactNode } from "react";
import styles from "./TextEffect.module.scss";

type Props = {
  children?: ReactNode;
  underline?: boolean;
  italic?: boolean;
  bold?: boolean;
  strikethrough?: boolean;
};

export const TextEffect = ({
  children,
  underline = false,
  italic = false,
  bold = false,
  strikethrough = false
}: Props): JSX.Element => {
  let element: JSX.Element = <>{children}</>;
  if (underline) element = <u className={styles.underline}>{element}</u>;
  if (italic) element = <i className={styles.italic}>{element}</i>;
  if (bold) element = <b className={styles.bold}>{element}</b>;
  if (strikethrough) element = <del className={styles.strikethrough}>{element}</del>;
  return element;
};

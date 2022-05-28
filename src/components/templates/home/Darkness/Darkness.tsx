import React from "react";
import styles from "./Darkness.module.scss";
import { assignClasses } from "lib/helper";

type Props = {
  up: boolean;
  children: React.ReactNode;
};

const Darkness = ({ up, children }: Props): JSX.Element => (
  <div className={assignClasses(styles.container, up ? styles.up : "")}>{children}</div>
);

export default Darkness;

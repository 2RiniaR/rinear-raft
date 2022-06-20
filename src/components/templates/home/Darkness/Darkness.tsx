import React from "react";
import styles from "./Darkness.module.scss";
import { assignClasses } from "lib/helper";

type Props = {
  enabled: boolean;
};

const Darkness = ({ enabled }: Props): JSX.Element => (
  <>
    <div className={assignClasses(styles.container, enabled ? styles.enabled : "")} />
  </>
);

export default Darkness;

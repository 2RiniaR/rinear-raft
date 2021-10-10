import React from "react";
import styles from "./LoadingEffect.module.scss";

type Props = {
  loading: boolean;
};

const LoadingEffect = ({ loading }: Props): JSX.Element => (
  <div className={styles.screen} style={{ display: loading ? "block" : "none" }}>
    Loading
  </div>
);

export default LoadingEffect;

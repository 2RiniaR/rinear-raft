import React from "react";
import styles from "./LoadingEffect.module.scss";
import { assignClasses } from "lib/helper";

type Props = {
  loading: boolean;
};

const LoadingEffect = ({ loading }: Props): JSX.Element => (
  <div className={assignClasses(styles.screen, loading ? styles.loading : styles.completed)}>Loading</div>
);

export default LoadingEffect;

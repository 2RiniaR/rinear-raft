import React from "react";
import styles from "./LoadingEffect.module.scss";
import { SplashAnimation } from "./SplashAnimation";
import { ProgressText } from "./ProgressText";
import { assignClasses } from "lib/helper";

type Props = {
  loading: boolean;
  progress: number;
};

export const LoadingEffect = ({ loading, progress }: Props): JSX.Element => (
  <div className={assignClasses(styles.screen, loading ? styles.loading : styles.completed)}>
    <SplashAnimation />
    <ProgressText percent={progress} />
  </div>
);

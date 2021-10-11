import React from "react";
import styles from "./LoadingEffect.module.scss";
import SplashAnimation from "./SplashAnimation";
import ProgressText from "./ProgressText";
import ProgressFill from "./ProgressFill";
import { assignClasses } from "lib/helper";

type Props = {
  loading: boolean;
  progress: number;
};

const LoadingEffect = ({ loading, progress }: Props): JSX.Element => (
  <div className={assignClasses(styles.screen, loading ? styles.loading : styles.completed)}>
    <ProgressFill percent={progress} />
    <SplashAnimation />
    <ProgressText percent={progress} />
  </div>
);

export default LoadingEffect;

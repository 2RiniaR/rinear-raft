import React, { useEffect } from "react";
import styles from "./ProgressText.module.scss";
import useEaseNumber from "components/functions/number/EaseNumber";

type Props = {
  percent: number;
};

const percentFormatter = new Intl.NumberFormat("ja", { style: "percent" });
const ProgressText = ({ percent }: Props): JSX.Element => {
  const [display, setDisplay] = useEaseNumber(percent);
  useEffect(() => setDisplay(percent), [percent]);

  return <span className={styles.percent}>{percentFormatter.format(display)}</span>;
};

export default ProgressText;

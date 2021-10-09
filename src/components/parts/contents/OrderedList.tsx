import React, { ReactNode } from "react";
import styles from "./OrderedList.module.scss";

type Props = {
  children?: ReactNode;
};

const OrderedList = ({ children }: Props): JSX.Element => <ol className={styles.list}>{children}</ol>;

export default OrderedList;

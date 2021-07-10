import React from "react";
import styles from "./TitleText.module.scss";
import { ScrollViewerTitle } from "src/components/accessories/IncrementalSeeker";

const TitleText: ScrollViewerTitle = ({ title }) => <h2 className={styles.title}>{title}</h2>;

export default TitleText;

import React from "react";
import styles from "./Article.module.scss";

const Article: React.FC = ({ children }): JSX.Element => <div className={styles.content}>{children}</div>;

export default Article;

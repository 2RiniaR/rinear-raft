import React from "react";
import styles from "./Suggestion.module.scss";
import SuggestionItem from "./SuggestionItem";
import { ContentHead } from "src/contents/lib";

export type SuggestionParams = {
  suggestions: ContentHead[];
};

const Suggestion = ({ suggestions }: SuggestionParams): JSX.Element => (
  <div className={styles.container}>
    <button type="button" className={styles.button}>
      <div className={styles.image}>{"<"}</div>
    </button>
    <div className={styles.content}>
      {suggestions.map((suggestion) => (
        <div key={suggestion.getRoute()} className={styles.item}>
          <SuggestionItem suggestion={suggestion} />
        </div>
      ))}
    </div>
    <button type="button" className={styles.button}>
      <div className={styles.image}>{">"}</div>
    </button>
  </div>
);

export default Suggestion;

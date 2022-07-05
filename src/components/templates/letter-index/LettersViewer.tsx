import React from "react";
import Link from "next/link";
import styles from "./LettersViewer.module.scss";
import { LetterHeading } from "./LetterHeading";
import { LetterContentHead } from "types/content";
import { getRoute } from "repositories/content";

type Props = {
  heads: LetterContentHead[];
};

export const LettersViewer = ({ heads }: Props): JSX.Element => (
  <main className={styles.container}>
    {heads.map((head) => (
      <Link href={getRoute(head)} key={head.id}>
        <a className={styles.element}>
          <LetterHeading head={head} />
        </a>
      </Link>
    ))}
  </main>
);

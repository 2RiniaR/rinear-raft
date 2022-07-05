import React from "react";
import Link from "next/link";
import styles from "./LettersViewer.module.scss";
import { LetterHeading } from "./LetterHeading";
import { Letter, WithoutPage } from "models/content";
import { pathOf } from "routes";

type Props = {
  heads: WithoutPage<Letter>[];
};

export const LettersViewer = ({ heads }: Props): JSX.Element => (
  <main className={styles.container}>
    {heads.map((head) => (
      <Link href={pathOf(head)} key={head.id}>
        <a className={styles.element}>
          <LetterHeading head={head} />
        </a>
      </Link>
    ))}
  </main>
);

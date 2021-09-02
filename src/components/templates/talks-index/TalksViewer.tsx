import React from "react";
import Link from "next/link";
import styles from "./TalksViewer.module.scss";
import TalkHeading from "./TalkHeading";
import { getContentPath, TalkContentHead } from "lib/contents";

type Props = {
  heads: TalkContentHead[];
};

const TalksViewer = ({ heads }: Props): JSX.Element => (
  <div className={styles.container}>
    {heads.map((head) => (
      <div className={styles.element} key={head.id}>
        <Link href={getContentPath(head)}>
          <a className={styles.link}>
            <TalkHeading head={head} />
          </a>
        </Link>
      </div>
    ))}
  </div>
);

export default TalksViewer;

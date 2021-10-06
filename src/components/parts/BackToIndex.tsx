import React from "react";
import Link from "next/link";
import styles from "./BackToIndex.module.scss";
import LeftArrowPic from "public/img/LeftArrow.png";
import StaticImage from "components/functions/image/StaticImage";

type Props = {
  href: string;
  text: string;
};

const BackToIndex = ({ href, text }: Props): JSX.Element => (
  <div className={styles.container}>
    <Link href={href}>
      <a className={styles.link}>
        <StaticImage className={styles.icon} src={LeftArrowPic} />
        <h2 className={styles.text}>{text}</h2>
      </a>
    </Link>
  </div>
);

export default BackToIndex;

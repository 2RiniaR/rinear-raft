import React from "react";
import Link from "next/link";
import styles from "./BackToIndex.module.scss";
import FullImage from "components/functions/image/FullImage";
import LeftArrowPic from "public/img/LeftArrow.png";

type Props = {
  href: string;
  text: string;
};

const BackToIndex = ({ href, text }: Props): JSX.Element => (
  <div className={styles.container}>
    <Link href={href}>
      <a className={styles.link}>
        <FullImage className={styles.icon} src={LeftArrowPic} />
        <h2 className={styles.text}>{text}</h2>
      </a>
    </Link>
  </div>
);

export default BackToIndex;

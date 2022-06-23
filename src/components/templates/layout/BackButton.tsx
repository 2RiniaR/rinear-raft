/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import Link from "next/link";
import styles from "./BackButton.module.scss";
import StaticImage from "components/functions/image/StaticImage";
import leftArrowPic from "public/img/LeftArrow.png";

type Props = {
  href: string;
};

const BackButton = ({ href }: Props): JSX.Element => (
  <div className={styles.screen}>
    <Link href={href} scroll={false}>
      <a className={styles.link}>
        <StaticImage className={styles.icon} src={leftArrowPic} alt="戻る" layout="responsive" />
      </a>
    </Link>
  </div>
);

export default BackButton;

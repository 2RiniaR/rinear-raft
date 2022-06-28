/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { useContext, useState } from "react";
import Link from "next/link";
import { PickupsContext } from "../../HomePage";
import styles from "./Rift.module.scss";
import { assignClasses } from "lib/helper";
import LazyStaticImage from "components/functions/lazy/LazyStaticImage";
import back from "public/img/LogoBack.webp";
import useContentSwitch from "lib/fooks/content-switch";

type Props = {
  active: boolean;
};

const Rift = ({ active }: Props): JSX.Element => {
  const [hover, setHover] = useState(false);
  const pickups = useContext(PickupsContext);
  const [content, contentIndex, switching] = useContentSwitch(pickups, hover, {
    switchingDuration: 500,
    displayDuration: 5000
  });

  return (
    <div className={assignClasses(styles.container, !active ? styles.hidden : styles.shown, hover ? styles.hover : "")}>
      <div className={styles.back}>
        <LazyStaticImage className={styles.image} src={back} alt="" layout="responsive" />
      </div>
      <div className={styles.mask}>
        <LazyStaticImage
          className={assignClasses(styles.masked, switching ? styles.switching : "")}
          src={content.thumbnail}
          layout="responsive"
        />
      </div>
      <div className={styles.leftSide}>
        <div className={styles.indexIndicator}>
          {pickups.map((pickup, index) => (
            <div
              className={assignClasses(styles.element, contentIndex == index ? styles.current : "")}
              key={pickup.title}
            ></div>
          ))}
        </div>
      </div>
      <div className={styles.rightSide}>
        <h1 className={assignClasses(styles.title, switching ? styles.switching : "")}>{content.title}</h1>
      </div>
      <Link href={content.href}>
        <a
          className={styles.link}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onFocus={() => setHover(true)}
          onBlur={() => setHover(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1624"
            height="838"
            viewBox="0 0 1624 838"
            className={styles.shape}
          >
            <path
              d="M812,0l812,838H0Z"
              transform="translate(1624 838) rotate(180)"
              fill="#ffffff"
              className={styles.fill}
            />
          </svg>
        </a>
      </Link>
    </div>
  );
};

export default Rift;

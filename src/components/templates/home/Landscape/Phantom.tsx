/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { useState } from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import useInterval from "../../../../lib/fooks/interval";
import styles from "./Phantom.module.scss";
import back from "public/img/Node.webp";
import LazyStaticImage from "components/functions/lazy/LazyStaticImage";

type Props = {
  title: string;
  subtitle: string;
  icon: StaticImageData;
  href: string;
};

type Position = {
  x: number;
  y: number;
};

const Phantom = ({ title, subtitle, icon, href }: Props): JSX.Element => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useInterval(() => {
    setPosition({ x: Math.random() * 20, y: Math.random() * 20 });
  }, 2000);

  return (
    <Link href={href}>
      <a className={styles.container}>
        <LazyStaticImage
          className={styles.back}
          src={back}
          alt=""
          layout="responsive"
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        />
        <div className={styles.content}>
          <LazyStaticImage className={styles.icon} src={icon} alt="" layout="responsive" />
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
        </div>
      </a>
    </Link>
  );
};

export default Phantom;

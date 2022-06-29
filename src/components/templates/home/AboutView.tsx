/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./AboutView.module.scss";
import { PreloadStaticImage } from "components/functions/loading";
import { assignClasses } from "lib/helper";
import noteImage from "public/img/note_clipped.webp";
import { About } from "lib/about";

type Props = {
  about: About;
};

const AboutView = ({ about }: Props): JSX.Element => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className={styles.container}>
      <PreloadStaticImage src={noteImage} className={styles.background} layout="responsive" />
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span ref={ref} className={assignClasses(styles.text, inView ? styles.active : styles.inactive)}>
            <span className={styles.first}>
              この<span className={styles.strong}>筏</span>は私を、
            </span>
            <span className={styles.last}>どこへ連れてゆくんだろう。</span>
          </span>
        </h1>
        <section className={styles.body}>
          <about.Document />
        </section>
      </div>
    </div>
  );
};

export default AboutView;

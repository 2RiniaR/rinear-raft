/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./About.module.scss";
import { assignClasses } from "lib/helper";
import LazyStaticImage from "components/functions/lazy/LazyStaticImage";
import noteImage from "public/img/note_clipped.webp";

const About = (): JSX.Element => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className={styles.container}>
      <LazyStaticImage src={noteImage} className={styles.background} />
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
          <p>
            『RineaR（りにあ）』とは、クリエイター『Rinia（りにあ）』による個人活動・個人制作物の総称。明確な目標を持ったプロジェクトや、複数メンバーで活動するサークルではない。
          </p>
          <p>
            そのときに、作りたいと思ったものを作って楽しむ。現在は主にゲームやサービス等を制作しているが、活動範囲は限定していない。制作の途中経過やアイデアなどは当サイトのLETTERSへ投稿し、制作物やプロジェクトはSCENARIOSへ投稿する。
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;

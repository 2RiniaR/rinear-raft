import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import TalkHeading from "./TalkHeading";
import { getComponentTemplate } from "src/lib/component";
import AbsoluteParallax from "src/components/accessories/AbsoluteParallax";
import { TalkContentHead } from "src/lib/contents";
import PhantomNode from "src/components/parts/PhantomNode";
import Footer from "src/components/accessories/Footer";
import { getRoute } from "src/data/contents";

export type TalkIndexParams = {
  heads: TalkContentHead[];
};

const TalkIndex = getComponentTemplate(({ heads }: TalkIndexParams) => {
  const [viewHeight, setViewHeight] = useState(0);

  useEffect(() => {
    setViewHeight(window.innerHeight);
  }, []);

  return (
    <>
      <Head>
        <title>Talks - RineaR</title>
      </Head>

      <AbsoluteParallax
        className={styles.background}
        topWindowMargin={false}
        bottomWindowMargin={false}
        displayHeight={viewHeight}
      >
        <div className={styles.image}>
          <img src="/img/top.jpg" alt="Background" />
          <div className={styles.effect} />
        </div>
      </AbsoluteParallax>

      <div className={styles.front}>
        <PhantomNode className={styles.heading} active={false} layout="inner">
          <div className={styles.inner}>
            <h1 className={styles.main}>PROJECTS</h1>
            <h2 className={styles.sub}>プロジェクト</h2>
          </div>
        </PhantomNode>
        <div className={styles.body}>
          {heads.map((head) => (
            <div className={styles.element} key={head.id}>
              <Link href={getRoute(head)}>
                <a className={styles.link}>
                  <TalkHeading className={styles.head} head={head} />
                </a>
              </Link>
            </div>
          ))}
        </div>
        <Footer className={styles.footer} />
      </div>
    </>
  );
});

export default TalkIndex;

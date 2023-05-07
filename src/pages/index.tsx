import React from "react";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";
import { mc, Ruby, useCheckpoint, useLoading } from "functions";
import { Footer, LoadingWindow, Meta, SideMenu } from "parts";
import landscapePic from "public/general/home-background.png";
import holeEffectPic from "public/home/holes.png";
import windEffectPic from "public/home/wind.png";
import shadow1Pic from "public/home/shadow1.webp";
import shadow2Pic from "public/home/shadow2.webp";
import shadow3Pic from "public/home/shadow3.webp";
import shadow4Pic from "public/home/shadow4.webp";
import letterIconPic from "public/general/letter-icon.png";
import materialIconPic from "public/general/material-icon.png";
import logoPic from "public/general/logo-full.webp";
import storyL2Pic from "public/home/letter1.png";
import storyL3Pic from "public/home/letter2.png";
import storyM2Pic from "public/home/material1.webp";
import storyM3Pic from "public/home/material2.webp";

const Page = (): JSX.Element => {
  const [onLoadingComplete, loadingProgress, hasLoadingCompleted] = useLoading(16);
  const [conceptCheckpointRef, hasPassedConcept] = useCheckpoint();
  const [messageCheckpointRef, hasPassedMessage] = useCheckpoint();
  const [lettersCheckpointRef, hasPassedLetters] = useCheckpoint<HTMLAnchorElement>();
  const [materialsCheckpointRef, hasPassedMaterials] = useCheckpoint<HTMLAnchorElement>();

  const loadRequired: Pick<ImageProps, "onLoadingComplete" | "loading"> = {
    onLoadingComplete: onLoadingComplete,
    loading: "eager"
  };

  return (
    <div className={styles.page}>
      <Meta
        pageDescription="「Rinia」と名付けた一個人と、その観察により見つけた解釈「RineaR」。ただ抽象が漂うこの情景は、どこに行きつくんだろう。"
        pagePath="/"
        pageImgPath="/general/main.png"
        pageType="website"
      />

      <LoadingWindow loading={!hasLoadingCompleted} progress={loadingProgress} />
      <SideMenu />

      <section
        className={mc(styles.concept, hasLoadingCompleted && hasPassedConcept ? "" : styles.invisible)}
        ref={conceptCheckpointRef}
      >
        <Image className={mc(styles.background)} src={landscapePic} alt="" {...loadRequired} />
        <Image className={mc(styles.phantom)} src={holeEffectPic} alt="" {...loadRequired} />
        <Image className={mc(styles.wind, styles.l1)} src={windEffectPic} alt="" {...loadRequired} />
        <Image className={mc(styles.wind, styles.l2)} src={windEffectPic} alt="" {...loadRequired} />
        <div className={styles.smog} />
        <div className={mc(styles.darkness, hasLoadingCompleted && hasPassedConcept ? "" : styles.invisible)} />
        <Image className={mc(styles.shadow, styles.l1)} src={shadow1Pic} width={384} alt="" {...loadRequired} />
        <Image className={mc(styles.shadow, styles.l2)} src={shadow2Pic} width={384} alt="" {...loadRequired} />
        <Image className={mc(styles.shadow, styles.l3)} src={shadow3Pic} width={384} alt="" {...loadRequired} />
        <Image className={mc(styles.shadow, styles.l4)} src={shadow4Pic} width={384} alt="" {...loadRequired} />
        <div className={mc(styles.light, hasLoadingCompleted && hasPassedConcept ? "" : styles.invisible)} />
        <div className={mc(styles.logo, hasLoadingCompleted && hasPassedConcept ? "" : styles.invisible)}>
          <div className={styles.cloud} />
          <Image className={styles.main} src={logoPic} alt="" width={400} {...loadRequired} />
        </div>
        <div className={mc(styles.border, hasLoadingCompleted && hasPassedConcept ? "" : styles.invisible)} />
        <div className={mc(styles.catchPhrase, hasLoadingCompleted && hasPassedConcept ? "" : styles.invisible)}>
          <span className={mc(styles.l1)}>
            <strong>遠</strong>くへ行こう。
          </span>
          <span className={mc(styles.l2)}>
            <strong>筏</strong>を放さないように。
          </span>
        </div>
      </section>

      <section
        className={mc(styles.message, hasLoadingCompleted && hasPassedMessage ? "" : styles.invisible)}
        ref={messageCheckpointRef}
      >
        <Image className={styles.background} src={storyL3Pic} alt="" width={750} {...loadRequired} />
        <p>
          <Ruby writing="「Rinia」" reading="リニア" />
          と名付けた一個人と、
        </p>
        <p>その観察により見つけた解釈</p>
        <p>
          「<Ruby writing="RineaR" reading="リニアル" />
          」。
        </p>
        <br />
        <p>ただ抽象が漂うこの情景は、</p>
        <p>どこに行きつくんだろう。</p>
      </section>

      <section className={styles.contents}>
        <Link
          className={mc(styles.item, styles.letters, hasLoadingCompleted && hasPassedLetters ? "" : styles.invisible)}
          ref={lettersCheckpointRef}
          href="/letters"
        >
          <Image className={styles.icon} src={letterIconPic} alt="" width={75} {...loadRequired} />
          <h1>LETTERS</h1>
          <h2>解釈と発想のノート</h2>
          <div className={styles.description}>
            <p>
              <Ruby writing="RineaR" reading="リニアル" />
              の世界や、作品の発想・制作状況について、思いついた内容をメモのように記録しています。
            </p>
            <p>
              <Ruby writing="RineaR" reading="リニアル" />
              の抽象を捉え、新たな
              <Ruby writing="Material" reading="マテリアル" />
              を生み出していきます。
            </p>
          </div>
          <div className={styles.images}>
            <Image className={styles.image} src={storyL2Pic} alt="" width={400} {...loadRequired} />
            <Image className={styles.image} src={storyL3Pic} alt="" width={400} {...loadRequired} />
          </div>
        </Link>
        <Link
          className={mc(
            styles.item,
            styles.materials,
            hasLoadingCompleted && hasPassedMaterials ? "" : styles.invisible
          )}
          ref={materialsCheckpointRef}
          href="/materials"
        >
          <Image className={styles.icon} src={materialIconPic} alt="" width={75} {...loadRequired} />
          <h1>MATERIALS</h1>
          <h2>作品と記録のギャラリー</h2>
          <div className={styles.description}>
            <p>
              <Ruby writing="RineaR" reading="リニアル" />
              に登場した作品やその背景について、過去の内容を資料のように記録しています。
            </p>
            <p>
              <Ruby writing="RineaR" reading="リニアル" />
              に解釈を与え、次の
              <Ruby writing="Letter" reading="レター" />
              へと繋がっていきます。
            </p>
          </div>
          <div className={styles.images}>
            <Image className={styles.image} src={storyM2Pic} alt="" width={400} {...loadRequired} />
            <Image className={styles.image} src={storyM3Pic} alt="" width={400} {...loadRequired} />
          </div>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Page;

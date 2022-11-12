import React from "react";
import Image, { ImageProps } from "next/image";
import styles from "./index.module.scss";
import { InternalLink, mc, Ruby, useCheckpoint, useLoading } from "functions";
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
import storyL2Pic from "public/contents/letters/story/prototype.png";
import storyL3Pic from "public/contents/letters/story/present.png";
import storyM2Pic from "public/contents/materials/busters-mission/title.webp";
import storyM3Pic from "public/contents/materials/popcorn-chef/title.webp";

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
        pageDescription="『RineaR（りにあ）』は、クリエイター『Rinia（りにあ）』による個人活動の総称です。見える抽象を辿るために、漂うように制作をしています。"
        pagePath="/"
        pageImgPath="/img/main.webp"
        pageType="website"
      />

      <SideMenu />
      <LoadingWindow loading={!hasLoadingCompleted} progress={loadingProgress} />

      <section
        className={mc(styles.concept, hasLoadingCompleted && hasPassedConcept ? styles.invisible : styles.invisible)}
        ref={conceptCheckpointRef}
      >
        <Image className={styles.background} src={landscapePic} alt="" {...loadRequired} />
        <Image className={styles.phantom} src={holeEffectPic} alt="" {...loadRequired} />
        <Image className={mc(styles.wind, styles.l1)} src={windEffectPic} alt="" {...loadRequired} />
        <Image className={mc(styles.wind, styles.l2)} src={windEffectPic} alt="" {...loadRequired} />
        <div className={styles.smog} />
        <div className={styles.darkness} />
        <div className={styles.light} />
        <Image className={mc(styles.shadow, styles.l1)} src={shadow1Pic} width={384} alt="" {...loadRequired} />
        <Image className={mc(styles.shadow, styles.l2)} src={shadow2Pic} width={384} alt="" {...loadRequired} />
        <Image className={mc(styles.shadow, styles.l3)} src={shadow3Pic} width={384} alt="" {...loadRequired} />
        <Image className={mc(styles.shadow, styles.l4)} src={shadow4Pic} width={384} alt="" {...loadRequired} />
        <div className={styles.logo}>
          <div className={styles.cloud} />
          <Image className={styles.main} src={logoPic} alt="" width={400} {...loadRequired} />
        </div>
        <div className={styles.underSmog} />
        <div className={styles.catchPhrase}>
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
          <Ruby writing="Rinia" reading="りにあ" />
          と名付けた一個人と、
        </p>
        <p>その観察により見つけた解釈</p>
        <p>
          「<Ruby writing="RineaR" reading="りにある" />
          」。
        </p>
        <br />
        <p>ただ抽象が漂うこの情景は、</p>
        <p>どこに行きつくんだろう。</p>
      </section>

      <section className={styles.contents}>
        <InternalLink
          className={mc(styles.item, styles.letters, hasLoadingCompleted && hasPassedLetters ? "" : styles.invisible)}
          ref={lettersCheckpointRef}
          href="/letters"
        >
          <Image className={styles.icon} src={letterIconPic} alt="" width={75} {...loadRequired} />
          <h1>LETTERS</h1>
          <h2>解釈の破片を拾い集める</h2>
          <div className={styles.description}>
            <p>
              サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト
            </p>
            <p>
              サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト
            </p>
          </div>
          <div className={styles.images}>
            <Image className={styles.image} src={storyL2Pic} alt="" width={400} {...loadRequired} />
            <Image className={styles.image} src={storyL3Pic} alt="" width={400} {...loadRequired} />
          </div>
        </InternalLink>
        <InternalLink
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
          <h2>これまでの実体を観察する</h2>
          <div className={styles.description}>
            <p>
              サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト
            </p>
            <p>サンプルテキストサンプルテキストサンプルテキスト</p>
          </div>
          <div className={styles.images}>
            <Image className={styles.image} src={storyM2Pic} alt="" width={400} {...loadRequired} />
            <Image className={styles.image} src={storyM3Pic} alt="" width={400} {...loadRequired} />
          </div>
        </InternalLink>
      </section>

      <Footer />
    </div>
  );
};

export default Page;

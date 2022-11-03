import React, { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import styles from "./index.module.scss";
import { Footer, LoadingWindow, Meta, OpeningWindow, Phantom } from "parts";
import { InternalLink, LoadingWaiter, mc, PreloadImage, useContentSwitch } from "functions";
import landscapePic from "public/home/background.webp";
import holeEffectPic from "public/home/hole-effect.webp";
import windEffectPic from "public/home/wind.png";
import shadow1Pic from "public/home/shadow1.webp";
import shadow2Pic from "public/home/shadow2.webp";
import shadow3Pic from "public/home/shadow3.webp";
import shadow4Pic from "public/home/shadow4.webp";
import letterIconPic from "public/general/letter-icon.png";
import materialIconPic from "public/general/material-icon.png";
import logoPic from "public/general/logo-full.webp";
import thumbnailPic1 from "public/contents/materials/busters-mission/stage3-2.webp";

type Pickup = {
  thumbnail: StaticImageData;
  href: string;
  title: string;
};

const pickups: Pickup[] = [
  {
    thumbnail: thumbnailPic1,
    href: "",
    title: ""
  }
];

const Page = (): JSX.Element => {
  const [loadCompleted, setLoadCompleted] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [playingIntro, setPlayingIntro] = useState(false);
  const [hover, setHover] = useState(false);
  const [content, contentIndex, switching] = useContentSwitch(pickups, hover, {
    switchingDuration: 500,
    displayDuration: 5000
  });

  useEffect(() => {
    if (!loadCompleted) return;
    setPlayingIntro(true);
  }, [loadCompleted]);

  return (
    <>
      <Meta
        pageDescription="『RineaR（りにあ）』は、クリエイター『Rinia（りにあ）』による個人活動の総称です。見える抽象を辿るために、漂うように制作をしています。"
        pagePath="/"
        pageImgPath="/img/main.webp"
        pageType="website"
      />

      <LoadingWindow loading={!loadCompleted} progress={loadProgress} />

      <OpeningWindow playing={playingIntro} setPlaying={setPlayingIntro} />

      <LoadingWaiter onCompleted={() => setLoadCompleted(true)} onProgressUpdated={setLoadProgress}>
        <div className={styles.landscape}>
          <PreloadImage className={styles.picture} src={landscapePic} alt="背景" />
          <PreloadImage className={styles.holeEffect} src={holeEffectPic} alt="背景" />
          <PreloadImage className={mc(styles.windEffect, styles.layer1)} src={windEffectPic} alt="背景" />
          <PreloadImage className={mc(styles.windEffect, styles.layer2)} src={windEffectPic} alt="背景" />
          <div className={styles.smogEffect} />
          <div className={styles.shadow}>
            <PreloadImage className={styles.frame1} src={shadow1Pic} alt="" layout="responsive" />
            <PreloadImage className={styles.frame2} src={shadow2Pic} alt="" layout="responsive" />
            <PreloadImage className={styles.frame3} src={shadow3Pic} alt="" layout="responsive" />
            <PreloadImage className={styles.frame4} src={shadow4Pic} alt="" layout="responsive" />
          </div>
        </div>

        <section className={styles.container}>
          <PreloadImage
            className={mc(styles.masked, switching ? styles.switching : "")}
            src={content.thumbnail}
            layout="responsive"
            alt={content.title}
          />
          <div className={mc(styles.letters)}>
            <Phantom title="LETTERS" subtitle="制作状況" icon={letterIconPic} href="/letters" />
          </div>
          <div className={mc(styles.materials)}>
            <Phantom title="MATERIALS" subtitle="企画／作品" icon={materialIconPic} href="/materials" />
          </div>
          <PreloadImage className={styles.logo} src={logoPic} alt="" layout="responsive" />
        </section>

        <section className={styles.message}>
          <h1 className={styles.title}>
            <span className={styles.text}>
              <span className={styles.first}>
                この<span className={styles.strong}>筏</span>は私を、
              </span>
              <span className={styles.last}>どこへ連れてゆくんだろう。</span>
            </span>
          </h1>
          <p>
            『RineaR（りにあ）』とは、クリエイター『Rinia（りにあ）』による個人活動の総称です。その過程で書き留めておきたいことは
            <InternalLink href={"/letters"}>Letters</InternalLink>へ、一連の活動は
            <InternalLink href={"/materials"}>Materials</InternalLink>へ投稿します。
          </p>
          <p>
            見える抽象を辿るために、漂うように制作をしています。ここまでの経緯を知るために、まずは以下のストーリーをご覧ください。
          </p>
        </section>

        <Footer />
      </LoadingWaiter>
    </>
  );
};

export default Page;

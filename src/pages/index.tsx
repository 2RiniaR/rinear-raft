import React, { useEffect, useState } from "react";
import Image, { ImageProps, StaticImageData } from "next/image";
import styles from "./index.module.scss";
import { Footer, LoadingWindow, Meta, OpeningAnimation, SideMenu } from "parts";
import { InternalLink, keepAspect, mc, useContentSwitch, useLoading } from "functions";
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

type Scene = "loading" | "opening" | "view";

const Page = (): JSX.Element => {
  const [onLoadingComplete, loadingProgress, hasLoadingCompleted] = useLoading(11);
  const [scene, setScene] = useState<Scene>("loading");
  const [content, contentIndex, switching, setPlaying] = useContentSwitch(pickups, {
    switchingDuration: 500,
    displayDuration: 5000
  });

  const loadRequired: Pick<ImageProps, "onLoadingComplete" | "loading"> = {
    onLoadingComplete: onLoadingComplete,
    loading: "eager"
  };

  const landscapeFill: Pick<ImageProps, "layout" | "objectFit" | "objectPosition"> = {
    layout: "fill",
    objectFit: "cover",
    objectPosition: "top"
  };

  useEffect(() => {
    if (hasLoadingCompleted) setScene("opening");
  }, [hasLoadingCompleted]);

  function onOpeningAnimationComplete() {
    setScene("view");
  }

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
      <OpeningAnimation isPlaying={scene === "opening"} onComplete={onOpeningAnimationComplete} />

      <section className={styles.concept}>
        <div className={styles.landscape}>
          <div className={styles.background}>
            <Image src={landscapePic} alt="背景" {...loadRequired} {...landscapeFill} />
          </div>
          <div className={styles.phantom}>
            <Image src={holeEffectPic} alt="背景" {...loadRequired} {...landscapeFill} />
          </div>
          <div className={mc(styles.wind, styles.layer1)}>
            <Image src={windEffectPic} alt="背景" {...loadRequired} {...landscapeFill} />
          </div>
          <div className={mc(styles.wind, styles.layer2)}>
            <Image src={windEffectPic} alt="背景" {...loadRequired} {...landscapeFill} />
          </div>
          <div className={styles.smog} />
          <div className={styles.shadow}>
            <Image src={shadow1Pic} alt="背景" {...loadRequired} />
            <Image src={shadow2Pic} alt="背景" {...loadRequired} />
            <Image src={shadow3Pic} alt="背景" {...loadRequired} />
            <Image src={shadow4Pic} alt="背景" {...loadRequired} />
          </div>
        </div>

        <div className={mc(styles.pickup, switching ? styles.switching : "")}>
          <Image {...keepAspect(content.thumbnail, 500)} alt={content.title} />
        </div>
        <InternalLink href="/letters" className={mc(styles.letters, styles.menu)}>
          <div className={styles.icon}>
            <Image {...keepAspect(letterIconPic, 64)} alt="背景" {...loadRequired} />
          </div>
          <span className={styles.name}>LETTERS</span>
        </InternalLink>
        <InternalLink href="/materials" className={mc(styles.materials, styles.menu)}>
          <div className={styles.icon}>
            <Image {...keepAspect(materialIconPic, 64)} alt="背景" {...loadRequired} />
          </div>
          <span className={styles.name}>MATERIALS</span>
        </InternalLink>
        <div className={styles.logo}>
          <Image {...keepAspect(logoPic, 400)} alt="背景" {...loadRequired} />
        </div>
      </section>

      <section className={styles.message}>
        <h1>
          この<strong>筏</strong>は私を、どこへ連れてゆくんだろう
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
    </div>
  );
};

export default Page;

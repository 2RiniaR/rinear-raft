import React, { useEffect, useState } from "react";
import { ImageProps, StaticImageData } from "next/image";
import styles from "./index.module.scss";
import { Footer, LoadingWindow, Meta, OpeningAnimation, SideMenu } from "parts";
import { Image, InternalLink, mc, Ruby, useContentSwitch, useLoading } from "functions";
import landscapePic from "public/home/landscape-16-9.png";
import holeEffectPic from "public/home/holes-16-9.png";
import windEffectPic from "public/home/wind.png";
import shadow1Pic from "public/home/shadow1.webp";
import shadow2Pic from "public/home/shadow2.webp";
import shadow3Pic from "public/home/shadow3.webp";
import shadow4Pic from "public/home/shadow4.webp";
import letterIconPic from "public/general/letter-icon.png";
import materialIconPic from "public/general/material-icon.png";
import logoPic from "public/general/logo-full.webp";
import thumbnailPic1 from "public/contents/materials/busters-mission/stage3-2.webp";
import story1Pic from "public/story/prologue.png";
import story2Pic from "public/story/prototype.png";
import story3Pic from "public/story/present.png";
import story4Pic from "public/story/prelude.png";
import story5Pic from "public/contents/materials/marvelous/page1.webp";
import story6Pic from "public/contents/materials/maze-escape/title.webp";
import story7Pic from "public/contents/materials/popcorn-chef/title.webp";
import story8Pic from "public/contents/materials/kimifeel/page1.webp";
import notePic from "public/home/message-background.webp";

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
  const [onLoadingComplete, loadingProgress, hasLoadingCompleted] = useLoading(26);
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
          <Image className={styles.background} src={landscapePic} alt="背景" {...loadRequired} {...landscapeFill} />
          <Image className={styles.phantom} src={holeEffectPic} alt="背景" {...loadRequired} {...landscapeFill} />
          <Image
            className={mc(styles.wind, styles.l1)}
            src={windEffectPic}
            alt="背景"
            {...loadRequired}
            {...landscapeFill}
          />
          <Image
            className={mc(styles.wind, styles.l2)}
            src={windEffectPic}
            alt="背景"
            {...loadRequired}
            {...landscapeFill}
          />
          <div className={styles.smog} />
          <Image className={mc(styles.shadow, styles.l1)} src={shadow1Pic} width={384} alt="背景" {...loadRequired} />
          <Image className={mc(styles.shadow, styles.l2)} src={shadow2Pic} width={384} alt="背景" {...loadRequired} />
          <Image className={mc(styles.shadow, styles.l3)} src={shadow3Pic} width={384} alt="背景" {...loadRequired} />
          <Image className={mc(styles.shadow, styles.l4)} src={shadow4Pic} width={384} alt="背景" {...loadRequired} />
        </div>

        <InternalLink className={styles.pickup} href={content.href}>
          <Image
            src={content.thumbnail}
            className={mc(styles.image, switching ? styles.switching : "")}
            alt={content.title}
            objectFit={"cover"}
            layout={"fill"}
            objectPosition={"center"}
          />
        </InternalLink>
        <InternalLink href="/letters" className={mc(styles.letters, styles.menu)}>
          <Image className={styles.icon} src={letterIconPic} width={32} alt="背景" {...loadRequired} />
          <span className={styles.name}>LETTERS</span>
        </InternalLink>
        <InternalLink href="/materials" className={mc(styles.materials, styles.menu)}>
          <Image className={styles.icon} src={materialIconPic} width={32} alt="背景" {...loadRequired} />
          <span className={styles.name}>MATERIALS</span>
        </InternalLink>
        <Image className={styles.logo} src={logoPic} width={400} alt="背景" {...loadRequired} />
      </section>

      <section className={styles.message}>
        <div className={styles.background}>
          <Image className={mc(styles.story, styles.l1)} src={story1Pic} width={600} alt="背景" {...loadRequired} />
          <Image className={mc(styles.story, styles.l2)} src={story2Pic} width={600} alt="背景" {...loadRequired} />
          <Image className={mc(styles.story, styles.l3)} src={story3Pic} width={600} alt="背景" {...loadRequired} />
          <Image className={mc(styles.story, styles.l4)} src={story4Pic} width={600} alt="背景" {...loadRequired} />
          <Image className={mc(styles.story, styles.l5)} src={story5Pic} width={600} alt="背景" {...loadRequired} />
          <Image className={mc(styles.story, styles.l6)} src={story6Pic} width={600} alt="背景" {...loadRequired} />
          <Image className={mc(styles.story, styles.l7)} src={story7Pic} width={600} alt="背景" {...loadRequired} />
          <Image className={mc(styles.story, styles.l8)} src={story8Pic} width={600} alt="背景" {...loadRequired} />
        </div>
        <div className={styles.content}>
          <Image
            className={mc(styles.note)}
            src={notePic}
            objectFit={"cover"}
            layout={"fill"}
            objectPosition={"center"}
            alt="背景"
            {...loadRequired}
          />
          <h1>
            この<strong>筏</strong>は私を、どこへ連れてゆくんだろう。
          </h1>
          <p>
            <Ruby writing="RineaR" reading="りにある" />
            は、
            <Ruby writing="Rinia" reading="りにあ" />
            と名付けた一個人の活動を観察し続けて得られた解釈です。
          </p>
          <p>
            今はまだ抽象が漂うだけですが、
            <Ruby writing="Rinia" reading="りにあ" />
            の活動が進行するにつれて
            <Ruby writing="RineaR" reading="りにある" />
            はより新しい解釈を得ることができます。
          </p>
        </div>
      </section>

      <section className={styles.contents}>
        <div className={mc(styles.item, styles.letters)}>
          <Image className={styles.icon} src={letterIconPic} width={75} alt="背景" {...loadRequired} />
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
            <Image className={styles.image} src={story2Pic} width={400} alt="背景" {...loadRequired} />
            <Image className={styles.image} src={story3Pic} width={400} alt="背景" {...loadRequired} />
          </div>
          <InternalLink className={styles.link} href="/letters">
            こちらへどうぞ
          </InternalLink>
        </div>
        <div className={mc(styles.item, styles.materials)}>
          <Image className={styles.icon} src={materialIconPic} width={75} alt="背景" {...loadRequired} />
          <h1>MATERIALS</h1>
          <h2>これまでの実体を観察する</h2>
          <div className={styles.description}>
            <p>
              サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト
            </p>
            <p>サンプルテキストサンプルテキストサンプルテキスト</p>
          </div>
          <div className={styles.images}>
            <Image className={styles.image} src={story2Pic} width={400} alt="背景" {...loadRequired} />
            <Image className={styles.image} src={story3Pic} width={400} alt="背景" {...loadRequired} />
          </div>
          <InternalLink className={styles.link} href="/materials">
            こちらへどうぞ
          </InternalLink>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;

import dayjs from "dayjs";
import React from "react";
import { Image } from "functions";
import { LetterTemplate } from "templates";
import { Letter } from "content";
import prologuePic from "public/story/prologue.png";
import prototypePic from "public/story/prototype.png";
import presentPic from "public/story/present.png";
import preludePic from "public/story/prelude.png";

export const content: Letter = {
  id: "story",
  title: "あらすじ",
  image: presentPic,
  releasedAt: dayjs("2022-11-02").toDate(),
  updatedAt: dayjs("2022-11-02 21:00:00").toDate(),
  description: "RineaRができるまで。"
};

const Page = () => (
  <LetterTemplate content={content}>
    <Image src={prologuePic} alt="PROLOGUE" />
    <p>かつて、私たちには「みんなで遊びを作る」「独自の世界観を守る」という二面性がありました。</p>
    <p>世界観を絵に描いて、周りの子たちと一緒に遊びへ昇華する。そんな活動が出発点でした。</p>
    <Image src={prototypePic} alt="PROTOTYPE" />
    <p>時が経って、色んな世界に触れて、色んな知識や経験を得て、色んなものを作りました。</p>
    <p>
      しかし同時に、これは可能性の発散を意味していました。結局、元の二面性は乖離し、私たちはどこかに取り残されました。
    </p>
    <Image src={presentPic} alt="PRESENT" />
    <p>しばらく漂い続けた私たちは、今まで見えたもの、思ったこと、選んだものに潜在的な意図があることに気付きました。</p>
    <p>まるで「抽象的な何か」が見えて、その意味を知るために行動しているようでした。</p>
    <Image src={preludePic} alt="PRELUDE" />
    <p>それぞれの行き先を辿るため、私たちは見えているものを手掛かりに、様々なものを作り続けていくことにしました。</p>
    <p>この活動はたった今、『RineaR』と名付けられました。</p>
  </LetterTemplate>
);

export default Page;
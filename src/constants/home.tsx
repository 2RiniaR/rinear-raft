import React from "react";
import { InternalLink } from "components/functions";
import { About, Story } from "models/home";
import prologuePic from "public/story/prologue.png";
import prototypePic from "public/story/prototype.png";
import presentPic from "public/story/present.png";
import preludePic from "public/story/prelude.png";

export const about: About = {
  Document: () => (
    <>
      <p>
        『RineaR（りにあ）』とは、クリエイター『Rinia（りにあ）』による個人活動の総称です。その過程で書き留めておきたいことは
        <InternalLink href={"/letters"}>Letters</InternalLink>へ、一連の活動は
        <InternalLink href={"/materials"}>Materials</InternalLink>へ投稿します。
      </p>
      <p>
        見える抽象を辿るために、漂うように制作をしています。ここまでの経緯を知るために、まずは以下のストーリーをご覧ください。
      </p>
    </>
  )
};

export const story: Story = {
  scenes: [
    {
      title: "PROLOGUE",
      thumbnail: prologuePic,
      Document: () => (
        <>
          <p>かつて、私たちには「みんなで遊びを作る」「独自の世界観を守る」という二面性がありました。</p>
          <p>世界観を絵に描いて、周りの子たちと一緒に遊びへ昇華する。そんな活動が出発点でした。</p>
        </>
      )
    },
    {
      title: "PROTOTYPE",
      thumbnail: prototypePic,
      Document: () => (
        <>
          <p>時が経って、色んな世界に触れて、色んな知識や経験を得て、色んなものを作りました。</p>
          <p>
            しかし同時に、これは可能性の発散を意味していました。結局、元の二面性は乖離し、私たちはどこかに取り残されました。
          </p>
        </>
      )
    },
    {
      title: "PRESENT",
      thumbnail: presentPic,
      Document: () => (
        <>
          <p>
            しばらく漂い続けた私たちは、今まで見えたもの、思ったこと、選んだものに潜在的な意図があることに気付きました。
          </p>
          <p>まるで「抽象的な何か」が見えて、その意味を知るために行動しているようでした。</p>
        </>
      )
    },
    {
      title: "PRELUDE",
      thumbnail: preludePic,
      Document: () => (
        <>
          <p>
            それぞれの行き先を辿るため、私たちは見えているものを手掛かりに、様々なものを作り続けていくことにしました。
          </p>
          <p>この活動はたった今、『RineaR』と名付けられました。</p>
        </>
      )
    }
  ]
};

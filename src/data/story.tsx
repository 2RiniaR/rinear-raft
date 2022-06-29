import { Scene, Story } from "../lib/story";
import prototypeImage from "public/img/Prototype.png";
import prologueImage from "public/img/Prologue.png";
import presentImage from "public/img/Present.png";
import preludeImage from "public/img/Prelude.png";

const prologue: Scene = {
  title: "PROLOGUE",
  thumbnail: prologueImage,
  Document: () => (
    <>
      <p>かつて、私たちには「みんなで遊びを作る」「独自の世界観を守る」という二面性がありました。</p>
      <p>基盤のない世界観が目の前に広がっていて、それらはみんなの発想により遊びとして昇華されていきました。</p>
    </>
  )
};

const prototype: Scene = {
  title: "PROTOTYPE",
  thumbnail: prototypeImage,
  Document: () => (
    <>
      <p>時が経って、色んな世界に触れて、色んな知識や経験を得て、色んなものを作りました。</p>
      <p>しかし同時に、可能性の発散により元の二面性は乖離していき、私はどこでもない場所に取り残されました。</p>
    </>
  )
};

const present: Scene = {
  title: "PRESENT",
  thumbnail: presentImage,
  Document: () => (
    <>
      <p>しばらく漂い続けた私は、今まで見えたもの、思ったこと、選んだものに潜在的な意図があることに気付きました。</p>
      <p>まるで「抽象的な何か」が見えて、その意味を知るために行動しているようでした。</p>
    </>
  )
};

const prelude: Scene = {
  title: "PRELUDE",
  thumbnail: preludeImage,
  Document: () => (
    <>
      <p>それぞれの行き先を辿るため、私たちは見えているものを手掛かりに様々なものを作り続けていくことにしました。</p>
      <p>この活動はたった今、『RineaR』と名付けられました。</p>
    </>
  )
};

export const story: Story = {
  scenes: [prologue, prototype, present, prelude]
};

import { Scene, Story } from "../lib/story";
import prototypeImage from "public/img/Prototype.png";
import prologueImage from "public/img/Prologue.png";
import presentImage from "public/img/Present.png";
import preludeImage from "public/img/Prelude.png";

/*
【ストーリー概要】

RineaRが出来上がるまでの道筋を書いたもの。ストーリーと書いているが、要は「どういう経緯でRineaRが出来上がったか」を説明する。

【伝えたいこと】
（10年以上昔の作品の写真）
・昔から、独自の世界観を大事にしていた。それと同時に、その世界観をゲームに落とし込んでみんなでコンテンツを作ることも楽しんでいた。
・だが、その先には技術的な限界があった。

（『RineaRの筏』以前の作品の写真）
・色々な出会いがあって、道に迷った。


・昔を思い出し、漂流を始めた。

・「みんなと一緒にコンテンツ作りを楽しみたい」という側面と、「独自の世界観を大事にしたい、ブラックボックスを解明したい」という側面に分かれている。
・私はいまだにブラックボックスだらけである。
・世界観を大事にしつつ、みんなと楽しみを作りたい。
・RineaRは、そんな活動の軸を確立すべく、命名された。

 */

const prologue: Scene = {
  title: "PROLOGUE",
  thumbnail: prologueImage,
  Document: () => (
    <>
      <p>
        PROLOGUE. PROLOGUE. PROLOGUE. PROLOGUE. PROLOGUE. PROLOGUE. PROLOGUE. PROLOGUE. PROLOGUE. PROLOGUE. PROLOGUE.
        PROLOGUE. PROLOGUE. PROLOGUE. PROLOGUE. PROLOGUE.
      </p>
    </>
  )
};

const prototype: Scene = {
  title: "PROTOTYPE",
  thumbnail: prototypeImage,
  Document: () => (
    <>
      <p>
        PROTOTYPE. PROTOTYPE. PROTOTYPE. PROTOTYPE. PROTOTYPE. PROTOTYPE. PROTOTYPE. PROTOTYPE. PROTOTYPE. PROTOTYPE.
        PROTOTYPE. PROTOTYPE. PROTOTYPE. PROTOTYPE. PROTOTYPE. PROTOTYPE.
      </p>
    </>
  )
};

const present: Scene = {
  title: "PRESENT",
  thumbnail: presentImage,
  Document: () => (
    <>
      <p>
        PRESENT. PRESENT. PRESENT. PRESENT. PRESENT. PRESENT. PRESENT. PRESENT. PRESENT. PRESENT. PRESENT. PRESENT.
        PRESENT. PRESENT. PRESENT. PRESENT.
      </p>
    </>
  )
};

const prelude: Scene = {
  title: "PRELUDE",
  thumbnail: preludeImage,
  Document: () => (
    <>
      <p>
        PRELUDE. PRELUDE. PRELUDE. PRELUDE. PRELUDE. PRELUDE. PRELUDE. PRELUDE. PRELUDE. PRELUDE. PRELUDE. PRELUDE.
        PRELUDE. PRELUDE. PRELUDE. PRELUDE.
      </p>
    </>
  )
};

export const story: Story = {
  scenes: [prologue, prototype, present, prelude]
};

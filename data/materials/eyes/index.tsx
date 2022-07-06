import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import { MaterialSettings } from "repositories";
import thumbnailPic from "public/contents/materials/eyes/eyes.webp";
import { ChapterPoint, Paragraph, Quotation, Space, Strong, TextEffect, Video } from "writers";
import { Chapter, ContentPage } from "models/content";

const Page: ContentPage = ({ setChapters }) => {
  const refs: { [name: string]: Chapter } = {
    video: { name: "紹介映像", ref: useRef(null) },
    about: { name: "このbotについて", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <>
      <ChapterPoint title={refs.video.name} jumpRef={refs.video.ref}>
        <Video src="https://www.youtube.com/embed/Vto86ts0cQ8" />
      </ChapterPoint>

      <ChapterPoint title={refs.about.name} jumpRef={refs.about.ref}>
        <Paragraph>
          私はdiscordをサブ画面で開いていることが多いんですが、たまにチャットの静寂の中
          <Quotation>○○○が入力中...</Quotation>って出てることに気付くんです。
          それで、ずーーっとそのまま入力中が続いてる時って気になるじゃないですか。
          何か長考してるのかな、それとも長文なのかな、それとも送ろうかどうか思い悩んでるのかなってそわそわするわけです。
        </Paragraph>
        <Paragraph>
          そういう時に私はよくふざけて<Strong>2つの目の絵文字</Strong>だけを送るんですが、これが見事に
          <TextEffect strikethrough>気色悪いと</TextEffect>私の中で好評だったので、自動化しようと考えたわけです。
        </Paragraph>
        <Space size={1} />
        <Paragraph>
          仕組みは簡単で、<Strong>入力中の状態が検知されたとき、1%の確率で数秒後に目の絵文字を送ります。</Strong>
          ただ、相手がメッセージを送り終わってから「み て る よ」ってしてもなんか違うので、
          <Strong>送信の前に「メッセージが過去5分間送信されていないこと」をチェックします。</Strong>
        </Paragraph>
        <Paragraph>
          あとは名前を「み て る
          よ」にして、アイコンも目の絵文字にして恐怖感を醸し出したら完成。ほんとにこれだけなので、3時間ほどで完成しました。結果としては満足の行く出来です。今でも一生懸命みんなの投稿に対して「み
          て る よ」をしてくれています。
        </Paragraph>
        <Paragraph>
          要望があったり、魔が差したりしたら公開してみんなが自由に使えるようにしようかなと思います。こんなふざけた子でよければ。
        </Paragraph>
        <Space size={3} />
        <Paragraph>
          ちなみに結局私も引き続き「み て る よ」してるので、ただ視線の数が増えただけでした。ごめんね。
        </Paragraph>
      </ChapterPoint>
    </>
  );
};

const eyes: MaterialSettings = {
  genre: "material",
  id: "eyes",
  title: "み　て　る　よ",
  thumbnail: thumbnailPic,
  thumbnails: [thumbnailPic],
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2022-02-25").toDate(),
  description:
    "誰かがチャットを送ろうとして長考しているのを検知すると、超低確率で目が2つ並んだメッセージを送ってくるDiscord bot。",
  Page
};

export default eyes;

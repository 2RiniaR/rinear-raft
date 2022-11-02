import dayjs from "dayjs";
import { MaterialTemplate } from "templates";
import { Material } from "content";
import thumbnailPic from "public/contents/materials/eyes/eyes.webp";

export const content: Material = {
  id: "eyes",
  title: "み　て　る　よ",
  image1: thumbnailPic,
  image2: thumbnailPic,
  image3: thumbnailPic,
  image4: thumbnailPic,
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2022-02-25").toDate(),
  description:
    "誰かがチャットを送ろうとして長考しているのを検知すると、超低確率で目が2つ並んだメッセージを送ってくるDiscord bot。"
};

const Page = () => (
  <MaterialTemplate content={content}>
    <h1>紹介動画</h1>

    <iframe
      src="https://www.youtube.com/embed/Vto86ts0cQ8"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />

    <h1>内容</h1>

    <p>
      私はdiscordをサブ画面で開いていることが多いんですが、たまにチャットの静寂の中
      <q>○○○が入力中...</q>って出てることに気付くんです。
      それで、ずーーっとそのまま入力中が続いてる時って気になるじゃないですか。
      何か長考してるのかな、それとも長文なのかな、それとも送ろうかどうか思い悩んでるのかなってそわそわするわけです。
    </p>
    <p>
      そういう時に私はよくふざけて<s>2つの目の絵文字</s>だけを送るんですが、これが見事に
      <del>気色悪いと</del>私の中で好評だったので、自動化しようと考えたわけです。
    </p>
    <hr />
    <p>
      仕組みは簡単で、<s>入力中の状態が検知されたとき、1%の確率で数秒後に目の絵文字を送ります。</s>
      ただ、相手がメッセージを送り終わってから「み て る よ」ってしてもなんか違うので、
      <s>送信の前に「メッセージが過去5分間送信されていないこと」をチェックします。</s>
    </p>
    <p>
      あとは名前を「み て る
      よ」にして、アイコンも目の絵文字にして恐怖感を醸し出したら完成。ほんとにこれだけなので、3時間ほどで完成しました。結果としては満足の行く出来です。今でも一生懸命みんなの投稿に対して「み
      て る よ」をしてくれています。
    </p>
    <p>
      要望があったり、魔が差したりしたら公開してみんなが自由に使えるようにしようかなと思います。こんなふざけた子でよければ。
    </p>
    <hr />
    <p>ちなみに結局私も引き続き「み て る よ」してるので、ただ視線の数が増えただけでした。ごめんね。</p>
  </MaterialTemplate>
);

export default Page;

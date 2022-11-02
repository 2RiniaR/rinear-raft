import dayjs from "dayjs";
import Image from "next/image";
import { ExternalLink } from "../../functions";
import { MaterialTemplate } from "templates";
import { Material } from "content";
import thumbnailPic1 from "public/contents/materials/kimifeel/page1.webp";
import thumbnailPic2 from "public/contents/materials/kimifeel/page2.webp";
import thumbnailPic3 from "public/contents/materials/kimifeel/page3.webp";
import lobbyPic from "public/contents/materials/popcorn-chef/lobby.webp";
import titlePic from "public/contents/materials/popcorn-chef/title.webp";
import matchingPic from "public/contents/materials/popcorn-chef/matching.webp";
import beansPic from "public/contents/materials/popcorn-chef/beans.webp";
import bomb1Pic from "public/contents/materials/popcorn-chef/game3.webp";
import bomb2Pic from "public/contents/materials/popcorn-chef/game4.webp";
import orderPic from "public/contents/materials/popcorn-chef/game5.webp";
import rushPic from "public/contents/materials/popcorn-chef/rush.webp";

export const content: Material = {
  id: "pon-bon-rush",
  title: "Pon! Bon! Rush",
  image1: thumbnailPic1,
  image2: thumbnailPic2,
  image3: thumbnailPic3,
  image4: lobbyPic,
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2020-04-05").toDate(),
  description:
    "2人のプレイヤーがリアルタイムでポップコーンを調理し、調理したポップコーンを食べた量で競う2人通信対戦のカジュアルゲーム。"
};

const Page = () => (
  <MaterialTemplate content={content}>
    <h1>PV</h1>
    <iframe
      src="https://www.youtube.com/embed/qf3eXiC_UrM"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>ゲーム本体</h1>
    <ExternalLink href="https://unityroom.com/games/pon_bon_rush">ここ</ExternalLink>
    からプレイ可能です。
    <h1>遊び方</h1>
    <ol>
      <li>
        スタート画面で「はじめる」をクリックする
        <Image src={titlePic} alt="タイトル画面" />
      </li>
      <li>
        ロビー画面へ移動するので、左下欄にプレイヤー名を入力する
        <Image src={lobbyPic} alt="ロビー画面" />
      </li>
      <li>
        部屋を作成、または部屋に参加する
        <ul>
          <li>誰かと遊ぶ場合、「ランダム」の入室ボタンをクリックする</li>
          <li>特定の人と遊ぶ場合、「プライベート」にあいことばを入力し、入室ボタンをクリックする</li>
        </ul>
      </li>
      <li>
        マッチング画面に移行するので、対戦相手が現れるまで待つ
        <Image src={matchingPic} alt="マッチング画面" />
      </li>
    </ol>
    <h1>ルール</h1>
    <p>
      ポップコーンを調理して、調理したポップコーンを食べると画面下の満腹ゲージが溜まっていく。満腹ゲージが先に満タンになったほうが勝ち！
    </p>
    <h2>豆の調理について</h2>
    <p>
      豆が時間経過で上からランダムに降ってくる。
      豆はドラッグ＆ドロップすることで移動できるが、移動中はカーソル上に出現するゲージが減っていき、0になると移動がキャンセルされてしまう。
      また、豆を移動して鍋の外に捨てることはできない。
    </p>
    <p>
      コンロの「弱」「中」「強」ボタンを押すと、コンロの火力を調節できる。
      豆はコンロの火力が強いほど、コンロの底面に近いほど早く加熱される。
      豆を一定量加熱するとはじけて、食べられるポップコーンの状態になる。
      はじけたポップコーンをクリックすると食べることができる。 食べると、満腹ゲージが溜まっていく。
      豆にはいくつか種類があり、それぞれの効果は以下の通り。
    </p>
    <Image src={beansPic} alt="豆の一覧" />
    <h2>豆の送り合い</h2>
    <p>
      豆やポップコーンを、爆発などで画面上半分の画面外に出すと相手側へ送られる。
      送られる豆は、加熱状態や破裂状態もすべて保持されて相手側で降ってくる。
    </p>
    <p>「ぶきみなまめ」や「なぞのまめ」などの要らない豆は、「ばくだんまめ」を使って…</p>
    <Image src={bomb1Pic} alt="あぶない豆1" />
    <p>相手側へ吹き飛ばしてしまおう！</p>
    <Image src={bomb2Pic} alt="あぶない豆2" />
    <p>画面下半分の画面外に出た豆やポップコーンは、相手側へ送られることなく廃棄される。</p>
    <h2>注文</h2>
    <p>
      ポップコーンを3個食べるごとに、画面右側に注文パネルが出現する。欲しい豆やアイテムをクリックすると、選択したものが画面上から降ってくる。
    </p>
    <Image src={orderPic} alt="注文" />
    <p>
      選べるアイテムはランダムで、豆のほかに上記画像にある「フタ」を注文することができる。フタは一定時間鍋の上側をふさぎ、他の豆が鍋の中に落ちないようにできる。
    </p>
    <h2>イベント</h2>
    <p>一定時間ごとに、イベントが発生する。 発生するイベントは、以下のうちからランダムで抽選される。</p>
    <ul>
      <li>「きらきらラッシュ」： きらめくまめが全プレイヤーに3個ずつ降ってくる。逆転のチャンス！</li>
      <li>「ばくだんラッシュ」： ばくだんまめが全プレイヤーに3個ずつ降ってくる。</li>
      <li>「あつあつラッシュ」： もえるまめが全プレイヤーに3個ずつ降ってくる。</li>
      <li>「危険物に注意！」： やばいまめが全プレイヤーに1個ずつ降ってくる。フタやばくだんまめなどで防ごう！</li>
      <li>「ご注文はなんなりと！」： 一定時間、全プレイヤーが注文し放題になる。</li>
    </ul>
    <Image src={rushPic} alt="ラッシュ発生" />
    <h1>使用ツール</h1>
    <h2>言語・ライブラリ等</h2>
    <ul>
      <li>Unity 2021.3.0f1</li>
      <li>UniRx</li>
      <li>UniTask</li>
      <li>Photon Unity Network 2</li>
    </ul>
  </MaterialTemplate>
);

export default Page;

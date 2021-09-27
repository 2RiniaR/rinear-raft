import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import styles from "../projects.module.scss";
import ExternalLink from "components/functions/link/ExternalLink";
import Space from "components/parts/Space";
import ComingSoon from "components/parts/ComingSoon";
import { ChapterPoint, ContentPageProps, ProjectContent } from "lib/contents";
import ContentImage from "components/parts/ContentImage";

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {
    movie: { name: "プレイ動画", ref: useRef(null) },
    download: { name: "ダウンロード", ref: useRef(null) },
    howto: { name: "遊び方", ref: useRef(null) },
    rule: { name: "ルール", ref: useRef(null) },
    tools: { name: "使用ツール", ref: useRef(null) },
    background: { name: "裏話", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <main className={styles.content}>
      <section ref={refs.movie.ref}>
        <h1>{refs.movie.name}</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1zuUxYoJN3g"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </section>

      <section ref={refs.download.ref}>
        <h1>{refs.download.name}</h1>
        <p>
          ゲームのファイルを
          <ExternalLink href="https://www.dropbox.com/sh/vv3gc9hj7myd5m6/AAC1eCgIz-Ro8WfOmFbQNIYwa?dl=0">
            ここ
          </ExternalLink>
          からダウンロードしてください。
        </p>
      </section>

      <section ref={refs.howto.ref}>
        <h1>{refs.howto.name}</h1>
        <p>1. スタート画面で「はじめる」をクリックする</p>
        <ContentImage src="/contents/projects/popcorn-chef/title.jpg" alt="タイトル画面" />
        <p>2. ロビー画面へ移動するので、左下欄にプレイヤー名を入力する</p>
        <ContentImage src="/contents/projects/popcorn-chef/lobby.jpg" alt="ロビー画面" />
        <p>3. 部屋を作成、または部屋に参加する</p>
        <ul>
          <li>誰かと遊ぶ場合、「ランダム」の入室ボタンをクリックする</li>
          <li>特定の人と遊ぶ場合、「プライベート」にあいことばを入力し、入室ボタンをクリックする</li>
        </ul>
        <p>4. マッチング画面に移行するので、対戦相手が現れるまで待つ</p>
        <ContentImage src="/contents/projects/popcorn-chef/matching.jpg" alt="マッチング画面" />
      </section>

      <section ref={refs.rule.ref}>
        <h1>{refs.rule.name}</h1>
        <p>
          ポップコーンを調理して、調理したポップコーンを食べると画面下の満腹ゲージが溜まっていく。満腹ゲージが先に満タンになったほうが勝ち！
        </p>

        <Space size={2} />

        <h2>豆の調理について</h2>
        <p>
          豆が時間経過で上からランダムに降ってくる。
          豆はドラッグ＆ドロップすることで移動できるが、移動中はカーソル上に出現するゲージが減っていき、0になると移動がキャンセルされてしまう。
          また、豆を移動して鍋の外に捨てることはできない。
        </p>
        <p>
          コンロの「弱」「中」「強」ボタンを押すと、コンロの火力を調節できる。
          豆はコンロの火力が強いほど、コンロの底面に近いほど早く加熱される。
        </p>
        <p>
          豆を一定量加熱するとはじけて、食べられるポップコーンの状態になる。
          はじけたポップコーンをクリックすると食べることができる。 食べると、満腹ゲージが溜まっていく。
        </p>
        <p>豆にはいくつか種類があり、それぞれの効果は以下の通り。</p>
        <ContentImage src="/contents/projects/popcorn-chef/beans.jpg" alt="豆の一覧" />

        <Space size={2} />

        <h2>豆の送り合い</h2>
        <p>
          豆やポップコーンを、爆発などで画面上半分の画面外に出すと相手側へ送られる。
          送られる豆は、加熱状態や破裂状態もすべて保持されて相手側で降ってくる。
        </p>
        <p>「ぶきみなまめ」や「なぞのまめ」などの要らない豆は、「ばくだんまめ」を使って…</p>
        <ContentImage src="/contents/projects/popcorn-chef/game3.jpg" alt="あぶない豆1" />
        <p>相手側へ吹き飛ばしてしまおう！</p>
        <ContentImage src="/contents/projects/popcorn-chef/game4.jpg" alt="あぶない豆2" />
        <p>画面下半分の画面外に出た豆やポップコーンは、相手側へ送られることなく廃棄される。</p>

        <Space size={2} />

        <h2>注文</h2>
        <p>
          ポップコーンを3個食べるごとに、画面右側に注文パネルが出現する。欲しい豆やアイテムをクリックすると、選択したものが画面上から降ってくる。
        </p>
        <ContentImage src="/contents/projects/popcorn-chef/game5.jpg" alt="注文" />
        <p>
          選べるアイテムはランダムで、豆のほかに上記画像にある「フタ」を注文することができる。フタは一定時間鍋の上側をふさぎ、他の豆が鍋の中に落ちないようにできる。
        </p>

        <Space size={2} />

        <h2>イベント</h2>
        <p>一定時間ごとに、イベントが発生する。 発生するイベントは、以下のうちからランダムで抽選される。</p>
        <ul>
          <li>「きらきらラッシュ」： とろけるまめが全プレイヤーに3個ずつ降ってくる。逆転のチャンス！</li>
          <li>「ばくだんラッシュ」： ばくだんまめが全プレイヤーに3個ずつ降ってくる。</li>
          <li>「あつあつラッシュ」： もえるまめが全プレイヤーに3個ずつ降ってくる。</li>
          <li>「危険物に注意！」： ぶきみなまめが全プレイヤーに1個ずつ降ってくる。フタやばくだんまめなどで防ごう！</li>
          <li>「ご注文はなんなりと！」： 一定時間、全プレイヤーが注文し放題になる。</li>
        </ul>
        <ContentImage src="/contents/projects/popcorn-chef/rush.jpg" alt="ラッシュ発生" />
      </section>

      <section ref={refs.tools.ref}>
        <h1>{refs.tools.name}</h1>
        <h2>言語・ライブラリ</h2>
        <ul>
          <li>Unity 2019.1.9f1</li>
          <li>UniRx</li>
          <li>UniTask</li>
          <li>Photon Unity Network</li>
        </ul>
      </section>

      <section ref={refs.background.ref}>
        <h1>{refs.background.name}</h1>
        <ComingSoon />
      </section>
    </main>
  );
};

const popcornChef: ProjectContent = {
  genre: "projects",
  id: "popcorn-chef",
  title: "ポップコーン職人",
  thumbnailsPath: [
    "/contents/projects/popcorn-chef/game1.jpg",
    "/contents/projects/popcorn-chef/title.jpg",
    "/contents/projects/popcorn-chef/game4.jpg",
    "/contents/projects/popcorn-chef/lobby.jpg"
  ],
  updatedAt: dayjs("2020-04-05"),
  releasedAt: dayjs("2021-04-30"),
  description:
    "2人のプレイヤーがリアルタイムでポップコーンを調理し、調理したポップコーンを食べた量で競う2人通信対戦のカジュアルゲーム。",
  Page
};

export default popcornChef;

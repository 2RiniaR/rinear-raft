/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import BeansPic from "public/contents/projects/popcorn-chef/beans.webp";
import Bomb1Pic from "public/contents/projects/popcorn-chef/game3.webp";
import Bomb2Pic from "public/contents/projects/popcorn-chef/game4.webp";
import OrderPic from "public/contents/projects/popcorn-chef/game5.webp";
import RushPic from "public/contents/projects/popcorn-chef/rush.webp";
import { ContentImage, Heading, ListItem, Paragraph, UnorderedList } from "content-parts";

const Section = (): JSX.Element => (
  <>
    <Paragraph>
      ポップコーンを調理して、調理したポップコーンを食べると画面下の満腹ゲージが溜まっていく。満腹ゲージが先に満タンになったほうが勝ち！
    </Paragraph>

    <Heading level="sub">豆の調理について</Heading>
    <Paragraph>
      豆が時間経過で上からランダムに降ってくる。
      豆はドラッグ＆ドロップすることで移動できるが、移動中はカーソル上に出現するゲージが減っていき、0になると移動がキャンセルされてしまう。
      また、豆を移動して鍋の外に捨てることはできない。
    </Paragraph>
    <Paragraph>
      コンロの「弱」「中」「強」ボタンを押すと、コンロの火力を調節できる。
      豆はコンロの火力が強いほど、コンロの底面に近いほど早く加熱される。
      豆を一定量加熱するとはじけて、食べられるポップコーンの状態になる。
      はじけたポップコーンをクリックすると食べることができる。 食べると、満腹ゲージが溜まっていく。
      豆にはいくつか種類があり、それぞれの効果は以下の通り。
    </Paragraph>
    <ContentImage src={BeansPic} alt="豆の一覧" />

    <Heading level="sub">豆の送り合い</Heading>
    <Paragraph>
      豆やポップコーンを、爆発などで画面上半分の画面外に出すと相手側へ送られる。
      送られる豆は、加熱状態や破裂状態もすべて保持されて相手側で降ってくる。
    </Paragraph>
    <Paragraph>「ぶきみなまめ」や「なぞのまめ」などの要らない豆は、「ばくだんまめ」を使って…</Paragraph>
    <ContentImage src={Bomb1Pic} alt="あぶない豆1" />
    <Paragraph>相手側へ吹き飛ばしてしまおう！</Paragraph>
    <ContentImage src={Bomb2Pic} alt="あぶない豆2" />
    <Paragraph>画面下半分の画面外に出た豆やポップコーンは、相手側へ送られることなく廃棄される。</Paragraph>

    <Heading level="sub">注文</Heading>
    <Paragraph>
      ポップコーンを3個食べるごとに、画面右側に注文パネルが出現する。欲しい豆やアイテムをクリックすると、選択したものが画面上から降ってくる。
    </Paragraph>
    <ContentImage src={OrderPic} alt="注文" />
    <Paragraph>
      選べるアイテムはランダムで、豆のほかに上記画像にある「フタ」を注文することができる。フタは一定時間鍋の上側をふさぎ、他の豆が鍋の中に落ちないようにできる。
    </Paragraph>

    <Heading level="sub">イベント</Heading>
    <Paragraph>一定時間ごとに、イベントが発生する。 発生するイベントは、以下のうちからランダムで抽選される。</Paragraph>
    <UnorderedList>
      <ListItem>「きらきらラッシュ」： きらめくまめが全プレイヤーに3個ずつ降ってくる。逆転のチャンス！</ListItem>
      <ListItem>「ばくだんラッシュ」： ばくだんまめが全プレイヤーに3個ずつ降ってくる。</ListItem>
      <ListItem>「あつあつラッシュ」： もえるまめが全プレイヤーに3個ずつ降ってくる。</ListItem>
      <ListItem>
        「危険物に注意！」： やばいまめが全プレイヤーに1個ずつ降ってくる。フタやばくだんまめなどで防ごう！
      </ListItem>
      <ListItem>「ご注文はなんなりと！」： 一定時間、全プレイヤーが注文し放題になる。</ListItem>
    </UnorderedList>
    <ContentImage src={RushPic} alt="ラッシュ発生" />
  </>
);

export default Section;

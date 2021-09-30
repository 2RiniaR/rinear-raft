import Space from "components/parts/contents/Space";
import ContentImage from "components/parts/contents/ContentImage";
import BeansPic from "public/contents/projects/popcorn-chef/beans.jpg";
import Bomb1Pic from "public/contents/projects/popcorn-chef/game3.jpg";
import Bomb2Pic from "public/contents/projects/popcorn-chef/game4.jpg";
import OrderPic from "public/contents/projects/popcorn-chef/game5.jpg";
import RushPic from "public/contents/projects/popcorn-chef/rush.jpg";

const Section = (): JSX.Element => (
  <>
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
    <ContentImage src={BeansPic} alt="豆の一覧" />

    <Space size={2} />

    <h2>豆の送り合い</h2>
    <p>
      豆やポップコーンを、爆発などで画面上半分の画面外に出すと相手側へ送られる。
      送られる豆は、加熱状態や破裂状態もすべて保持されて相手側で降ってくる。
    </p>
    <p>「ぶきみなまめ」や「なぞのまめ」などの要らない豆は、「ばくだんまめ」を使って…</p>
    <ContentImage src={Bomb1Pic} alt="あぶない豆1" />
    <p>相手側へ吹き飛ばしてしまおう！</p>
    <ContentImage src={Bomb2Pic} alt="あぶない豆2" />
    <p>画面下半分の画面外に出た豆やポップコーンは、相手側へ送られることなく廃棄される。</p>

    <Space size={2} />

    <h2>注文</h2>
    <p>
      ポップコーンを3個食べるごとに、画面右側に注文パネルが出現する。欲しい豆やアイテムをクリックすると、選択したものが画面上から降ってくる。
    </p>
    <ContentImage src={OrderPic} alt="注文" />
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
    <ContentImage src={RushPic} alt="ラッシュ発生" />
  </>
);

export default Section;

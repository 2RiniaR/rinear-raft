import dayjs from "dayjs";
import Image from "next/image";
import { MaterialTemplate } from "templates";
import { ExternalLink } from "functions/link";
import { Material } from "content";
import stage1Pic from "public/contents/materials/busters-mission/stage1.webp";
import stage2Pic from "public/contents/materials/busters-mission/stage2.webp";
import stage3_1Pic from "public/contents/materials/busters-mission/stage3-1.webp";
import stage3_2Pic from "public/contents/materials/busters-mission/stage3-2.webp";
import stage3_3Pic from "public/contents/materials/busters-mission/stage3-3.webp";
import resultPic from "public/contents/materials/busters-mission/result.webp";

export const content: Material = {
  id: "busters-mission",
  title: "Busters Mission",
  image: stage3_2Pic,
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2018-09-05").toDate(),
  description: "敵の攻撃を避けながら、ステージ内にいるすべての敵を倒していく2Dアクションゲーム。"
};

const Page = () => (
  <MaterialTemplate content={content}>
    <h1>紹介動画</h1>

    <iframe
      src="https://www.youtube.com/embed/YzqFIVbV4-c"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />

    <h1>ダウンロード</h1>

    <p>
      ゲームのファイルを
      <ExternalLink href="https://www.dropbox.com/sh/h23lhcyl0cwjlh5/AADIuiV0vj4hXrInV_j6YmOqa?dl=0">ここ</ExternalLink>
      からダウンロードしてください。
    </p>

    <h1>ルール</h1>

    <p>
      ステージ上のすべての敵を倒すとステージが進み、プレイヤーのライフが回復します。
      最後のステージに待ち構えるボスを倒すとクリア。
      クリアすると、残りライフと経過時間からスコアが算出されます。ハイスコアを狙おう！
      ただし、残りライフが0になるとゲームオーバー。ライフは敵の攻撃に当たると減少します。
    </p>

    <h2>操作方法（メニュー時）</h2>
    <ul>
      <li>↑↓←→：カーソル移動</li>
      <li>Z：決定</li>
    </ul>

    <h2>操作方法（ゲーム時）</h2>
    <ul>
      <li>↑↓←→：移動</li>
      <li>Z：剣を振る</li>
      <li>M：ポーズメニュー</li>
    </ul>

    <h1>攻略データ</h1>

    <h2>ステージ1</h2>
    <Image src={stage1Pic} alt="ステージ1" />
    <p>すべての敵を倒すとクリア。</p>
    <p>
      プレイヤーを追尾し、剣で近接攻撃してくる敵が7体いる。 なるべくダメージを受けないように、慎重に攻撃していこう。
    </p>

    <h2>ステージ2</h2>
    <Image src={stage2Pic} alt="ステージ2" />
    <p>すべての敵を倒すとクリア。</p>
    <p>剣で攻撃する敵に加えて、プレイヤーの周りを旋回しながら銃で遠距離攻撃してくる敵が現れる。</p>
    <p>中央の壁を使って弾を防いで、射撃後の隙に攻撃しよう。</p>

    <h2>ステージ3（ボス）</h2>
    <p>ボスステージ。ボスの体力を0にするとクリア。</p>
    <Image src={stage3_1Pic} alt="ステージ3" />
    <p>ボスは「プレイヤーの追尾」と「攻撃」を交互に繰り返す。</p>
    <p>攻撃は3種類あり、それぞれ予備動作が違うため、発動前に判別が可能。</p>
    <ul>
      <li>杖を振りかぶる動作→薙ぎ払い</li>
      <li>炎を溜める動作→衝撃波</li>
      <li>杖を高く掲げる動作→メテオ</li>
    </ul>
    <p>どの攻撃が来るかを見極めて回避しよう。</p>
    <Image src={stage3_2Pic} alt="ステージ3 ボス覚醒後" />
    <p>ボスの残りHPが一定以下になると、大技とともに形態変化を行う。</p>
    <p>
      この大技ではボスが杖を掲げ続け、フィールド全体に大量のメテオが降ってくる。また、この大技の発動中はボスへ攻撃が与えられないため、避けることに専念しよう。
    </p>
    <Image src={stage3_3Pic} alt="ステージ3 ボス覚醒後2" />
    <p>
      形態変化以降はボスの各攻撃が強化される。さらに、大技の直後はフィールド上にメテオの炎が残った状態で戦うことになるため、炎がない場所にボスを誘導して戦いやすくしよう。
    </p>
    <Image src={resultPic} alt="リザルト" />
    <p>ボスを倒すとクリアとなり、クリア時間と残りライフからスコアが計算される。</p>

    <h1>使用ツール</h1>

    <h2>言語・ライブラリ</h2>
    <ul>
      <li>C++（Microsoft Visual C++）</li>
      <li>
        <ExternalLink href="https://dxlib.xsrv.jp/">DXライブラリ</ExternalLink>
      </li>
    </ul>
  </MaterialTemplate>
);

export default Page;

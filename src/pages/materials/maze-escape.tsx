import dayjs from "dayjs";
import Image from "next/image";
import { MaterialTemplate } from "templates";
import { ExternalLink } from "functions/link";
import stage1Pic from "public/contents/materials/maze-escape/stage1.webp";
import stage2Pic from "public/contents/materials/maze-escape/stage2.webp";
import stage3Pic from "public/contents/materials/maze-escape/stage3.webp";
import { Material } from "content";

export const content: Material = {
  id: "maze-escape",
  title: "迷宮脱出",
  image: stage1Pic,
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2016-10-18").toDate(),
  description: "上下左右にプレイヤーを移動し、制限時間以内にゴールを目指す2Dアクション脱出ゲーム。"
};

const Page = () => (
  <MaterialTemplate content={content}>
    <h1>紹介動画</h1>

    <iframe
      src="https://www.youtube.com/embed/WWZ9mK9vg1M"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />

    <h1>ダウンロード</h1>

    <p>
      ゲームのファイルを
      <ExternalLink href="https://www.dropbox.com/sh/gwrs6nz2tadpmz0/AADOYp5cqjAhW-ZYqsSsYehQa?dl=0">ここ</ExternalLink>
      からダウンロードしてください。
    </p>

    <h1>ルール</h1>

    <p>
      プレイヤーを上下左右に移動し、制限時間以内にステージのゴールに触ればクリア。
      ただし、残り時間が0になるか残りライフが0になるとゲームオーバー。ライフは「針山」や「マグマ」に触れると1だけ減少します。
      ステージ内に散らばっているアイテムを駆使してクリア・高スコアを狙おう！
    </p>

    <h2>操作方法（メニュー時）</h2>
    <ul>
      <li>↑↓←→：カーソル移動</li>
      <li>Z：決定</li>
    </ul>

    <h2>操作方法（ゲーム時）</h2>
    <ul>
      <li>↑↓←→：移動</li>
      <li>左Shift + ↑↓←→：低速移動</li>
      <li>Space：ポーズメニュー</li>
    </ul>

    <h1>攻略データ</h1>

    <h2>ステージ1</h2>
    <Image src={stage1Pic} alt="ステージ1" />
    <p>
      泥と針によるギミックがメインのステージ。スピードアップパネルによる加速や、針無効のアイテムが設置されているため、利用しよう。
    </p>

    <h2>ステージ2</h2>
    <Image src={stage2Pic} alt="ステージ2" />
    <p>
      氷のギミックがメインのステージ。氷の上では急に止まれないため、勢い余って針を踏まないように低速移動を活用しよう。
    </p>
    <p>
      また、針が大量に登場する場所は、ダメージ後の無敵時間を利用して一気に駆け抜けてしまうのもアリ。もしくは、氷を一定時間無効化できるアイテムが設置されているため、これを利用して安全に進もう。
    </p>

    <h2>ステージ3</h2>
    <Image src={stage3Pic} alt="ステージ3" />
    <p>
      マグマとベルトコンベアのギミックがメインの最難関ステージ。足場が非常に狭い上に不安定なので、正確なコントロールが求められる。
    </p>
    <p>
      マグマの上では常にダメージを受け続けるうえ、移動速度も低下するため無理矢理突っ切ることはできない。ステージの構造やアイテムの場所を把握し、時には慎重に、時にはダメージ覚悟でゴールを目指そう。
    </p>

    <h1>使用ツール</h1>

    <h2>言語・ライブラリ等</h2>
    <ul>
      <li>C++（Microsoft Visual C++）</li>
      <li>
        <ExternalLink href="https://dxlib.xsrv.jp/">DXライブラリ</ExternalLink>
      </li>
    </ul>
  </MaterialTemplate>
);

export default Page;

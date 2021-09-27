import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import styles from "../projects.module.scss";
import { ChapterPoint, ContentPageProps, ProjectContent } from "lib/contents";
import ExternalLink from "components/functions/link/ExternalLink";
import Space from "components/parts/Space";

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {
    movie: { name: "紹介動画", ref: useRef(null) },
    download: { name: "ダウンロード", ref: useRef(null) },
    rule: { name: "ルール", ref: useRef(null) },
    strategy: { name: "攻略データ", ref: useRef(null) },
    tools: { name: "使用ツール", ref: useRef(null) },
    background: { name: "裏話", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <main className={styles.content}>
      <section ref={refs.download.ref}>
        <h1>{refs.download.name}</h1>
        <p>
          ゲームのファイルを
          <ExternalLink href="https://www.dropbox.com/sh/h23lhcyl0cwjlh5/AADIuiV0vj4hXrInV_j6YmOqa?dl=0">
            ここ
          </ExternalLink>
          からダウンロードしてください。
        </p>
      </section>

      <section ref={refs.rule.ref}>
        <h1>{refs.rule.name}</h1>
        <p>
          ステージ上のすべての敵を倒すとステージが進み、プレイヤーのライフが回復します。
          最後のステージに待ち構えるボスを倒すとクリア。
          クリアすると、残りライフと経過時間からスコアが算出されます。ハイスコアを狙おう！
          ただし、残りライフが0になるとゲームオーバー。ライフは敵の攻撃に当たると減少します。
        </p>
        <Space size={2} />
        <h2>操作方法（メニュー時）</h2>
        <ul>
          <li>↑↓←→：カーソル移動</li>
          <li>Z：決定</li>
        </ul>
        <Space size={2} />
        <h2>操作方法（ゲーム時）</h2>
        <ul>
          <li>↑↓←→：移動</li>
          <li>Z：剣を振る</li>
          <li>M：ポーズメニュー</li>
        </ul>
      </section>

      <section ref={refs.tools.ref}>
        <h1>{refs.tools.name}</h1>
        <h2>言語・ライブラリ</h2>
        <ul>
          <li>C++（Microsoft Visual C++）</li>
          <li>DXライブラリ（https://dxlib.xsrv.jp/）</li>
        </ul>
      </section>
    </main>
  );
};

const bustersMission: ProjectContent = {
  genre: "projects",
  id: "busters-mission",
  title: "Busters Mission",
  thumbnailsPath: [
    "/contents/projects/busters-mission/stage3_2.jpg",
    "/contents/projects/busters-mission/title.jpg",
    "/contents/projects/busters-mission/stage1.jpg",
    "/contents/projects/busters-mission/stage2.jpg"
  ],
  updatedAt: dayjs("2018-09-05"),
  releasedAt: dayjs("2018-09-05"),
  description: "敵の攻撃を避けながら、ステージ内にいるすべての敵を倒していく2Dアクションゲーム。",
  Page
};

export default bustersMission;

import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import styles from "../projects.module.scss";
import ComingSoon from "components/parts/ComingSoon";
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
      <section ref={refs.movie.ref}>
        <h1>{refs.movie.name}</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WWZ9mK9vg1M"
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
          <ExternalLink href="https://www.dropbox.com/sh/gwrs6nz2tadpmz0/AADOYp5cqjAhW-ZYqsSsYehQa?dl=0">
            ここ
          </ExternalLink>
          からダウンロードしてください。
        </p>
      </section>

      <section ref={refs.rule.ref}>
        <h1>{refs.rule.name}</h1>
        <p>
          プレイヤーを上下左右に移動し、制限時間以内にステージのゴールに触ればクリア。
          ただし、残り時間が0になるか残りライフが0になるとゲームオーバー。ライフは「針山」や「マグマ」に触れると1だけ減少します。
          ステージ内に散らばっているアイテムを駆使してクリア・高スコアを狙おう！
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
          <li>左Shift + ↑↓←→：低速移動</li>
          <li>Space：ポーズメニュー</li>
        </ul>
      </section>

      <section ref={refs.strategy.ref}>
        <h1>{refs.strategy.name}</h1>
        <ComingSoon />
      </section>

      <section ref={refs.tools.ref}>
        <h1>{refs.tools.name}</h1>
        <h2>言語・ライブラリ</h2>
        <ul>
          <li>C++（Microsoft Visual C++）</li>
          <li>DXライブラリ（https://dxlib.xsrv.jp/）</li>
        </ul>
      </section>

      <section ref={refs.background.ref}>
        <h1>{refs.background.name}</h1>
        <ComingSoon />
      </section>
    </main>
  );
};

const mazeEscape: ProjectContent = {
  genre: "projects",
  id: "maze-escape",
  title: "迷宮脱出",
  thumbnailsPath: [
    "/contents/projects/maze-escape/stage1.jpg",
    "/contents/projects/maze-escape/title.jpg",
    "/contents/projects/maze-escape/stage2.jpg",
    "/contents/projects/maze-escape/result.jpg"
  ],
  updatedAt: dayjs("2016-10-18"),
  releasedAt: dayjs("2021-04-30"),
  description: "上下左右にプレイヤーを移動し、制限時間以内にゴールを目指す2Dアクション脱出ゲーム。",
  Page
};

export default mazeEscape;

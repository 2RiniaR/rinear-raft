import dayjs from "dayjs";
import React from "react";
import { LetterTemplate } from "templates";
import { Letter } from "content";
import thumbnailPic from "public/general/thumbnail-default.webp";

const dummyText = "これはダミーテキストです。".repeat(10);

export const content: Letter = {
  id: "sample",
  title: "デザインサンプル",
  image: thumbnailPic,
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  description: "デザインのサンプル。"
};

const Page = () => (
  <LetterTemplate content={content}>
    <h1>見出し</h1>
    <p>{dummyText}</p>
    <h2>サブヘッダー</h2>
    <p>{dummyText}</p>
    <h3>詳細ヘッダー</h3>
    <p>{dummyText}</p>
    <h1>段落</h1>
    <p>{dummyText}</p>
    <p>{dummyText}</p>
    <p>{dummyText}</p>
    <h1>リスト</h1>
    <h2>順序なしリスト</h2>
    <p>{dummyText}</p>
    <ul>
      <li>要素1</li>
      <li>要素2</li>
      <li>
        要素3
        <ul>
          <li>要素3-1</li>
          <li>要素3-2</li>
          <li>
            要素3-3
            <ul>
              <li>要素3-3-1</li>
              <li>要素3-3-2</li>
              <li>要素3-3-3</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <p>{dummyText}</p>
    <h2>順序付きリスト</h2>
    <p>{dummyText}</p>
    <ol>
      <li>要素1</li>
      <li>要素2</li>
      <li>
        要素3
        <ol>
          <li>要素3-1</li>
          <li>要素3-2</li>
          <li>
            要素3-3
            <ol>
              <li>要素3-3-1</li>
              <li>要素3-3-2</li>
              <li>要素3-3-3</li>
            </ol>
          </li>
        </ol>
      </li>
    </ol>
    <p>{dummyText}</p>
    <h1>詳細</h1>
    <dl>
      <dt>要素1</dt>
      <dd>{dummyText}</dd>
      <dt>要素2</dt>
      <dd>{dummyText}</dd>
      <dt>要素3</dt>
      <dd>{dummyText}</dd>
    </dl>
    <h1>引用</h1>
    <h2>インライン引用</h2>
    <p>
      このとき、誰かが<q>引用文</q>と言いました。
    </p>
    <h2>ブロック引用</h2>
    <blockquote>{dummyText}</blockquote>
    <h1>コードブロック</h1>
    <h2>インラインコード</h2>
    <p>
      この時、関数<code>Hoge(fuga)</code>を実行します。
    </p>
    <h2>ブロックコード</h2>
    <pre>
      <code>
        {`for i in range(100):
  if i % 3 == 0:
      print("Fizz")
  elif i % 5 == 0:
      print("Buzz")
  else:
      print(i)
`}
      </code>
    </pre>
    <h1>テキスト装飾</h1>
    <p>
      これは絵文字
      <span role="img" aria-label="拍手">
        👏
      </span>
      です。
    </p>
    <p>
      これは<u>下線</u>です。
    </p>
    <p>
      これは<b>太字</b>です。
    </p>
    <p>
      これは<i>斜体</i>です。
    </p>
    <p>
      これは
      <del>打ち消し線</del>
      です。
    </p>
    <p>
      これは<strong>強調</strong>です。
    </p>
  </LetterTemplate>
);

export default Page;

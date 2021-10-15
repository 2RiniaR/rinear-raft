import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import styles from "../../contents.module.scss";
import {
  Chapter,
  Code,
  Description,
  DescriptionList,
  Emoji,
  Heading,
  ListItem,
  OrderedList,
  Paragraph,
  Quotation,
  TextEffect,
  UnorderedList
} from "content-parts";
import { ChapterPoint, ContentPageProps, TalkContent } from "lib/contents";
import thumbnailPic from "public/contents/projects/rinear-official-site/HomePage1.webp";

const dummyText = "これはダミーテキストです。".repeat(10);

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {
    heading: { name: "ヘッダー", ref: useRef(null) },
    document: { name: "文章", ref: useRef(null) },
    list: { name: "リスト", ref: useRef(null) },
    description: { name: "説明", ref: useRef(null) },
    quotation: { name: "引用", ref: useRef(null) },
    code: { name: "コード", ref: useRef(null) },
    text: { name: "テキスト装飾", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <main className={styles.content}>
      <Chapter title={refs.heading.name} jumpRef={refs.heading.ref}>
        <Paragraph>{dummyText}</Paragraph>
        <Heading level="sub">サブヘッダー</Heading>
        <Paragraph>{dummyText}</Paragraph>
        <Heading level="detail">詳細ヘッダー</Heading>
        <Paragraph>{dummyText}</Paragraph>
      </Chapter>

      <Chapter title={refs.document.name} jumpRef={refs.document.ref}>
        <Paragraph>{dummyText}</Paragraph>
        <Paragraph>{dummyText}</Paragraph>
        <Paragraph>{dummyText}</Paragraph>
      </Chapter>

      <Chapter title={refs.list.name} jumpRef={refs.list.ref}>
        <Heading level="sub">順序なしリスト</Heading>
        <Paragraph>{dummyText}</Paragraph>
        <UnorderedList>
          <ListItem>要素1</ListItem>
          <ListItem>要素2</ListItem>
          <ListItem>
            要素3
            <UnorderedList>
              <ListItem>要素3-1</ListItem>
              <ListItem>要素3-2</ListItem>
              <ListItem>
                要素3-3
                <UnorderedList>
                  <ListItem>要素3-3-1</ListItem>
                  <ListItem>要素3-3-2</ListItem>
                  <ListItem>要素3-3-3</ListItem>
                </UnorderedList>
              </ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>
        <Paragraph>{dummyText}</Paragraph>

        <Heading level="sub">順序付きリスト</Heading>
        <Paragraph>{dummyText}</Paragraph>
        <OrderedList>
          <ListItem>要素1</ListItem>
          <ListItem>要素2</ListItem>
          <ListItem>
            要素3
            <OrderedList>
              <ListItem>要素3-1</ListItem>
              <ListItem>要素3-2</ListItem>
              <ListItem>
                要素3-3
                <OrderedList>
                  <ListItem>要素3-3-1</ListItem>
                  <ListItem>要素3-3-2</ListItem>
                  <ListItem>要素3-3-3</ListItem>
                </OrderedList>
              </ListItem>
            </OrderedList>
          </ListItem>
        </OrderedList>
        <Paragraph>{dummyText}</Paragraph>
      </Chapter>

      <Chapter title={refs.description.name} jumpRef={refs.description.ref}>
        <DescriptionList>
          <Description name="要素1">{dummyText}</Description>
          <Description name="要素2">{dummyText}</Description>
          <Description name="要素3">{dummyText}</Description>
        </DescriptionList>
      </Chapter>

      <Chapter title={refs.quotation.name} jumpRef={refs.quotation.ref}>
        <Heading level="sub">インライン引用</Heading>
        このとき、誰かが<Quotation style="inline">引用文</Quotation>と言いました。
        <Heading level="sub">ブロック引用</Heading>
        <Quotation style="block">引用文</Quotation>
      </Chapter>

      <Chapter title={refs.code.name} jumpRef={refs.code.ref}>
        <Heading level="sub">インラインコード</Heading>
        この時、関数<Code style="inline">Hoge(fuga)</Code>を実行します。
        <Heading level="sub">ブロックコード</Heading>
        <Code style="block">
          {`for i in range(100):
    if i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)
`}
        </Code>
      </Chapter>

      <Chapter title={refs.text.name} jumpRef={refs.text.ref}>
        絵文字
        <Emoji characters="👏" label="拍手" />, <TextEffect underline>下線</TextEffect>,{" "}
        <TextEffect bold>太字</TextEffect>, <TextEffect italic>斜体</TextEffect>,{" "}
        <TextEffect strikethrough>打ち消し線</TextEffect>
      </Chapter>
    </main>
  );
};

const designSample: TalkContent = {
  genre: "talks",
  id: "design-sample",
  index: 0,
  title: "デザインサンプル",
  thumbnail: thumbnailPic,
  updatedAt: dayjs("2021-10-10"),
  description: "デザインのサンプル。",
  Page
};

export default designSample;

import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import { Chapter, ContentPage } from "models/content";
import { LetterSettings } from "repositories";
import {
  ChapterPoint,
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
} from "writers";
import thumbnailPic from "public/general/thumbnail-default.webp";

const dummyText = "これはダミーテキストです。".repeat(10);

const Page: ContentPage = ({ setChapters }) => {
  const refs: { [name: string]: Chapter } = {
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
    <>
      <ChapterPoint title={refs.heading.name} jumpRef={refs.heading.ref}>
        <Paragraph>{dummyText}</Paragraph>
        <Heading level="sub">サブヘッダー</Heading>
        <Paragraph>{dummyText}</Paragraph>
        <Heading level="detail">詳細ヘッダー</Heading>
        <Paragraph>{dummyText}</Paragraph>
      </ChapterPoint>

      <ChapterPoint title={refs.document.name} jumpRef={refs.document.ref}>
        <Paragraph>{dummyText}</Paragraph>
        <Paragraph>{dummyText}</Paragraph>
        <Paragraph>{dummyText}</Paragraph>
      </ChapterPoint>

      <ChapterPoint title={refs.list.name} jumpRef={refs.list.ref}>
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
      </ChapterPoint>

      <ChapterPoint title={refs.description.name} jumpRef={refs.description.ref}>
        <DescriptionList>
          <Description name="要素1">{dummyText}</Description>
          <Description name="要素2">{dummyText}</Description>
          <Description name="要素3">{dummyText}</Description>
        </DescriptionList>
      </ChapterPoint>

      <ChapterPoint title={refs.quotation.name} jumpRef={refs.quotation.ref}>
        <Heading level="sub">インライン引用</Heading>
        このとき、誰かが<Quotation style="inline">引用文</Quotation>と言いました。
        <Heading level="sub">ブロック引用</Heading>
        <Quotation style="block">引用文</Quotation>
      </ChapterPoint>

      <ChapterPoint title={refs.code.name} jumpRef={refs.code.ref}>
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
      </ChapterPoint>

      <ChapterPoint title={refs.text.name} jumpRef={refs.text.ref}>
        絵文字
        <Emoji characters="👏" label="拍手" />, <TextEffect underline>下線</TextEffect>,{" "}
        <TextEffect bold>太字</TextEffect>, <TextEffect italic>斜体</TextEffect>,{" "}
        <TextEffect strikethrough>打ち消し線</TextEffect>
      </ChapterPoint>
    </>
  );
};

const designSample: LetterSettings = {
  genre: "letter",
  id: "design-sample",
  index: 0,
  title: "デザインサンプル",
  thumbnail: thumbnailPic,
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  description: "デザインのサンプル。",
  private: true,
  Page
};

export default designSample;

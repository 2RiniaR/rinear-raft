import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import { ContentPage } from "models/content";
import { MaterialSettings } from "repositories";
import page1Pic from "public/contents/materials/kimifeel/page1.webp";
import page2Pic from "public/contents/materials/kimifeel/page2.webp";
import page3Pic from "public/contents/materials/kimifeel/page3.webp";
import { ChapterPoint, ContentImage, ExternalLink, Heading, ListItem, OrderedList, Paragraph, Space } from "writers";

const Page: ContentPage = ({ setChapters }) => {
  const refs = {
    intro: { name: "紹介", ref: useRef(null) },
    howToUse: { name: "使い方", ref: useRef(null) },
    about: { name: "この作品について", ref: useRef(null) },
    implement: { name: "どのように作られているか", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <>
      <ChapterPoint title={refs.intro.name} jumpRef={refs.intro.ref}>
        <ContentImage src={page2Pic} alt="紹介1" />
        <Paragraph>
          「キミフィール」とは、他の人に自分のプロフィールを書いてもらえるサービスです。 現在はdiscord
          botとして実装されています。
        </Paragraph>
        <Paragraph>
          「誰でも気軽に作れて、気軽に内容を書き合えるwiki」をイメージしています。
          「200字まで書けるカード」という単位で内容を構成することで、ページや文書の面倒なフォーマットをサービス側に委ねています。
        </Paragraph>
        <Paragraph>
          本来wikiといえば、人物だけでなく様々なコンテンツの説明を記述できるものですが、現在はプロフィールのみに絞っています。
        </Paragraph>
        <Space size={1} />

        <ContentImage src={page3Pic} alt="紹介2" />
        <Paragraph>
          プロフィールを書いてもらう流れとしては、
          <OrderedList>
            <ListItem>自分のプロフィールを誰かが書いてくれる</ListItem>
            <ListItem>送られてきたプロフィールをチェックし、承認 or 却下 を決定する</ListItem>
            <ListItem>承認すれば、自分のプロフィールの一部となる</ListItem>
          </OrderedList>
          と言った感じです。
        </Paragraph>
        <Paragraph>
          他人にプロフィールを書いてもらえるとは言っても、なにか不都合な内容を載せられたりすると困ってしまいますよね。
          そこで、プロフィールを掲載する際にレビューができる機能を取り入れました。
        </Paragraph>
      </ChapterPoint>

      <ChapterPoint title={refs.howToUse.name} jumpRef={refs.howToUse.ref}>
        <Paragraph>
          すべての機能は
          <ExternalLink href="https://kimifile.notion.site/473ae50d379048a39fe76437bf1c4b1c">ガイド</ExternalLink>
          に載っています。
        </Paragraph>

        <Heading level="sub">1. ユーザーを登録する</Heading>
        <Heading level="sub">2. 自分のプロフィールを書く</Heading>
        <Heading level="sub">3. 他人のプロフィールを書く</Heading>
        <Heading level="sub">4. 送信したプロフィールを見る</Heading>
        <Heading level="sub">5. 届いたプロフィールを評価する</Heading>
        <Heading level="sub">6. プロフィールを検索する</Heading>
      </ChapterPoint>

      <ChapterPoint title={refs.about.name} jumpRef={refs.about.ref}>
        <Heading level="sub">始まり</Heading>
        <Heading level="sub">試行錯誤</Heading>
        <Heading level="sub">制作</Heading>
        <Heading level="sub">今後どうする？</Heading>
      </ChapterPoint>

      <ChapterPoint title={refs.implement.name} jumpRef={refs.implement.ref}></ChapterPoint>
    </>
  );
};

const kimifeel: MaterialSettings = {
  genre: "material",
  id: "kimifeel",
  title: "キミフィール",
  thumbnail: page1Pic,
  thumbnails: [page1Pic, page2Pic, page3Pic],
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2022-02-16").toDate(),
  description: "周りの人々に自分のプロフィールを書いてもらえるサービス。",
  Page
};

export default kimifeel;

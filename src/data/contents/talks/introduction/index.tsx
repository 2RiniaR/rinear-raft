import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import AboutHomePage from "./AboutHomePage";
import AboutRineaR from "./AboutRineaR";
import AboutExternalServices from "./AboutExternalServices";
import AboutTechnology from "./AboutTechnology";
import AboutCatchphrase from "./AboutCatchphrase";
import { Chapter } from "content-parts";
import { ChapterPoint, ContentPageProps, TalkContent } from "lib/contents";
import thumbnailPic from "public/contents/projects/rinear-official-site/HomePage1.webp";

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {
    aboutHomePage: { name: "ホームページ設立おめでとうございます！", ref: useRef(null) },
    aboutRineaR: { name: "RineaRとは？", ref: useRef(null) },
    aboutExternalServices: { name: "外部サービスのアカウントとかありますか？", ref: useRef(null) },
    aboutTechnology: { name: "技術的なことって「Talks」で話すんですか？", ref: useRef(null) },
    aboutCatchphrase: { name: "「この筏は私を、どこへ連れて行くんだろう。」って何ですか？", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <>
      <Chapter title={refs.aboutHomePage.name} jumpRef={refs.aboutHomePage.ref}>
        <AboutHomePage />
      </Chapter>

      <Chapter title={refs.aboutRineaR.name} jumpRef={refs.aboutRineaR.ref}>
        <AboutRineaR />
      </Chapter>

      <Chapter title={refs.aboutExternalServices.name} jumpRef={refs.aboutExternalServices.ref}>
        <AboutExternalServices />
      </Chapter>

      <Chapter title={refs.aboutTechnology.name} jumpRef={refs.aboutTechnology.ref}>
        <AboutTechnology />
      </Chapter>

      <Chapter title={refs.aboutCatchphrase.name} jumpRef={refs.aboutCatchphrase.ref}>
        <AboutCatchphrase />
      </Chapter>
    </>
  );
};

const introduction: TalkContent = {
  genre: "talks",
  id: "introduction",
  index: 1,
  title: "ホームページ、爆誕！",
  thumbnail: thumbnailPic,
  updatedAt: dayjs("2021-09-01"),
  description: "RineaRでの最初のTALK。",
  Page
};

export default introduction;

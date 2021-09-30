import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import styles from "../projects.module.scss";
import Tools from "./Tools";
import Background from "./Background";
import Story from "./Story";
import Pages from "./Pages";
import { Chapter } from "components/parts/contents";
import { ChapterPoint, ContentPageProps, ProjectContent } from "lib/contents";

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {
    story: { name: "制作経緯", ref: useRef(null) },
    pages: { name: "ページ構成", ref: useRef(null) },
    tools: { name: "使用ツール", ref: useRef(null) },
    background: { name: "裏話", ref: useRef(null) }
  };

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <main className={styles.content}>
      <Chapter title={refs.story.name} jumpRef={refs.story.ref}>
        <Story />
      </Chapter>

      <Chapter title={refs.pages.name} jumpRef={refs.pages.ref}>
        <Pages />
      </Chapter>

      <Chapter title={refs.tools.name} jumpRef={refs.tools.ref}>
        <Tools />
      </Chapter>

      <Chapter title={refs.background.name} jumpRef={refs.background.ref}>
        <Background />
      </Chapter>
    </main>
  );
};

const rinearOfficialSite: ProjectContent = {
  genre: "projects",
  id: "rinear-official-site",
  title: "RineaR公式サイト",
  thumbnailsPath: [
    "/contents/projects/rinear-official-site/HomePage1.jpg",
    "/contents/projects/rinear-official-site/HomePage2.jpg",
    "/contents/projects/rinear-official-site/HomePage3.jpg",
    "/contents/projects/rinear-official-site/HomePage4.jpg"
  ],
  updatedAt: dayjs("2021-07-24"),
  releasedAt: dayjs("2021-04-30"),
  description: "RineaRのプロジェクトや投稿を公開するホームページ。Riniaが活動拠点とする筏。",
  Page
};

export default rinearOfficialSite;

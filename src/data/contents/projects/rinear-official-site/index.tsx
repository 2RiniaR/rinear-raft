import dayjs from "dayjs";
import { ProjectContent } from "lib/contents";

const Page = (): JSX.Element => (
  <div>
    <h2>RineaR公式サイト</h2>
  </div>
);

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

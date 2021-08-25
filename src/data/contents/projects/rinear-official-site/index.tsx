import dayjs from "dayjs";
import { ProjectContent } from "src/lib/contents";

const Page = (): JSX.Element => (
  <div>
    <h2>RineaR公式サイト</h2>
  </div>
);

const rinearOfficialSite: ProjectContent = {
  genre: "projects",
  id: "rinear-official-site",
  title: "RineaR公式サイト",
  thumbnailsPath: ["/img/test.png", "/img/test.png", "/img/test.png", "/img/test.png"],
  updatedAt: dayjs("2021-07-24"),
  releasedAt: dayjs("2021-04-30"),
  description: "RineaRのプロジェクトや投稿を公開するホームページ。Riniaが活動拠点とする筏。",
  Page
};

export default rinearOfficialSite;

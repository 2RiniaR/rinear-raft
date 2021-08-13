import dayjs from "dayjs";
import { ProjectContent } from "src/lib/contents";
import { getComponentTemplate } from "src/lib/component";

const Page = getComponentTemplate(() => (
  <div>
    <h2>RineaR公式サイト</h2>
  </div>
));

const rinearOfficialSite: ProjectContent = {
  genre: "projects",
  id: "rinear-official-site",
  title: "RineaR公式サイト",
  thumbnailPath: "/img/test.png",
  updatedAt: dayjs("2021-07-24"),
  description: "RineaRのプロジェクトや投稿を公開するホームページ。Riniaが活動拠点とする筏。",
  Page
};

export default rinearOfficialSite;

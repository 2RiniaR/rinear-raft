import dayjs from "dayjs";
import { ProjectContent } from "src/lib/contents";

const page: JSX.Element = (
  <div>
    <h2>RineaR公式サイト</h2>
  </div>
);

const rinearOfficialSite: ProjectContent = {
  genre: "projects",
  id: "rinear-official-site",
  title: "Rinear公式サイト",
  thumbnailPath: "/test.png",
  updatedAt: dayjs("2021-05-29"),
  page: page
};

export default rinearOfficialSite;

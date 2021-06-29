import dayjs from "dayjs";
import { ProjectContentForm } from "..";

const page: JSX.Element = (
  <div>
    <h2>RineaR公式サイト</h2>
  </div>
);

const rinearOfficialSite: ProjectContentForm = {
  genre: "projects",
  title: "Rinear公式サイト",
  description: "",
  releasedAt: dayjs("2021-05-29"),
  updatedAt: dayjs("2021-05-29"),
  tags: ["web-site", "rinear-official-site"],
  page: page
};

export default rinearOfficialSite;

import dayjs from "dayjs";
import { ProjectContentForm } from "..";

const page: JSX.Element = (
  <div>
    <h2>Busters Mission</h2>
  </div>
);

const bustersMission: ProjectContentForm = {
  genre: "projects",
  title: "Busters Mission",
  description: "",
  releasedAt: dayjs("2021-05-29"),
  updatedAt: dayjs("2021-05-29"),
  tags: ["game", "busters-mission"],
  page: page
};

export default bustersMission;

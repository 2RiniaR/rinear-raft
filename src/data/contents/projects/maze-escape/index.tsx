import dayjs from "dayjs";
import { ProjectContentForm } from "..";

const page: JSX.Element = (
  <div>
    <h2>迷宮脱出</h2>
  </div>
);

const mazeEscape: ProjectContentForm = {
  genre: "projects",
  title: "迷宮脱出",
  description: "",
  releasedAt: dayjs("2021-05-29"),
  updatedAt: dayjs("2021-05-29"),
  tags: ["game", "maze-escape"],
  page: page
};

export default mazeEscape;

import dayjs from "dayjs";
import { ProjectContentForm } from "..";

const page: JSX.Element = (
  <div>
    <h2>エライさんbot</h2>
  </div>
);

const marvelous: ProjectContentForm = {
  genre: "projects",
  title: "エライさんbot",
  description: "",
  releasedAt: dayjs("2021-05-29"),
  updatedAt: dayjs("2021-05-29"),
  tags: ["service", "discord-bot", "marvelous"],
  page: page
};

export default marvelous;

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
  releasedAt: new Date(2021, 5, 29),
  updatedAt: new Date(2021, 5, 29),
  tags: ["service", "discord-bot", "marvelous"],
  page: page
};

export default marvelous;

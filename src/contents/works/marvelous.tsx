import { ContentForm } from "src/contents";

const page: JSX.Element = (
  <div>
    <h2>エライさんbot</h2>
  </div>
);

const marvelous: ContentForm = {
  title: "エライさんbot",
  createdAt: new Date(2021, 5, 29),
  updatedAt: new Date(2021, 5, 29),
  tags: ["service", "discord-bot", "marvelous"],
  page: page
};

export default marvelous;

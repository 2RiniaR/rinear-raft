import { ProjectContentForm } from ".";

const page: JSX.Element = (
  <div>
    <h2>デバッグ用4</h2>
  </div>
);

const debug4: ProjectContentForm = {
  genre: "projects",
  title: "デバッグ用4",
  description: "",
  releasedAt: new Date(2021, 5, 29),
  updatedAt: new Date(2020, 12, 4),
  tags: ["game", "popcorn-chef"],
  page: page
};

export default debug4;

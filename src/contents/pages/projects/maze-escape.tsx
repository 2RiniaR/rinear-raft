import { ProjectContentForm } from "src/contents/lib/projects/form";

const page: JSX.Element = (
  <div>
    <h2>迷宮脱出</h2>
  </div>
);

const mazeEscape: ProjectContentForm = {
  genre: "projects",
  title: "迷宮脱出",
  description: "",
  releasedAt: new Date(2021, 5, 29),
  updatedAt: new Date(2021, 5, 29),
  tags: ["game", "maze-escape"],
  page: page
};

export default mazeEscape;

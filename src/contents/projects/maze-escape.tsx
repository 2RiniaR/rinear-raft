import { ContentForm } from "src/contents";

const page: JSX.Element = (
  <div>
    <h2>迷宮脱出</h2>
  </div>
);

const mazeEscape: ContentForm = {
  title: "迷宮脱出",
  createdAt: new Date(2021, 5, 29),
  updatedAt: new Date(2021, 5, 29),
  tags: ["game", "maze-escape"],
  page: page
};

export default mazeEscape;

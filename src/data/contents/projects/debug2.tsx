import { ProjectContentForm } from ".";

const page: JSX.Element = (
  <div>
    <h2>デバッグ用2</h2>
  </div>
);

const debug2: ProjectContentForm = {
  genre: "projects",
  title: "デバッグ用2",
  description: "",
  releasedAt: new Date(2021, 5, 29),
  updatedAt: new Date(2021, 6, 12),
  tags: ["game", "popcorn-chef"],
  page: page
};

export default debug2;

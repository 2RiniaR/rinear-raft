import { ProjectContentForm } from ".";

const page: JSX.Element = (
  <div>
    <h2>デバッグ用1</h2>
  </div>
);

const debug1: ProjectContentForm = {
  genre: "projects",
  title: "デバッグ用1",
  description: "",
  releasedAt: new Date(2021, 6, 1),
  updatedAt: new Date(2021, 6, 1),
  tags: ["game", "popcorn-chef"],
  page: page
};

export default debug1;

import { ProjectContentForm } from ".";

const page: JSX.Element = (
  <div>
    <h2>デバッグ用5</h2>
  </div>
);

const debug5: ProjectContentForm = {
  genre: "projects",
  title: "デバッグ用5",
  description: "",
  releasedAt: new Date(2021, 5, 29),
  updatedAt: new Date(2019, 6, 5),
  tags: ["game", "popcorn-chef"],
  page: page
};

export default debug5;

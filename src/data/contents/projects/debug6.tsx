import { ProjectContentForm } from ".";

const page: JSX.Element = (
  <div>
    <h2>デバッグ用6</h2>
  </div>
);

const debug6: ProjectContentForm = {
  genre: "projects",
  title: "デバッグ用6",
  description: "",
  releasedAt: new Date(2021, 5, 29),
  updatedAt: new Date(2021, 2, 6),
  tags: ["game", "popcorn-chef"],
  page: page
};

export default debug6;

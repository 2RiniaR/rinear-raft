import { ProjectContentForm } from ".";

const page: JSX.Element = (
  <div>
    <h2>ポップコーン職人</h2>
  </div>
);

const popcornChef: ProjectContentForm = {
  genre: "projects",
  title: "ポップコーン職人",
  description: "",
  releasedAt: new Date(2021, 5, 29),
  updatedAt: new Date(2021, 5, 29),
  tags: ["game", "popcorn-chef"],
  page: page
};

export default popcornChef;

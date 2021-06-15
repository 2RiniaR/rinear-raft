import { ProjectContentForm } from "src/contents/lib/projects/form";

const page: JSX.Element = (
  <div>
    <h2>ポップコーン職人</h2>
  </div>
);

const popcornChef = new ProjectContentForm({
  title: "ポップコーン職人",
  description: "",
  updatedAt: new Date(2021, 5, 29),
  tags: ["game", "popcorn-chef"],
  page: page
});

export default popcornChef;

import { ContentForm } from "src/contents";

const page: JSX.Element = (
  <div>
    <h2>ポップコーン職人</h2>
  </div>
);

const popcornChef: ContentForm = {
  title: "ポップコーン職人",
  createdAt: new Date(2021, 5, 29),
  updatedAt: new Date(2021, 5, 29),
  tags: ["game", "popcorn-chef"],
  page: page
};

export default popcornChef;

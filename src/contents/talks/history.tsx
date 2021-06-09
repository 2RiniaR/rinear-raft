import { ContentForm } from "src/contents";

const page: JSX.Element = (
  <div>
    <h2>ここまでの歩み</h2>
  </div>
);

const history: ContentForm = {
  title: "ここまでの歩み",
  createdAt: new Date(2021, 5, 29),
  updatedAt: new Date(2021, 5, 29),
  tags: ["rinear"],
  page: page
};

export default history;

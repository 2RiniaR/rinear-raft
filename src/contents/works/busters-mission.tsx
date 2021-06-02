import { ContentForm } from "src/contents";

const page: JSX.Element = (
  <div>
    <h2>Busters Mission</h2>
  </div>
);

const bustersMission: ContentForm = {
  title: "Busters Mission",
  createdAt: new Date(2021, 5, 29),
  updatedAt: new Date(2021, 5, 29),
  tags: ["game", "busters-mission"],
  page: page
};

export default bustersMission;

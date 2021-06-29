import { ProjectContentForm } from "..";

const page: JSX.Element = (
  <div>
    <h2>Busters Mission</h2>
  </div>
);

const bustersMission: ProjectContentForm = {
  genre: "projects",
  title: "Busters Mission",
  description: "",
  releasedAt: new Date(2021, 5, 29),
  updatedAt: new Date(2021, 5, 29),
  tags: ["game", "busters-mission"],
  page: page
};

export default bustersMission;

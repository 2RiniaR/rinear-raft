import { ProjectContentForm } from "src/contents/lib/projects/form";

const page: JSX.Element = (
  <div>
    <h2>Busters Mission</h2>
  </div>
);

const bustersMission = new ProjectContentForm({
  title: "Busters Mission",
  description: "",
  updatedAt: new Date(2021, 5, 29),
  tags: ["game", "busters-mission"],
  page: page
});

export default bustersMission;

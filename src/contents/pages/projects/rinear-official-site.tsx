import { ProjectContentForm } from "src/contents/lib/projects/form";

const page: JSX.Element = (
  <div>
    <h2>RineaR公式サイト</h2>
  </div>
);

const rinearOfficialSite: ProjectContentForm = {
  genre: "projects",
  title: "Rinear公式サイト",
  description: "",
  releasedAt: new Date(2021, 5, 29),
  updatedAt: new Date(2021, 5, 29),
  tags: ["web-site", "rinear-official-site"],
  page: page
};

export default rinearOfficialSite;
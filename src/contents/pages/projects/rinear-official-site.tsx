import { ProjectContentForm } from "src/contents/lib/projects/form";

const page: JSX.Element = (
  <div>
    <h2>RineaR公式サイト</h2>
  </div>
);

const rinearOfficialSite = new ProjectContentForm({
  title: "Rinear公式サイト",
  description: "",
  updatedAt: new Date(2021, 5, 29),
  tags: ["web-site", "rinear-official-site"],
  page: page
});

export default rinearOfficialSite;

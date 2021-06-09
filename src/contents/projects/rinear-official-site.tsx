import { ContentForm } from "src/contents";

const page: JSX.Element = (
  <div>
    <h2>Rinear公式サイト</h2>
  </div>
);

const rinearOfficialSite: ContentForm = {
  title: "Rinear公式サイト",
  createdAt: new Date(2021, 5, 29),
  updatedAt: new Date(2021, 5, 29),
  tags: ["web-site", "rinear-official-site"],
  page: page
};

export default rinearOfficialSite;

import { ProjectContentForm } from ".";

const page: JSX.Element = (
  <div>
    <h2>メイジ・シミュレータ</h2>
  </div>
);

const mageSimulator: ProjectContentForm = {
  genre: "projects",
  title: "メイジ・シミュレータ",
  description: "",
  releasedAt: new Date(2021, 5, 29),
  updatedAt: new Date(2021, 5, 29),
  tags: ["game", "mage-simulator"],
  page: page
};

export default mageSimulator;

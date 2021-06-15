import { ProjectContentForm } from "src/contents/lib/projects/form";

const page: JSX.Element = (
  <div>
    <h2>メイジ・シミュレータ</h2>
  </div>
);

const mageSimulator = new ProjectContentForm({
  title: "メイジ・シミュレータ",
  description: "",
  updatedAt: new Date(2021, 5, 29),
  tags: ["game", "mage-simulator"],
  page: page
});

export default mageSimulator;

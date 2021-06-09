import { ContentForm } from "src/contents";

const page: JSX.Element = (
  <div>
    <h2>メイジ・シミュレータ</h2>
  </div>
);

const mageSimulator: ContentForm = {
  title: "メイジ・シミュレータ",
  createdAt: new Date(2021, 5, 29),
  updatedAt: new Date(2021, 5, 29),
  tags: ["game", "mage-simulator"],
  page: page
};

export default mageSimulator;

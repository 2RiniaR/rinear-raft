import dayjs from "dayjs";
import { ProjectContent } from "src/lib/contents";

const page: JSX.Element = (
  <div>
    <h2>メイジ・シミュレータ</h2>
  </div>
);

const mageSimulator: ProjectContent = {
  genre: "projects",
  id: "mage-simulator",
  title: "メイジ・シミュレータ",
  updatedAt: dayjs("2021-05-29"),
  page: page
};

export default mageSimulator;

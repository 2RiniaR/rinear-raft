import dayjs from "dayjs";
import { ProjectContentForm } from "..";

const page: JSX.Element = (
  <div>
    <h2>メイジ・シミュレータ</h2>
  </div>
);

const mageSimulator: ProjectContentForm = {
  genre: "projects",
  title: "メイジ・シミュレータ",
  description: "",
  releasedAt: dayjs("2021-05-29"),
  updatedAt: dayjs("2021-05-29"),
  tags: ["game", "mage-simulator"],
  page: page
};

export default mageSimulator;

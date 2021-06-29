import dayjs from "dayjs";
import { ProjectContentForm } from "..";

const page: JSX.Element = (
  <div>
    <h2>ポップコーン職人</h2>
  </div>
);

const popcornChef: ProjectContentForm = {
  genre: "projects",
  title: "ポップコーン職人",
  description: "",
  releasedAt: dayjs("2021-05-29"),
  updatedAt: dayjs("2021-05-29"),
  tags: ["game", "popcorn-chef"],
  page: page
};

export default popcornChef;

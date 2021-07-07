import dayjs from "dayjs";
import { ProjectContent } from "src/lib/contents";

const page: JSX.Element = (
  <div>
    <h2>ポップコーン職人</h2>
  </div>
);

const popcornChef: ProjectContent = {
  genre: "projects",
  id: "popcorn-chef",
  title: "ポップコーン職人",
  thumbnailPath: "/test.png",
  updatedAt: dayjs("2021-05-29"),
  page: page
};

export default popcornChef;

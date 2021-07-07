import dayjs from "dayjs";
import { ProjectContent } from "src/lib/contents";

const page: JSX.Element = (
  <div>
    <h2>Busters Mission</h2>
  </div>
);

const bustersMission: ProjectContent = {
  genre: "projects",
  id: "busters-mission",
  title: "Busters Mission",
  thumbnailPath: "/test.png",
  updatedAt: dayjs("2021-05-29"),
  page: page
};

export default bustersMission;

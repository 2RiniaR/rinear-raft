import dayjs from "dayjs";
import { ProjectContent } from "src/lib/contents";
import { getComponentTemplate } from "src/lib/component";

const Page = getComponentTemplate(() => (
  <div>
    <h2>Busters Mission</h2>
  </div>
));

const bustersMission: ProjectContent = {
  genre: "projects",
  id: "busters-mission",
  title: "Busters Mission",
  thumbnailsPath: [
    "/contents/projects/busters-mission/stage3_2.jpg",
    "/contents/projects/busters-mission/title.jpg",
    "/contents/projects/busters-mission/stage1.jpg",
    "/contents/projects/busters-mission/stage2.jpg"
  ],
  updatedAt: dayjs("2018-09-05"),
  releasedAt: dayjs("2018-09-05"),
  description: "敵の攻撃を避けながら、ステージ内にいるすべての敵を倒していく2Dアクションゲーム。",
  Page
};

export default bustersMission;

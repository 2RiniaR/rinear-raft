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
  thumbnailPath: "/contents/projects/busters-mission/stage3_2.jpg",
  updatedAt: dayjs("2018-09-05"),
  description: "敵の攻撃を避けながら、ステージ内にいるすべての敵を倒していく2Dアクションゲーム。",
  Page
};

export default bustersMission;

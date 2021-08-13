import dayjs from "dayjs";
import { ProjectContent } from "src/lib/contents";
import { getComponentTemplate } from "src/lib/component";

const Page = getComponentTemplate(() => (
  <div>
    <h2>ポップコーン職人</h2>
  </div>
));

const popcornChef: ProjectContent = {
  genre: "projects",
  id: "popcorn-chef",
  title: "ポップコーン職人",
  thumbnailPath: "/contents/projects/popcorn-chef/game1.jpg",
  updatedAt: dayjs("2020-04-05"),
  description:
    "2人のプレイヤーがリアルタイムでポップコーンを調理し、調理したポップコーンを食べた量で競う2人通信対戦のカジュアルゲーム。",
  Page
};

export default popcornChef;

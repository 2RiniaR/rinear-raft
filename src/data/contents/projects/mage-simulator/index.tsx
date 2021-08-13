import dayjs from "dayjs";
import { ProjectContent } from "src/lib/contents";
import { getComponentTemplate } from "src/lib/component";

const Page = getComponentTemplate(() => (
  <div>
    <h2>メイジ・シミュレータ</h2>
  </div>
));

const mageSimulator: ProjectContent = {
  genre: "projects",
  id: "mage-simulator",
  title: "メイジ・シミュレータ",
  thumbnailPath: "/contents/projects/mage-simulator/step1.png",
  updatedAt: dayjs("2021-02-15"),
  description:
    "Wiiリモコンで特定の動作をしながらマイクに向かって画面に表示された呪文を話すと、画面内で魔法が発射されるシステム。",
  Page
};

export default mageSimulator;

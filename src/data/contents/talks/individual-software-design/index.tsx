import dayjs from "dayjs";
import { TalkContent } from "src/lib/contents";

const page: JSX.Element = (
  <div>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
  </div>
);

const individualSoftwareDesign: TalkContent = {
  genre: "talks",
  id: "individual-software-design",
  title: "個人制作を続けてわかった、プログラム設計のコト",
  updatedAt: dayjs("2021-05-29"),
  page: page
};

export default individualSoftwareDesign;

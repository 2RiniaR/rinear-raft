import dayjs from "dayjs";
import { TalkContent } from "lib/contents";

const Page = (): JSX.Element => (
  <div>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
  </div>
);

const individualSoftwareDesign: TalkContent = {
  genre: "talks",
  id: "individual-software-design",
  index: 5,
  title: "個人制作を続けてわかった、プログラム設計のコト",
  thumbnailPath: "/img/test.png",
  updatedAt: dayjs("2021-05-29"),
  description: "",
  Page
};

export default individualSoftwareDesign;

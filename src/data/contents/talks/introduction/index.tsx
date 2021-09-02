import dayjs from "dayjs";
import { TalkContent } from "lib/contents";

const Page = (): JSX.Element => (
  <div>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
  </div>
);

const introduction: TalkContent = {
  genre: "talks",
  id: "introduction",
  index: 1,
  title: "ホームページ、爆誕！",
  thumbnailPath: "/img/test.png",
  updatedAt: dayjs("2021-05-29"),
  description: "",
  Page
};

export default introduction;

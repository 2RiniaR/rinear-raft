import dayjs from "dayjs";
import { TalkContent } from "src/lib/contents";

const page: JSX.Element = (
  <div>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
  </div>
);

const dummy3: TalkContent = {
  genre: "talks",
  id: "dummy3",
  title: "ダミー3",
  thumbnailPath: "/test.png",
  updatedAt: dayjs("2021-05-29"),
  page: page
};

export default dummy3;

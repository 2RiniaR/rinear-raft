import dayjs from "dayjs";
import { TalkContent } from "src/lib/contents";

const page: JSX.Element = (
  <div>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
  </div>
);

const dummy2: TalkContent = {
  genre: "talks",
  id: "dummy2",
  title: "ダミー2",
  updatedAt: dayjs("2021-05-29"),
  page: page
};

export default dummy2;

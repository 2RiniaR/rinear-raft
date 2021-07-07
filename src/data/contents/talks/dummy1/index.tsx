import dayjs from "dayjs";
import { TalkContent } from "src/lib/contents";

const page: JSX.Element = (
  <div>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
  </div>
);

const dummy1: TalkContent = {
  genre: "talks",
  id: "dummy1",
  title: "ダミー1",
  thumbnailPath: "/test.png",
  updatedAt: dayjs("2021-05-29"),
  page: page
};

export default dummy1;

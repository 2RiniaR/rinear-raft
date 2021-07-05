import dayjs from "dayjs";
import { TalkContent } from "src/lib/contents";

const page: JSX.Element = (
  <div>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
  </div>
);

const introduction: TalkContent = {
  genre: "talks",
  id: "introduction",
  title: "この〇〇は私を、どこへ連れて行くんだろう。",
  updatedAt: dayjs("2021-05-29"),
  page: page
};

export default introduction;

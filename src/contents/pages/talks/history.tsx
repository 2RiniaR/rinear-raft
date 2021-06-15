import { TalkContentForm } from "src/contents/lib/talks/form";

const page: JSX.Element = (
  <div>
    <p>{"ここに本文が入ります".repeat(100)}</p>
    <p>{"ここに本文が入ります".repeat(100)}</p>
    <p>{"ここに本文が入ります".repeat(100)}</p>
  </div>
);

const history: TalkContentForm = {
  genre: "talks",
  title: "ここにタイトルを入力",
  updatedAt: new Date(2021, 5, 29),
  tags: ["rinear"],
  page: page
};

export default history;

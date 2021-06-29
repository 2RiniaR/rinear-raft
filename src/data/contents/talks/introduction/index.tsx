import { TalkContentForm } from "..";

const page: JSX.Element = (
  <div>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
  </div>
);

const introduction: TalkContentForm = {
  genre: "talks",
  title: "この〇〇は私を、どこへ連れて行くんだろう。",
  updatedAt: new Date(2021, 5, 29),
  tags: ["rinear"],
  page: page
};

export default introduction;

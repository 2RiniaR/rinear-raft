import { TalkContentForm } from "..";

const page: JSX.Element = (
  <div>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
  </div>
);

const individualSoftwareDesign: TalkContentForm = {
  genre: "talks",
  title: "個人制作を続けてわかった、プログラム設計のコト",
  updatedAt: new Date(2021, 5, 29),
  tags: [],
  page: page
};

export default individualSoftwareDesign;

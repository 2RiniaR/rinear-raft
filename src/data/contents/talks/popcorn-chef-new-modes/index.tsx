import dayjs from "dayjs";
import { TalkContentForm } from "..";

const page: JSX.Element = (
  <div>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
  </div>
);

const popcornChefNewModes: TalkContentForm = {
  genre: "talks",
  title: "『ポップコーン職人』に、3つのゲームモードが...！？",
  updatedAt: dayjs("2021-05-29"),
  tags: [],
  page: page
};

export default popcornChefNewModes;

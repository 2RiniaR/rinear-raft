import dayjs from "dayjs";
import { TalkContent } from "src/lib/contents";

const page: JSX.Element = (
  <div>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
  </div>
);

const popcornChefNewModes: TalkContent = {
  genre: "talks",
  id: "popcorn-chef-new-modes",
  title: "『ポップコーン職人』に、3つのゲームモードが...！？",
  updatedAt: dayjs("2021-05-29"),
  page: page
};

export default popcornChefNewModes;

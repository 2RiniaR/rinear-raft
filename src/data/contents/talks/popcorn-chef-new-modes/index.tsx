import dayjs from "dayjs";
import { TalkContent } from "lib/contents";

const Page = (): JSX.Element => (
  <div>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
  </div>
);

const popcornChefNewModes: TalkContent = {
  genre: "talks",
  id: "popcorn-chef-new-modes",
  index: 4,
  title: "『ポップコーン職人』に、3つのゲームモードが...！？",
  thumbnailPath: "/img/test.png",
  updatedAt: dayjs("2021-05-29"),
  description: "",
  Page
};

export default popcornChefNewModes;

import dayjs from "dayjs";
import { TalkContent } from "src/lib/contents";
import { getComponentTemplate } from "src/lib/component";

const Page = getComponentTemplate(() => (
  <div>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
  </div>
));

const popcornChefNewModes: TalkContent = {
  genre: "talks",
  id: "popcorn-chef-new-modes",
  title: "『ポップコーン職人』に、3つのゲームモードが...！？",
  thumbnailPath: "/img/test.png",
  updatedAt: dayjs("2021-05-29"),
  description: "",
  Page
};

export default popcornChefNewModes;

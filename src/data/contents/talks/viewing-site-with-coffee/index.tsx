import dayjs from "dayjs";
import { TalkContent } from "lib/contents";

const Page = (): JSX.Element => (
  <div>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
  </div>
);

const viewingSiteWithCoffee: TalkContent = {
  genre: "talks",
  id: "viewing-site-with-coffee",
  index: 6,
  title: "Webサイトを開設したので、コーヒーを片手に改めて眺めてみる",
  thumbnailPath: "/img/test.png",
  updatedAt: dayjs("2021-05-29"),
  description: "",
  Page
};

export default viewingSiteWithCoffee;

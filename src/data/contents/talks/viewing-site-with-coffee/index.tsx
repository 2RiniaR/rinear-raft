import dayjs from "dayjs";
import { TalkContent } from "src/lib/contents";

const page: JSX.Element = (
  <div>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
  </div>
);

const viewingSiteWithCoffee: TalkContent = {
  genre: "talks",
  id: "viewing-site-with-coffee",
  title: "Webサイトを開設したので、コーヒーを片手に改めて眺めてみる",
  updatedAt: dayjs("2021-05-29"),
  page: page
};

export default viewingSiteWithCoffee;

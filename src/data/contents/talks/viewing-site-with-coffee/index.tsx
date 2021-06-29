import { TalkContentForm } from "..";

const page: JSX.Element = (
  <div>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
  </div>
);

const viewingSiteWithCoffee: TalkContentForm = {
  genre: "talks",
  title: "Webサイトを開設したので、コーヒーを片手に改めて眺めてみる",
  updatedAt: new Date(2021, 5, 29),
  tags: ["rinear"],
  page: page
};

export default viewingSiteWithCoffee;

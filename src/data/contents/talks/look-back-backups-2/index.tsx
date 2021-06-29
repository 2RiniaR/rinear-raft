import { TalkContentForm } from "..";

const page: JSX.Element = (
  <div>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
  </div>
);

const lookBackBackups2: TalkContentForm = {
  genre: "talks",
  title: "これまでの活動を、バックアップデータを掘り起こして振り返る 後編",
  updatedAt: new Date(2021, 5, 29),
  tags: [],
  page: page
};

export default lookBackBackups2;

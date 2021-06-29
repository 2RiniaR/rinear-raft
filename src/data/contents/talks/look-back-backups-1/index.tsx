import dayjs from "dayjs";
import { TalkContentForm } from "..";

const page: JSX.Element = (
  <div>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
  </div>
);

const lookBackBackups1: TalkContentForm = {
  genre: "talks",
  title: "これまでの活動を、バックアップデータを掘り起こして振り返る 前編",
  updatedAt: dayjs("2021-05-29"),
  tags: [],
  page: page
};

export default lookBackBackups1;

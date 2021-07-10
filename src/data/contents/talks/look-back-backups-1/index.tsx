import dayjs from "dayjs";
import { TalkContent } from "src/lib/contents";

const page: JSX.Element = (
  <div>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
    <p>{"ここに本文が入ります".repeat(500)}</p>
  </div>
);

const lookBackBackups1: TalkContent = {
  genre: "talks",
  id: "look-back-backups-1",
  title: "これまでの活動を、バックアップデータを掘り起こして振り返る 前編",
  thumbnailPath: "/test.png",
  updatedAt: dayjs("2021-05-29"),
  page: page
};

export default lookBackBackups1;

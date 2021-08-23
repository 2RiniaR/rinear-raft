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

const lookBackBackups2: TalkContent = {
  genre: "talks",
  id: "look-back-backups-2",
  index: 3,
  title: "これまでの活動を、バックアップデータを掘り起こして振り返る 後編",
  thumbnailPath: "/img/test.png",
  updatedAt: dayjs("2021-05-29"),
  description: "",
  Page
};

export default lookBackBackups2;

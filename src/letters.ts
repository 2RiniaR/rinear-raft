import dayjs from "dayjs";
import { Letter } from "./index";
import L001Pic from "public/contents/letters/L001_prologue/present.png";
import L002Pic from "public/contents/letters/L002_chap2/main.png";
import L003Pic from "public/contents/letters/L003_beat-a-bit1/wip1.jpg";

export const letters: { [id: string]: Letter } = {
  "001": {
    title: "1. はじまり",
    dirname: "L001_prologue",
    image: L001Pic,
    releasedAt: dayjs("2022-07-03").toDate(),
    updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
    description: "RineaRの根源となった、ずっと昔の話。"
  },
  "002": {
    title: "2. 解釈の進行",
    dirname: "L002_chap2",
    image: L002Pic,
    releasedAt: dayjs("2022-11-27").toDate(),
    updatedAt: dayjs("2022-11-27 21:00:00").toDate(),
    description: "「RineaRの筏」がchap.2になった。"
  },
  "003": {
    title: "3. 「Beat a bit」の誕生",
    dirname: "L003_beat-a-bit1",
    image: L003Pic,
    releasedAt: dayjs("2022-11-27").toDate(),
    updatedAt: dayjs("2022-11-27 21:00:00").toDate(),
    description: "新作「Beat a bit」の構想について。"
  }
};

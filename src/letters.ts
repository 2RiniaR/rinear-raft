import dayjs from "dayjs";
import { Letter } from "./index";
import thumbnailPic from "public/general/thumbnail-default.webp";
import presentPic from "public/story/present.png";

export const letters: { [id: string]: Letter } = {
  sample: {
    id: "sample",
    title: "デザインサンプル",
    image: thumbnailPic,
    releasedAt: dayjs("2022-07-03").toDate(),
    updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
    description: "デザインのサンプル。"
  },
  story: {
    id: "story",
    title: "あらすじ",
    image: presentPic,
    releasedAt: dayjs("2022-11-02").toDate(),
    updatedAt: dayjs("2022-11-02 21:00:00").toDate(),
    description: "RineaRができるまで。"
  }
};

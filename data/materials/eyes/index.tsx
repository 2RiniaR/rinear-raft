import dayjs from "dayjs";
import { useEffect } from "react";
import { MaterialSettings } from "repositories";
import thumbnailPic from "public/contents/materials/eyes/eyes.webp";
import { ComingSoon } from "writers";
import { Chapter, ContentPage } from "models/content";

const Page: ContentPage = ({ setChapters }) => {
  const refs: { [name: string]: Chapter } = {};

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <>
      <ComingSoon />
    </>
  );
};

const eyes: MaterialSettings = {
  genre: "material",
  id: "eyes",
  title: "み　て　る　よ",
  thumbnail: thumbnailPic,
  thumbnails: [thumbnailPic],
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2022-02-25").toDate(),
  description:
    "誰かがチャットを送ろうとして長考しているのを検知すると、超低確率で目が2つ並んだメッセージを送ってくるDiscord bot。",
  Page
};

export default eyes;

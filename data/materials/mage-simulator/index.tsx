import dayjs from "dayjs";
import { useEffect } from "react";
import { Chapter, ContentPage } from "models/content";
import { MaterialSettings } from "repositories";
import thumbnailPic1 from "public/contents/materials/mage-simulator/title.webp";
import thumbnailPic2 from "public/contents/materials/mage-simulator/setup.webp";
import thumbnailPic3 from "public/contents/materials/mage-simulator/ready.webp";
import thumbnailPic4 from "public/contents/materials/mage-simulator/activate.webp";
import { ComingSoon } from "writers";

const Page: ContentPage = ({ setChapters }) => {
  const refs: { [name: string]: Chapter } = {};

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <>
      <ComingSoon />
    </>
  );
};

const mageSimulator: MaterialSettings = {
  genre: "material",
  id: "mage-simulator",
  title: "メイジ・シミュレータ",
  thumbnail: thumbnailPic1,
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3, thumbnailPic4],
  updatedAt: dayjs("2022-07-03 21:00:00").toDate(),
  releasedAt: dayjs("2021-02-25").toDate(),
  description:
    "Wiiリモコンの動きとマイクの音声を入力として、Wiiリモコンで特定の動作をしながらマイクに向かって画面に表示された呪文を話すと、画面内で魔法が発射されるシステム。",
  Page
};

export default mageSimulator;

import dayjs from "dayjs";
import { useEffect } from "react";
import { ChapterPoint, ContentPageProps, MaterialContent } from "lib/contents";
import thumbnailPic1 from "public/contents/materials/mage-simulator/title.webp";
import thumbnailPic2 from "public/contents/materials/mage-simulator/ex1.webp";
import thumbnailPic3 from "public/contents/materials/mage-simulator/step1.webp";
import thumbnailPic4 from "public/contents/materials/mage-simulator/step5.webp";
import { ComingSoon } from "content-parts";

const Page = ({ setChapters }: ContentPageProps): JSX.Element => {
  const refs: { [name: string]: ChapterPoint } = {};

  useEffect(() => setChapters(Object.values(refs)), []);

  return (
    <>
      <ComingSoon />
    </>
  );
};

const mageSimulator: MaterialContent = {
  genre: "materials",
  id: "mage-simulator",
  title: "メイジ・シミュレータ",
  thumbnail: thumbnailPic1,
  thumbnails: [thumbnailPic1, thumbnailPic2, thumbnailPic3, thumbnailPic4],
  updatedAt: dayjs("2022-07-03 21:00:00"),
  releasedAt: dayjs("2021-02-25"),
  description:
    "Wiiリモコンの動きとマイクの音声を入力として、Wiiリモコンで特定の動作をしながらマイクに向かって画面に表示された呪文を話すと、画面内で魔法が発射されるシステム。",
  Page
};

export default mageSimulator;

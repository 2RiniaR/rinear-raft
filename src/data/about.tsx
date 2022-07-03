import React from "react";
import InternalLink from "../components/functions/InternalLink";
import { About } from "lib/about";

export const about: About = {
  Document: () => (
    <>
      <p>
        『RineaR（りにあ）』とは、クリエイター『Rinia（りにあ）』による個人活動の総称です。その過程で書き留めておきたいことは
        <InternalLink href={"/letters"}>Letters</InternalLink>へ、一連の活動は
        <InternalLink href={"/materials"}>Materials</InternalLink>へ投稿します。
      </p>
      <p>
        見える抽象を辿るために、漂うように制作をしています。ここまでの経緯を知るために、まずは以下のストーリーをご覧ください。
      </p>
    </>
  )
};

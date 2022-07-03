/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import { ContentImage, Paragraph } from "content-parts";
import ExprPic from "public/contents/materials/marvelous/top2.webp";
import TutorialPic from "public/contents/materials/marvelous/Tutorial1.webp";

const Section = (): JSX.Element => (
  <>
    <ContentImage src={ExprPic} alt="えらいポイント" />
    <ContentImage src={TutorialPic} alt="チュートリアル1" />
    <Paragraph>
      えらいポイントとは、あなたの行動の「えらさ」を表すポイントです。毎週月曜4:00にリセットされ、それまでの1週間でのランキングが発表されます。
    </Paragraph>
  </>
);

export default Section;

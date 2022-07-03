/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import TutorialPic2 from "public/contents/materials/marvelous/Tutorial2.webp";
import TutorialPic3 from "public/contents/materials/marvelous/Tutorial3.webp";
import TutorialPic4 from "public/contents/materials/marvelous/Tutorial4.webp";
import { ContentImage, Emoji, Paragraph } from "content-parts";

const Section = (): JSX.Element => (
  <>
    <ContentImage src={TutorialPic2} alt="チュートリアル2" />
    <Paragraph>
      他ユーザーのメッセージに
      <Emoji characters="👏" label="拍手" />
      のリアクションを付けることで、相手を褒めることができます。褒めた相手にはえらいポイントが付与されます。
    </Paragraph>

    <ContentImage src={TutorialPic3} alt="チュートリアル3" />
    <Paragraph>
      他ユーザーのメッセージに
      <Emoji characters="🙌" label="万歳" />
      のリアクションを付けることで、相手に特殊な褒めるアクションを送ることができます。褒めた相手にはえらいポイントが多く付与されます。
      ただし、一週間当たりの使用回数には制限があります。
    </Paragraph>

    <ContentImage src={TutorialPic4} alt="チュートリアル4" />
    <Paragraph>
      他ユーザーのメッセージに
      <Emoji characters="💩" label="排泄物" />
      のリアクションを付けることで、相手を咎めることができます。褒めた相手のえらいポイントが減少します。
    </Paragraph>
  </>
);

export default Section;

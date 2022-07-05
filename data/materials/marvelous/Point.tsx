import { ContentImage, Paragraph } from "writers";
import ExprPic from "public/contents/materials/marvelous/page2.webp";
import TutorialPic from "public/contents/materials/marvelous/tutorial1.webp";

export const Point = (): JSX.Element => (
  <>
    <ContentImage src={ExprPic} alt="えらいポイント" />
    <ContentImage src={TutorialPic} alt="チュートリアル1" />
    <Paragraph>
      えらいポイントとは、あなたの行動の「えらさ」を表すポイントです。毎週月曜4:00にリセットされ、それまでの1週間でのランキングが発表されます。
    </Paragraph>
  </>
);

import { ContentImage, Paragraph } from "content-parts";
import ExprPic from "public/contents/materials/marvelous/page2.webp";
import TutorialPic from "public/contents/materials/marvelous/tutorial1.webp";

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

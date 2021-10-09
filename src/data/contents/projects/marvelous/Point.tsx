import { ContentImage, Heading, Paragraph } from "content-parts";
import ExprPic from "public/contents/projects/marvelous/top2.png";
import TutorialPic from "public/contents/projects/marvelous/Tutorial1.jpg";

const Section = (): JSX.Element => (
  <>
    <ContentImage src={ExprPic} alt="えらいポイント" />
    <ContentImage src={TutorialPic} alt="チュートリアル1" />

    <Heading level="sub">えらいポイントとは、あなたの行動の「えらさ」を表すポイントです。</Heading>
    <Paragraph>毎週月曜4:00にリセットされ、それまでの1週間でのランキングが発表されます。</Paragraph>
  </>
);

export default Section;

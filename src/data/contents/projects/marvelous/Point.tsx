import ContentImage from "components/parts/contents/ContentImage";
import ExprPic from "public/contents/projects/marvelous/top2.png";
import TutorialPic from "public/contents/projects/marvelous/Tutorial1.jpg";

const Section = (): JSX.Element => (
  <>
    <ContentImage src={ExprPic} alt="えらいポイント" />
    <ContentImage src={TutorialPic} alt="チュートリアル1" />

    <h2>えらいポイントとは、あなたの行動の「えらさ」を表すポイントです。</h2>
    <p>毎週月曜4:00にリセットされ、それまでの1週間でのランキングが発表されます。</p>
  </>
);

export default Section;

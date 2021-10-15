import TutorialPic5 from "public/contents/projects/marvelous/Tutorial5.webp";
import TutorialPic6 from "public/contents/projects/marvelous/Tutorial6.webp";
import TutorialPic7 from "public/contents/projects/marvelous/Tutorial7.webp";
import TutorialPic8 from "public/contents/projects/marvelous/Tutorial8.webp";
import { ContentImage, Paragraph } from "content-parts";

const Section = (): JSX.Element => (
  <>
    <ContentImage src={TutorialPic5} alt="チュートリアル5" />
    <Paragraph>毎日、最初のメッセージを送信したときにえらいポイントが付与されます。</Paragraph>

    <ContentImage src={TutorialPic6} alt="チュートリアル6" />
    <Paragraph>
      他ユーザーを一定回数褒めると自分にもえらいポイントのボーナスが貰えます。反対に、他ユーザーを一定回数咎めると自分にもえらいポイントのペナルティが与えられます。
    </Paragraph>

    <ContentImage src={TutorialPic7} alt="チュートリアル7" />
    <Paragraph>
      当botには、ユーザーにGitHubのアカウントを紐づけることが可能です。紐づけた状態で、一日に1回以上Contributeを行うとえらいポイントのボーナスが貰えます。
    </Paragraph>

    <ContentImage src={TutorialPic8} alt="チュートリアル8" />
    <Paragraph>
      夜中1時より前に「おやすみ」と送信し、昼12時より前に次のメッセージを送信することでえらいポイントのボーナスが貰えます。ただし、夜中1時～5時の間にメッセージを送信したことが検知された場合は、ボーナスが貰えません。
    </Paragraph>
  </>
);

export default Section;

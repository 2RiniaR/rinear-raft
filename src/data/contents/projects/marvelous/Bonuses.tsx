import ContentImage from "components/parts/contents/ContentImage";
import TutorialPic5 from "public/contents/projects/marvelous/Tutorial5.jpg";
import TutorialPic6 from "public/contents/projects/marvelous/Tutorial6.jpg";
import TutorialPic7 from "public/contents/projects/marvelous/Tutorial7.jpg";
import TutorialPic8 from "public/contents/projects/marvelous/Tutorial8.jpg";

const Section = (): JSX.Element => (
  <>
    <ContentImage src={TutorialPic5} alt="チュートリアル5" />
    <p>毎日、最初のメッセージを送信したときにえらいポイントが付与されます。</p>

    <ContentImage src={TutorialPic6} alt="チュートリアル6" />
    <p>
      他ユーザーを一定回数褒めると自分にもえらいポイントのボーナスが貰えます。反対に、他ユーザーを一定回数咎めると自分にもえらいポイントのペナルティが与えられます。
    </p>

    <ContentImage src={TutorialPic7} alt="チュートリアル7" />
    <p>
      当botには、ユーザーにGitHubのアカウントを紐づけることが可能です。紐づけた状態で、一日に1回以上Contributeを行うとえらいポイントのボーナスが貰えます。
    </p>

    <ContentImage src={TutorialPic8} alt="チュートリアル8" />
    <p>
      夜中1時より前に「おやすみ」と送信し、昼12時より前に次のメッセージを送信することでえらいポイントのボーナスが貰えます。
    </p>
    <p>ただし、夜中1時～5時の間にメッセージを送信したことが検知された場合は、ボーナスが貰えません。</p>
  </>
);

export default Section;

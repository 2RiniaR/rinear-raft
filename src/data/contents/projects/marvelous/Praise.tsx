import ContentImage from "components/parts/contents/ContentImage";
import TutorialPic2 from "public/contents/projects/marvelous/Tutorial2.jpg";
import TutorialPic3 from "public/contents/projects/marvelous/Tutorial3.jpg";
import TutorialPic4 from "public/contents/projects/marvelous/Tutorial4.jpg";

const Section = (): JSX.Element => (
  <>
    <ContentImage src={TutorialPic2} alt="チュートリアル2" />
    <p>
      他ユーザーのメッセージに
      <span role="img" aria-label="拍手">
        👏
      </span>
      のリアクションを付けることで、相手を褒めることができます。褒めた相手にはえらいポイントが付与されます。
    </p>

    <ContentImage src={TutorialPic3} alt="チュートリアル3" />
    <p>
      他ユーザーのメッセージに
      <span role="img" aria-label="拍手">
        🙌
      </span>
      のリアクションを付けることで、相手に特殊な褒めるアクションを送ることができます。褒めた相手にはえらいポイントが多く付与されます。
    </p>
    <p>ただし、一週間当たりの使用回数には制限があります。</p>

    <ContentImage src={TutorialPic4} alt="チュートリアル4" />
    <p>
      他ユーザーのメッセージに
      <span role="img" aria-label="拍手">
        💩
      </span>
      のリアクションを付けることで、相手を咎めることができます。褒めた相手のえらいポイントが減少します。
    </p>
  </>
);

export default Section;
